import React from 'react'

const BotaoEStilizado = () => {

    const estilo = {
        backgroundColor: '#fff',
        color: '#333',
        padding: '15px 32px',
        cursor: 'pointer',
    }


  return (
    <button style={
        estilo
    }>
      Clique aqui!
    </button>
  )
}

export default BotaoEStilizado
