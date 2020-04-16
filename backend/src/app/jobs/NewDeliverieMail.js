import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Mail from '../../lib/Mail';

class NewDeliverieMail {
  get key() {
    return 'NewDeliverieMail';
  }

  async handle({ data }) {
    const { deliverie } = data;

    await Mail.sendMail({
      to: `${deliverie.deliveryman.name} <${deliverie.deliveryman.email}>`,
      subject: 'Nova Entrega',
      template: 'new_deliverie',
      context: {
        deliveryman: deliverie.deliveryman.name,
        recipient: deliverie.recipient.name,
        date: format(
          parseISO(deliverie.created_at),
          "'day' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new NewDeliverieMail();
