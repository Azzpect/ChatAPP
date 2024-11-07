import './css/index.css';
import FriendsArea from './components/FriendsArea';
import MessageArea from './components/MessageArea';
import { useEffect, useRef, useState } from 'react';
import io from "socket.io-client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { changeUserId } from './redux/user/userSlice';

function App() {
  const user = useSelector((state: RootState) => state.user.value)
  console.log(user);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    let socket = io("http://localhost:8080")

    socket.on("setUserId", (id: string) => {
      dispatch(changeUserId(id))
    })
  },[])


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
