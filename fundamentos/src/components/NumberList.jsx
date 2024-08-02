function NumberList({number}) {

    //Metodos de array Array,map,filter,reduce

  return (
    <ul>
      {
        number.map((number, index) => (
            <li key={index}>{number}</li>
        ))
      }
    </ul>
  )
}

export default NumberList
