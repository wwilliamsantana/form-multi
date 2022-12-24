import { Route, Routes } from "react-router-dom";
import { Theme } from "./components/Theme";
import { FormStep1 } from "./pages/FormStep1";
import { FormStep2 } from "./pages/FormStep2";
import { FormStep3 } from "./pages/FormStep3";


export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Theme/>}>
        <Route path="/" element={<FormStep1/>} />
        <Route path="/step2" element={<FormStep2/>} />
        <Route path="/step3" element={<FormStep3/>} />
      </Route>
    </Routes>
  )
}