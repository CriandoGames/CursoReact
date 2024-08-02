

function TaskList({list}) {

  if(list.length ===0 ) return (
    <p>Não há tarefas</p>
  )

  return (
    <ul>
      {
      list.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
   
    </ul>
  )
}

export default TaskList
