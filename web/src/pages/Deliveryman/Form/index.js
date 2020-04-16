import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdDone } from "react-icons/md";
import { toast } from "react-toastify";
import * as Yup from "yup";

import Input from "~/components/Form/Input";
import {
  Container,
  HeaderContainer,
  ButtonContainer,
  FormContainer,
  PainelForm,
} from "./styles";
import AvatarInput from "~/components/Form/AvatarInput";
import {
  createRequest,
  updateRequest,
} from "~/store/modules/deliveryman/actions";

export default function Form(props) {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório!"),
    email: Yup.string().email().required("Email é obrigatório!"),
  });
  const deliveryman = props.history.location.state;

  console.tron.error(deliveryman);
  async function handleSubmit(data, reset) {
    try {
      await schema.validate(data, { abourtEarly: false });

      if (deliveryman) {
        dispatch(updateRequest(data, deliveryman.id));
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
        initialData={deliveryman}
      >
        <HeaderContainer>
          <h2>{deliveryman ? "Edição" : "Cadastro"} de encomendas</h2>
          <ButtonContainer>
            <Link to="/deliveryman">
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
          <AvatarInput name="avatar_id" />
          <label htmlFor="name">Nome</label>
          <Input name="name" />
          <label htmlFor="email">E-mail</label>
          <Input name="email" type="email" />
        </PainelForm>
      </FormContainer>
    </Container>
  );
}
