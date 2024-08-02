import { useState } from "react"


function CounterAtividade() {

    const [counter, setCounter] = useState(0);

   const  onClick2  = () =>  { 
        setCounter(counter + 1);
    }

  return (
    <button onClick={onClick2}>
      {counter}
    </button>
  )
}

export default CounterAtividade
