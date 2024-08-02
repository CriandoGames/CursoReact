import {useState} from 'react'

const UserInforForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //previne o comportamento padrão do formulário

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email);
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
       placeholder='Digite o seu nome'/>

      <input type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder='Digite o seu Email'/>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default UserInforForm
