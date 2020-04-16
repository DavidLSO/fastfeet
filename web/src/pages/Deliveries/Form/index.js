import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdDone } from "react-icons/md";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Input from "~/components/Form/Input";
import Select from "~/components/Form/Select";
import {
  Container,
  HeaderContainer,
  ButtonContainer,
  FormContainer,
  PainelForm,
} from "./styles";
import {
  createRequest,
  updateRequest,
} from "~/store/modules/deliverie/actions";
import api from "~/services/api";

export default function Form(props) {
  const dispatch = useDispatch();
  const [recipients, setRecipient] = useState([]);
  const [deliverymans, setDeliveryman] = useState([]);
  const delivery = props.history.location.state;

  const schema = Yup.object().shape({
    recipient_id: Yup.number().required("Destinatário é obrigatório!"),
    deliveryman_id: Yup.number().required("Entregador é obrigatório!"),
    product: Yup.string().required("Produto é obrigatório!"),
  });

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get("recipients");

      const data = response.data.map((recipient) => {
        return { value: recipient.id, label: recipient.name };
      });

      setRecipient(data);
    }

    async function loadDeliveryman() {
      const response = await api.get("deliveryman");

      const data = response.data.map((deliveryman) => {
        return { value: deliveryman.id, label: deliveryman.name };
      });

      setDeliveryman(data);
    }
    loadRecipient();
    loadDeliveryman();
  }, []);

  async function handleSubmit(data, reset) {
    try {
      await schema.validate(data, { abourtEarly: false });

      if (delivery) {
        dispatch(updateRequest(data, delivery.id));
      } else {
        dispatch(createRequest(data));
        reset();
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error("Todos os campos são obrigatórios!");
      }
    }
  }

  return (
    <Container>
      <FormContainer
        onSubmit={handleSubmit}
        schema={schema}
        initialData={delivery}
      >
        <HeaderContainer>
          <h2>{delivery ? "Edição" : "Cadastro"} de encomendas</h2>
          <ButtonContainer>
            <Link to="/delivery">
              <MdKeyboardArrowLeft size={20} />
              VOLTAR
            </Link>
            <button type="submit">
              <MdDone size={20} />
              SALVAR
            </button>
          </ButtonContainer>
        </HeaderContainer>
        <PainelForm>
          <label htmlFor="recipient_id">Destinatário</label>
          {delivery ? (
            <Select
              options={recipients}
              name="recipient_id"
              defaultValue={{
                value: delivery.recipient_id,
                label: delivery.recipient.name,
              }}
            />
          ) : (
            <Select options={recipients} name="recipient_id" />
          )}

          <label htmlFor="deliveryman_id">Entregador</label>
          {delivery ? (
            <Select
              options={deliverymans}
              name="deliveryman_id"
              defaultValue={{
                value: delivery.deliveryman_id,
                label: delivery.deliveryman.name,
              }}
            />
          ) : (
            <Select options={deliverymans} name="deliveryman_id" />
          )}

          <label htmlFor="product">Nome do produto</label>
          <Input name="product" />
        </PainelForm>
      </FormContainer>
    </Container>
  );
}
