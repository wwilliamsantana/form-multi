import { User } from "phosphor-react";
import { ReactNode, useContext } from "react";
import { FormContext } from "../../Context/FormContext";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { Area, Container, Page, Sidebar, Steps } from "./styles";

interface ThemProps{
  children: ReactNode
}

export function Theme({children}: ThemProps){
  const {state} = useContext(FormContext)

  return (
    <Container>
      <Area>
        <Header/>

        <Steps>
          <Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique" 
              path="/"
              icon="profile"
              active={state.currentStep === 1}
            />
            
       
            <SidebarItem
              title="Profissional"
              description="Seu nível" 
              path="/step2"
              icon="book"
              active={state.currentStep === 2}
            />
              
      
             <SidebarItem
              title="Contatos"
              description="Como te achar" 
              path="/step3"
              icon="mail"
              active={state.currentStep === 3}
            />
              
           
          </Sidebar>

          <Page>
            {children}
          </Page>
        </Steps>
      </Area>
    </Container>
  )
}