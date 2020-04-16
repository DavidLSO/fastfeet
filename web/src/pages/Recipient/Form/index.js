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
  Group,
} from "./styles";
import {
  createRequest,
  updateRequest,
} from "~/store/modules/recipient/actions";

export default function Form(props) {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório!"),
    street: Yup.string().required("Rua é obrigatório!"),
    number: Yup.number().required("Número é obrigatório!"),
    complement: Yup.string(),
    city: Yup.string().required("Cidade é obrigatório!"),
    state: Yup.string().required("Estado é obrigatório!"),
    zip_code: Yup.string().required("CEP é obrigatório!"),
  });
  const recipient = props.history.location.state;

  async function handleSubmit(data, reset) {
    try {
      await schema.validate(data, { abourtEarly: false });

      if (recipient) {
        dispatch(updateRequest(data, recipient.id));
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
        initialData={recipient}
      >
        <HeaderContainer>
          <h2>{recipient ? "Edição" : "Cadastro"} de destinatário</h2>
          <ButtonContainer>
            <Link to="/recipient">
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
          <Group>
            <label htmlFor="name">
              Nome
              <Input name="name" />
            </label>
          </Group>
          <Group>
            <label htmlFor="street">
              Rua
              <Input name="street" />
            </label>

            <label htmlFor="number">
              Número
              <Input name="number" type="number" />
            </label>

            <label htmlFor="complement">
              Complemento
              <Input name="complement" />
            </label>
          </Group>
          <Group>
            <label htmlFor="city">
              Cidade
              <Input name="city" />
            </label>

            <label htmlFor="state">
              Estado
              <Input name="state" />
            </label>

            <label htmlFor="zip_code">
              CEP
              <Input name="zip_code" />
            </label>
          </Group>
        </PainelForm>
      </FormContainer>
    </Container>
  );
}
