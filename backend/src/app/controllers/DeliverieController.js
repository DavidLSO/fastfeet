import * as Yup from 'yup';
import { startOfHour, parseISO } from 'date-fns';
import Queue from '../../lib/Queue';
import Deliverie from '../models/Deliverie';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';
import NewDeliverieMail from '../jobs/NewDeliverieMail';

class DeliverieController {
  async index(req, res) {
    const deliveries = await Deliverie.findAll({
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['url', 'path'],
            },
          ],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'city', 'state', 'street', 'number', 'zip_code'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['url', 'path'],
        },
      ],
      where: req.query,
    });

    return res.json(deliveries);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
      canceled_at: Yup.date()
        .notRequired()
        .test(
          'canceled_at',
          'Cancellation date must not be informed!',
          value => !value
        ),
      start_date: Yup.date()
        .notRequired()
        .test(
          'start_date',
          'Start date must not be informed!',
          value => !value
        ),
      end_date: Yup.date()
        .notRequired()
        .test('end_date', 'End date must not be informed!', value => !value),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const deliverie = await Deliverie.create(req.body);

    await Queue.add(NewDeliverieMail.key, {
      deliverie,
    });

    return res.json(
      await Deliverie.findByPk(deliverie.id, {
        include: [
          {
            model: Deliveryman,
            as: 'deliveryman',
            attributes: ['name'],
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['url', 'path'],
              },
            ],
          },
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'name',
              'city',
              'state',
              'street',
              'number',
              'zip_code',
            ],
          },
          {
            model: File,
            as: 'signature',
            attributes: ['url', 'path'],
          },
        ],
      })
    );
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
      canceled_at: Yup.date()
        .notRequired()
        .test(
          'canceled_at',
          'Cancellation date must not be informed!',
          value => !value
        ),
      start_date: Yup.date()
        .notRequired()
        .test(
          'start_date',
          'Start date must not be informed!',
          value => !value
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }
    const { start_date } = req.body;
    const startHour = startOfHour(parseISO(start_date));
    if (
      !!start_date &&
      !(startHour.getHours() >= 8 && startHour.getHours() <= 18)
    ) {
      return res
        .status(400)
        .json({ error: 'Start Date must be between 8 and 18 hours' });
    }

    const { id } = req.params;
    const deliverie = await Deliverie.findByPk(id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['url', 'path'],
            },
          ],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'city', 'state', 'street', 'number', 'zip_code'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['url', 'path'],
        },
      ],
    });

    await deliverie.update(req.body);

    return res.json(deliverie);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliverie = await Deliverie.findByPk(id);

    await deliverie.destroy();

    return res.status(200).json();
  }
}

export default new DeliverieController();
