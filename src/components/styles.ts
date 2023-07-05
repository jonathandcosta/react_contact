import styled from 'styled-components'

export const CardContato = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  border-radius: 16px;
  font-size: 18px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: baseline;

  @media (max-width: 820px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr;

    div {
      display: flex;
      justify-content: center;
    }
  }
`

export const CampoContato = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  font-size: 16px;
  color: #000;
  width: 100%;

  @media (max-width: 820px) {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border: none;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #058f11;
  border-radius: 16px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: #bb1818;
`
