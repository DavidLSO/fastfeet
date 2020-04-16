import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { id } = req.query;
    let deliveryman = [];
    if (id) {
      deliveryman = await Deliveryman.findAll({
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['url', 'path'],
          },
        ],
        where: {
          id: id,
        },
      });
    } else {
      deliveryman = await Deliveryman.findAll({
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['url', 'path'],
          },
        ],
      });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists.' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['url', 'path'],
        },
      ],
    });

    await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    try {
      await deliveryman.destroy();
    } catch (err) {
      return res.status(500).json(err);
    }

    return res.status(200).json();
  }
}

export default new DeliverymanController();
