import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";
import logo from "~/assets/fastfeet-logo.png";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira e-mail valido")
    .required("E-mail é Obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});
function SignIn(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="email">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <label htmlFor="password">SUA PASSWORD</label>
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">
          {loading ? "Carregando ..." : "Entrar no sistema"}
        </button>
      </Form>
    </>
  );
}

export default SignIn;
