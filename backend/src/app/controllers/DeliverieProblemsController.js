import * as Yup from 'yup';
import { Op } from 'sequelize';
import DeliverieProblems from '../models/DeliverieProblems';
import Deliverie from '../models/Deliverie';
import Queue from '../../lib/Queue';
import CancellationDeliverieMail from '../jobs/CancellationDeliverieMail';

class DeliverieProblemsController {
  async index(req, res) {
    const { id } = req.params;
    let deliverie_problems = [];
    if (id) {
      deliverie_problems = await DeliverieProblems.findAll({
        where: { delivery_id: id },
      });
    } else {
      deliverie_problems = await DeliverieProblems.findAll({
        include: [
          {
            model: Deliverie,
            as: 'delivery',
            where: { canceled_at: { [Op.eq]: null } },
          },
        ],
      });
    }

    return res.json(deliverie_problems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const deliverie_problems = await DeliverieProblems.create(req.body);
    return res.json(deliverie_problems);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliverie = await Deliverie.findByPk(id);
    await deliverie.update({ canceled_at: new Date() });
    await Queue.add(CancellationDeliverieMail.key, {
      deliverie,
    });
    return res.status(200).json();
  }
}
export default new DeliverieProblemsController();
