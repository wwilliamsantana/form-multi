import { ChangeEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Context/FormContext";
import { FormActions } from "../../reducer/FormReducer";
import { Container, Nav } from "./styles";

export function FormStep3(){
  const navigate = useNavigate()
  const {state, dispatch} = useContext(FormContext)

  function handleNextStep(){
    if(state.email !== "" && state.github !== ""){
      console.log(state)
    }else[
      alert("Preecha seus dados")
    ]
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>){
      dispatch({
        type: FormActions.setEmail,
        payload: event.target.value
      })
  }

  function handleGithubChange(event: ChangeEvent<HTMLInputElement>){
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value
    })
}


  useEffect(() => {
    if(state.name === ""){
      navigate("/")
    }else{
      dispatch({
        type: FormActions.setCurretnStep,
        payload: 3
      })
    }
  }, [])

  return (
   
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos, para que possamos nós comunicar.</p>
        <hr />
        <label>
          Qual seu email?
          <input 
            type="email" 
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
           <input 
            type="url" 
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Nav to={"/step2"}>Voltar</Nav>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </Container>

  )
}