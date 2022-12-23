import { ChangeEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormContext } from "../../Context/FormContext";
import { FormActions } from "../../reducer/FormReducer";
import { Container } from "./styles";

export function FormStep1(){
  const navigate = useNavigate()
  const {state, dispatch} = useContext(FormContext)

  function handleNextStep(){
    if(state.name !== ""){
      navigate("/step2")
    }else{
      alert("Preencha seus dados!")
    }
    
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>){
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setCurretnStep,
      payload: 1
    })
  }, [])

  return (
    <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />
        <label>
          Seu nome completo
          <input 
            type="text" 
            autoFocus autoComplete="off"  
            value={state.name}
            onChange={handleNameChange}
            />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}