const MeuBotao = (props: any) => {
  return (
    <button>{props.titulo}</button>
  )
}

const App = () => {
    return (
      <div>
        <h1>Bem vindo ao mundo React</h1>
        <MeuBotao titulo="Meu primeiro botão" />
        <MeuBotao titulo="Segundo botão" />
        <MeuBotao titulo="Terceiro botão" />
      </div>
    );
  }
  
  export default App;
  