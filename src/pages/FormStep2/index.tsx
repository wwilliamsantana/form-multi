import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SelectionOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { FormContext } from "../../Context/FormContext";
import { FormActions } from "../../reducer/FormReducer";
import { Container, Nav } from "./styles";

export function FormStep2(){
  const navigate = useNavigate()
  const {state, dispatch} = useContext(FormContext)

  function handleNextStep(){
    if(state.name !== ""){
      navigate("/step3")
    }else{
      alert("Preencha seus dados!")
    } 
  }
  

  function setLevel(id: number){
    dispatch({
      type: FormActions.setLevel,
      payload: id
    })
  }

  useEffect(() => {
    if(state.name === ""){
      navigate("/")
    }else{
      dispatch({
        type: FormActions.setCurretnStep,
        payload: 2
      })
    }

  }, [])

  return (

      <Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
        <hr />
       
        <SelectionOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😅"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectionOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Nav to={"/"}>Voltar</Nav>
        <button onClick={handleNextStep}>Próximo</button>
      
      </Container>

  )
}