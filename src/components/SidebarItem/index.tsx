import { BookOpen, Envelope, User } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container, Description, IconArea, Info, Point, Title } from "./styles";

interface SidebarProps{
  title: string
  description: string
  path: string
  icon: string
  active: boolean
}

export function SidebarItem({description, path, title, icon, active}: SidebarProps){
  return(
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>

        <IconArea active={active}>
          {icon === "profile" &&
            <User size={24} weight="fill" color="white"/>  
          }
          {icon === "book" &&
            <BookOpen size={24} weight="fill" color="white"/>  
          }
          {icon === "mail" &&
            <Envelope  size={24} weight="fill" color="white"/>  
          }
        </IconArea>
        <Point active={active}></Point>
      
      </Link>
    </Container>
  )
}