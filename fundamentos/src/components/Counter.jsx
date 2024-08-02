import {useState} from 'react';


const Counter = () => {
    //consultar valor, alterar valor
    const [counter, setCounter] = useState(0);
    

    return <div>
        <p>Você clicou {counter} vezes</p>
        <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
        <button onClick={() => setCounter(counter - 1)}>Dominui</button>
        </div>
    
};

export default Counter;