import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

//styles
import { TextField, Button } from "@material-ui/core";
import "./stylesForm.css";

export default function Form() {
  // { client, setClient }  props desconsideradas pelo uso do Params

  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/,
        "O nome deve conter somente letras"
      ),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^((?=.*[0-9]){1})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*[a-zA-Z]){1}[0-9a-zA-Z!@#$%^&*()\-_=+{};:,<.>]{8,}.*$/,
        "A senha deve conter 8 caracteres com ao menos uma letra, um número e um caracter especial"
      ),
    passwordConfirm: yup
      .string("")
      .required("Compatibilidade obrigatória")
      .oneOf([yup.ref("password")], "Senha não correspondente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    // setClient(data);
    // console.log(data.name);
    const nameAdress = data.name;
    // console.log(nameAdress);

    history.push(`/home/${nameAdress}`);
  };

  return (
    <>
      {/* // <Router> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça seu cadastro</h2>
        <TextField
          error={!!errors.name}
          required
          placeholder="Nome"
          helperText={errors.name && errors.name.message}
          variant="standard"
          {...register("name")}
        />

        <TextField
          error={!!errors.email}
          required
          placeholder="E-mail"
          helperText={errors.email && errors.email.message}
          variant="standard"
          {...register("email")}
        />
        <TextField
          error={!!errors.password}
          required
          type="password"
          placeholder="Senha"
          helperText={errors.password && errors.password.message}
          variant="standard"
          {...register("password")}
        />
        <TextField
          error={!!errors.passwordConfirm}
          required
          type="password"
          placeholder="Confirmação de senha"
          helperText={errors.passwordConfirm && errors.passwordConfirm.message}
          variant="standard"
          {...register("passwordConfirm")}
        />
        <Button type="submit" variant="outlined">
          {/* <Link to={`/home/${client.name}`}>Cadastrar</Link> */}
          Cadastrar
        </Button>
      </form>
      {/* </Router> */}
    </>
  );
}
