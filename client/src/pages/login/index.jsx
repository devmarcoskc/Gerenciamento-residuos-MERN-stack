import React, { useState } from 'react'
import * as C from './styles.js';
import Logo from "../../assets/logo.png";
import Register from './register.jsx';
import { useForm } from 'react-hook-form';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/apiCalls.js';
import { setLogin } from '../../redux/index.js';

const loginUserSchema = z.object({
  email: z.string()
    .nonempty("Campo obrigatório")
    .email("Formato inválido"),
  password: z.string()
    .nonempty("Campo obrigatório")
    .min(6, "Senha deve conter no mínimo 6 caracteres"),
});

const Login = () => {
  const [isRegisterNeeded, setIsRegisterNeeded] = useState(false);
  const [invalidErrorMsg, setInvalidErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const LoginUser = async (data) => {
    try {
      const response = await loginUser(data);
        
      dispatch(
        setLogin({
          user: response.data.user,
          token: response.data.token,
        })
      )
      navigate("/geral");
    } catch (error) {
      if(error.response.status === 406) {
        setInvalidErrorMsg(`${error.response.data.msg}`)
      }
    }
  }

  return (
    <C.Container>
      <C.Image src={Logo}/>
      <C.P>
        Sistema de administração
        de resíduos sólidos!
      </C.P>

      {isRegisterNeeded === false ? (
        <C.Form onSubmit={handleSubmit(LoginUser)}>
          <C.InputsDiv>
            <label htmlFor='email'>Email:</label>
            <input 
              type="email" 
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </C.InputsDiv>

          <C.InputsDiv>
            <label htmlFor='password'>Senha:</label>
            <input 
              type="password" 
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}
            {invalidErrorMsg && <span>{invalidErrorMsg}</span>}
          </C.InputsDiv>

          <C.Button>Fazer Login</C.Button>
        </C.Form>
      ) : (
        <Register setIsRegisterNeeded={setIsRegisterNeeded}/>
      )}

      <C.TextToRegisterArea>
        {isRegisterNeeded ? (
          <p>Já tem uma conta ? <span onClick={() => setIsRegisterNeeded(false)}>Faça seu login</span></p>
        ): (
          <p>Não tem uma conta ? <span onClick={() => setIsRegisterNeeded(true)}>Registre-se aqui</span></p>
        )}
      </C.TextToRegisterArea>

      <C.SpanWarining>
        Como o sistema está sendo hospedado em site gratuito, 
        o loading das funcionalidades pode demorar um pouco! Por favor,
        seja paciente para testar.
      </C.SpanWarining>
    </C.Container>
  )
}

export default Login