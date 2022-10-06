// componentes / propriedades:

interface BotaoProps {
  title: string;
}

function Botao(props:BotaoProps){
  return (
    <button>
      {props.title}
    </button>
    
  )
}

function App() {
  return (
  <div>
      <Botao title="Send 1" />
      <Botao title="Send 2" />
      <Botao title="Send 3" />
  </div>
  )
}

export default App
