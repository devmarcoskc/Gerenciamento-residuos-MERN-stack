import React, { useState } from 'react'
import * as C from "./styles.js";
import { useForm } from 'react-hook-form';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { createNewUser } from '../../utils/apiCalls.js';

const createUserFormSchema = z.object({
  cidade: z.string()
    .nonempty("Campo é obrigatório")
    .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido")
    .min(2, "Deve conter no mínimo 2 caracteres"),
  estado: z.string()
    .nonempty("Campo obrigatório")
    .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido")
    .min(2, "Deve conter no mínimo 2 caracteres"),
  orgao: z.string()
    .nonempty("Campo obrigatório")
    .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido")
    .min(3, "Deve conter no mínimo 3 caracteres"),
  email: z.string()
    .nonempty("Campo obrigatório")
    .email("Formato inválido"),
  password: z.string()
    .nonempty("Campo obrigatório")
    .min(6, "Senha deve conter no mínimo 6 caracteres"),
})

const Register = ({setIsRegisterNeeded, setIsLoading}) => {
  const [isNeededErrorMsg, setIsNeededErrorMsg] = useState(false); 

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  const createUser = async (data) => {
    setIsLoading(true);
    try {
      const response = await createNewUser(data);
      response.data.emailAlreadyExists ? setIsNeededErrorMsg(true) : setIsRegisterNeeded(false);
      setIsLoading(false);
    } catch(error) {
      setIsLoading(false);
      alert(error.message);
    }
  }

  return (
    <C.Form onSubmit={handleSubmit(createUser)}>
        <C.RegisterDivFlex>
            <C.InputsDiv>
                <label htmlFor='cidade'>
                    Cidade de atuação:
                </label>
                <input 
                  type="text" 
                  placeholder="Digite sua cidade aqui"
                  {...register('cidade')}
                />
                {errors.cidade && <span>{errors.cidade.message}</span>}
            </C.InputsDiv>

            <C.InputsDiv>
                <label htmlFor='estado'>
                    Estado de atuação:
                </label>
                <input 
                  type="text" 
                  placeholder="Digite seu estado aqui"
                  {...register('estado')}
                />
                {errors.estado && <span>{errors.estado.message}</span>}
            </C.InputsDiv>
        </C.RegisterDivFlex>

        <C.InputsDiv>
            <label htmlFor='orgao'>
                Orgão Responsável:
            </label>
            <input 
              type="text" 
              placeholder="Digite o orgão responsável"
              {...register('orgao')}
            />
            {errors.orgao && <span>{errors.orgao.message}</span>}
        </C.InputsDiv>

        <C.InputsDiv>
            <label htmlFor='email'>
              Email:
            </label>
            <input 
              type="email" 
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
            {isNeededErrorMsg && <span>Email já em uso, tente outro!</span>}
        </C.InputsDiv>

        <C.InputsDiv>
            <label htmlFor='senha'>
              Senha:
            </label>
            <input 
              type="password" 
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </C.InputsDiv>

          <C.Button>Registre-se</C.Button>
    </C.Form>
  )
}

export default Register;