import {useState } from 'react'

const Form = () => {

 const [value, setValue] = useState('')

 const handleSubmit = (e) => {
  //manipulação de dados
  //Validação
  //Envio [API]
  // loading
  //chamada de função de erro/sucesso

  

  
   e.preventDefault()

   if(e.target.value === '') 
     console.log('Campo vazio');
    else 
    console.log('Enviado com sucesso')
    

 
  }

  return <form onSubmit={handleSubmit}>
      <input 
      
      type= "text" 
      value = {value} 
      onChange={(e) => setValue(e.target.value)}
      placeholder='Digite seu nome'
      />
      <button type="submit">Enviar</button>
    </form>
  
}

export default Form
