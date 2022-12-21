import { createContext, ReactNode } from "react";

interface FormConTextProps{
  
}

export const FormContext = createContext({} as FormConTextProps)

interface FormProviderProps{
  children: ReactNode
}

export function FormProvider({children}: FormProviderProps){
  return (
    <FormContext.Provider 
      value={}
    >
      {children}
    </FormContext.Provider>
  )
}