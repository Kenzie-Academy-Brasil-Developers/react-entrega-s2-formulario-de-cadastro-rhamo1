import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { useState } from "react";

export const Forms = ({ setUser }) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(true);
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Esse campo só aceita letras"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .matches(
        "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
        "E-mail inválido"
      ),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "1 maiúscula, 1 minúscula, 1 caracter especial, 1 número."
      ),
    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    toast.success("Usuário cadastrado com sucesso!");
    history.push(`/success/${data.name}`);
    setUser(data.name);
  };

  const show = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  return (
    <>
      <motion.div className="container">
        <form className="container" onSubmit={handleSubmit(handleForm)}>
          <div>
            <input
              name="name"
              className="border input"
              type="text"
              placeholder="nome"
              {...register("name")}
            />
            <p className="errorMessage">{errors.name && errors.name.message}</p>
          </div>
          <div>
            <input
              name="email"
              className="border input"
              type="text"
              placeholder="e-mail"
              {...register("email")}
            />
            <p className="errorMessage">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div>
            <input
              name="password"
              className="border input password"
              type={showPassword ? "password" : "text"}
              placeholder="senha"
              {...register("password")}
            />
            <p className="errorMessage">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div>
            <input
              name="confirm_password"
              className="border input password"
              type={showPassword ? "password" : "text"}
              placeholder="confirmar senha"
              {...register("confirm_password")}
            />
            <p className="errorMessage">
              {errors.confirm_password && errors.confirm_password.message}
            </p>
          </div>
          <div>
            <button type="submit" className="button">
              Cadastrar
            </button>
          </div>
        </form>
        <button className="button" onClick={show}>
          👀
        </button>
      </motion.div>
    </>
  );
};
