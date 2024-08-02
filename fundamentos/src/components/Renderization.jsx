
const  Renderization = ({user}) => {

    // se houver usuário, renderiza o nome do usuário
    //se não houver, renderiza um botão para criar um usuário
  return (
    <div>
      {user && <h1>Olá, {user}</h1>}
    </div>
  )
}


export default  Renderization;