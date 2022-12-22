import { createContext, ReactNode, useContext, useReducer } from "react";
import {ActionProps, formReducer, initialData, InitialDataProps } from "../reducer/FormReducer";


interface FormContextProps{
  state: InitialDataProps
  dispatch: (action: ActionProps) => void
}

export const FormContext = createContext({} as FormContextProps)


interface FormProviderProps{
  children: ReactNode
}

export function FormProvider({children}: FormProviderProps){
  const [state, dispatch] = useReducer(formReducer,initialData)

  return (
    <FormContext.Provider 
      value={{state, dispatch}}
    >
      {children}
    </FormContext.Provider>
  )
}