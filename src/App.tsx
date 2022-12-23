import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./Context/FormContext";
import { Router } from "./Router";


export function App() {
 return (
  <BrowserRouter>
   <FormProvider>
      <Router/>
    </FormProvider>
  </BrowserRouter>
 )
}

