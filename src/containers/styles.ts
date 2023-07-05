import styled from 'styled-components'

export const ListaContainer = styled.div`
  padding: 0 80px;
  height: 100vh;
  overflow-y: scroll;

  h1 {
    margin-top: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 50px;
  }

  @media (max-width: 820px) {
    h1 {
      padding-top: 20px;
      text-align: center;
    }
  }
`
export const Form = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  margin-top: 100px;
  form {
    @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
    }
    input {
      font-size: 16px;
      border-radius: 8px;
      height: 40px;
      width: 25vw;
      margin: 0 0.5vw;
      padding: 8px;
      @media (max-width: 820px) {
        margin: 0.5vh 0;
        width: 70vw;
      }
    }
  }
`

export const BotaoAdd = styled.button`
  background-color: #14c621;
  color: #fff;
  border: solid 2px #fff;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
`
