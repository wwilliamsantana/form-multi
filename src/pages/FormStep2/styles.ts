import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  p{
    font-size: 14px;
    color: #B8B8D4;
  }

  h1{
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr{
    height: 1px;
    border: 0;
    background-color: #7C7C8A;
    margin: 30px 0;
  }

  label{
    font-size: 14px;

    input{
      display: block;
      box-sizing: border-box;
      width: 100%;
      margin-top: 7px;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: none;
      font-size: 16px;
      background-color: #02044A;
    }
  }

  button{
    background-color: #25CD89;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }
`

export const Nav = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  padding: 20px 40px;
  color: #B8B8D4;
`