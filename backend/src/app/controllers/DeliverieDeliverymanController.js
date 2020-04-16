import * as Yup from 'yup';
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Deliverie from '../models/Deliverie';

class DeliverieDeliverymanController {
  async index(req, res) {
    const { id } = req.params;
    const deliveries = await Deliverie.findAll({
      where: { deliveryman_id: id },
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .notRequired()
        .test(
          'recipient_id',
          'Recipient must not be informed!',
          value => !value
        ),
      deliveryman_id: Yup.number()
        .notRequired()
        .test(
          'deliveryman_id',
          'Deliveryman must not be informed!',
          value => !value
        ),
      product: Yup.string()
        .notRequired()
        .test('product', 'Product must not be informed!', value => !value),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number().when('end_date', (end_date, field) => {
        return end_date ? field.required() : field;
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { start_date } = req.body;
    const { id, idDeliverie } = req.params;

    if (start_date) {
      const parseDate = parseISO(start_date);
      const count = await Deliverie.count({
        where: {
          start_date: {
            [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
          },
          deliveryman_id: id,
        },
      });

      if (count >= 5) {
        return res.status(400).json({ error: 'Maximum withdrawals per day' });
      }
    }

    const deliverie = await Deliverie.findByPk(idDeliverie);

    await deliverie.update(req.body);

    return res.json(deliverie);
  }
}

export default new DeliverieDeliverymanController();
