import { Container, Description, Icon, Info, Title } from "./styles";

interface SelectPorps{
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

export function SelectionOption({title, description, icon, selected, onClick}: SelectPorps){
  return (
    <Container onClick={onClick} selected={selected}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
} 