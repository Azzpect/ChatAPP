import './css/index.css';
import FriendsArea from './components/FriendsArea';
import MessageArea from './components/MessageArea';

function App() {

  return (
    <>
      <header>
        <h2>ChatAPP</h2>
      </header>
      <section id="main">
        <FriendsArea></FriendsArea>
        <MessageArea></MessageArea>
      </section>
    </>
  )
}

export default App
