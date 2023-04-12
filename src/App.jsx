import React, { useState, useMemo } from "react";

export default function App() {

  const [tarefas, setTarefas] = useState([]) //para receber o que for digitado no input
  const [input, setInput] = useState([]) //para pegar o input

  //-----------

  const [count, setCount] = useState(0)

  //------------

  //sintaxe useMemo
  //Lembre-se, se colocar chaves {} no código, ele vai precisar do return

  //  const totaTarefas = useMemo(()=>{return código}, [array de dependência])

  const totalTarefas = useMemo(() => { return tarefas.length }, [tarefas])

  //-------------

  // const aleatorio = count * Math.random()
  const aleatorio = useMemo(()=> count *Math.random(),[count]) //usando a dependência




  //função para o botão do input
  function handleAdd() {
    //lógica é: colocar o que ta vindo do input para dentro da nossa array [ ] de  tarefas
    setTarefas([...tarefas, input])//trazer nossa array juntas, por isso do spread ...
    //Pegar tudo que for adicionado no input e colocar na array tarefas []
  }
  return (
    <>
      <div>
        <h2> ToDo List</h2>
        <h2> {input} </h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} />

        {/* Onchange = Observe quando o input mudar, quando eu digitar qualquer coisa é uma mudança */}
        <button onClick={handleAdd}> Add</button>
        {tarefas.map((tarefas) => (
          <li> {tarefas} </li>
        ))}
      </div>

      <div>
        <h2> Você tem {totalTarefas} tarefas para fazer </h2>

      </div>


      <div>
        <h2>{count} </h2>
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>

      <div> 

      <h3> Multiplicar o count por um número aleatório: {aleatorio} </h3>
      </div>
    </>
  )
}