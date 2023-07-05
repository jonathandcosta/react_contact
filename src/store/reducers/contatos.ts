import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/contato'

type ContatosSlice = {
  itens: Contato[]
}

const initialState: ContatosSlice = {
  itens: []
}

export const contatoSlice = createSlice({
  name: 'contato',
  initialState: initialState,
  reducers: {
    remover: (state: { itens: any[] }, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato: { id: any }) => contato.id !== action.payload)
      ]
    },
    editar: (state: { itens: any[] }, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c: { id: any }) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state: { itens: any[] }, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato: { nome: string }) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já adicionado!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
