import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
  const formScheme = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    confirm_email: yup
      .string()
      .oneOf([yup.ref("email")], "Emails diferentes")
      .required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    acceptTerms: yup.bool().oneOf([true], "Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formScheme),
  });

  const onSubmitFunction = (data) => {
    //Fazer consulta na API
    // Enviar para API
  };
  return (
    <div className='big-container'>
        <div className="container">
          <h3> Praticando Forms </h3>

          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            
            <input placeholder="Seu username" {...register("username")} />
            <p> {errors.username?.message} </p>
            <input placeholder="Seu nome" {...register("name")} />
            <p> {errors.name?.message} </p>
            <input placeholder="Seu email" {...register("email")} />
            <p> {errors.email?.message} </p>
            <input
              placeholder="Confirmar email"
              type="email"
              {...register("confirm_email")}
            />
            <div className='container-password'>
              <div>
                <p> {errors.confirm_email?.message} </p>
                <input placeholder="Senha" {...register("password")} />
                <p> {errors.password?.message} </p>
              </div>
              <div>
                <input
                  placeholder="Confirmar senha"
                  type="password"
                  {...register("confirm_password")}
                />
                <p> {errors.confirm_password?.message} </p>
              </div>
            </div>
            <div className='checkbox'>
              <input type='checkbox' {...register("acceptTerms")} />
              <p>Eu aceito os termos de uso da aplicação</p>
              <p> {errors.acceptTerms?.message} </p>
            </div>
            
            <button type='submit'> CADASTRAR </button>
          </form>
        </div>
        </div>
    
  );
}

export default App;
