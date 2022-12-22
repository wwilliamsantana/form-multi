enum FormActions {
  setCurretnStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

export interface InitialDataProps{
  currentStep: number
  name: string
  level: 0 | 1
  email: string
  github: string
}

export interface ActionProps{
  type: FormActions
  payload: any
}

export const initialData: InitialDataProps  = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: ""
}

export function formReducer(state: any, action: ActionProps){
  switch(action.type){
    case FormActions.setCurretnStep:{
      return {...state, currentStep: action.payload}
    }
    case FormActions.setName:{
      return {...state, name: action.payload}
    }
    case FormActions.setLevel:{
      return {...state, level: action.payload}
    }
    case FormActions.setEmail:{
      return {...state, email: action.payload}
    }
    case FormActions.setGithub:{
      return {...state, github: action.payload}
    }
    default: state
  }
}