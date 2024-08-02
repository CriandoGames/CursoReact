
import Welcome from './components/Welcome'
import Button from './components/Button'
import Bomdia from './components/Bomdia'
import './App.css'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInforForm from './components/UserInforForm'
import PaiFunction from './components/PaiFunction'
import Form from './components/Form'
import Renderization from './components/Renderization'
import RenderNull from './components/RenderNull'
import NumberList from './components/NumberList'
import BotaoEStilizado from './components/BotaoEStilizado'
import BotaoAzul from './components/BotaoAzul'
import Greeting from './components/Greeting'
import CounterAtividade from './components/CounterAtividade'
import TaskList from './components/TaskList'

function App() {
 

  return (
    <>
    {/*6.1 Criação de Componentes */}
      <Welcome></Welcome>
    {/*6.2 Criação de Componentes */}
    <Bomdia></Bomdia>
     {/*6.3 Componente dentro de componente */}
     <Pai/>
      {/*6.4 props */}
      <Descricao name="Carlos" year={33}></Descricao>
      {/*6.5 desestruturação de props */}
      <Cachorro name="Teste" raca="dog"></Cachorro>
      {/*6.6 Hooks - UseState */}
      <Counter/>
      {/*6.7 Hooks- UseState - Multiplos estados */}
      <UserInforForm/>
      {/*6.8 Eventos */}
      <Button></Button>
      {/*6.9 - Passar funçoes de manipulação de eventos como props */}
      <PaiFunction />
      {/*6.10 - Eventos de Form */}
      <Form/>
      {/*6.11 - Renderização condicional */}
      <Renderization user={"Carlos"}/>
      {/*6.12 - Render null */}
     <RenderNull warning={false}/>
     <RenderNull warning="Temos aviso"/>
     {/*6.13 - Listas e Chaves */}
     <NumberList number={[1,2,3,4,5]}/>
      {/*6.15 - Estilos por Atributos */}
      <BotaoEStilizado/>
      <BotaoAzul/>

      {/*6.16 Atividades*/}
      <Greeting name="Carlos"/>
      <CounterAtividade/>
      <TaskList list={[{name: "Tarefa 1", id: 1}, {name: "Tarefa 2", id: 2}, {name: "Tarefa 3", id: 3}]}/>
      <TaskList list={[]}/>
    </>

  )
}

export default App
