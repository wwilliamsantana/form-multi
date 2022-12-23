import { ReactNode } from "react";
import { Header } from "../Header";
import { Area, Container, Page, Sidebar, Steps } from "./styles";

interface ThemProps{
  children: ReactNode
}

export function Theme({children}: ThemProps){
  return (
    <Container>
      <Area>
        <Header/>

        <Steps>
          <Sidebar>
            ...
          </Sidebar>

          <Page>
            {children}
          </Page>
        </Steps>
      </Area>
    </Container>
  )
}