import './App.css';
import logo from './logo192.png'

function App() {
  return (
    <section className='area-login'>
      <div className='login'>
        <div>
          <img src={logo} alt='' />
        </div>
        <form>
          <input type='text' name='nome' placeholder='nome de usuário' autoFocus></input>
          <input type='password' name='senha' placeholder='sua senha'></input>
          <button className='botão'>entrar</button>
        </form>
        <p>Ainda não tem sua conta ? <a href=''> Criar conta</a> </p>
      </div>
    </section>
  );
}

export default App;
