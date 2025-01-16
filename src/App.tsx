import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/header/Header";
import Background from "./components/background/Background";
import FormHeader from "./components/formheader/FormHeader";
import Ticket from "./components/ticket/Ticket";

export interface User {
  userImg?: File | null;
  username?: string;
  email?: string;
  github?: string;
  imgUrl?: string;
  [key: string]: string | File | null | undefined;
}

function App() {
  const [user, setUser] = useState<User>({});

  const showTicket = user.email && user.github && user.username && user.imgUrl;


  return (
    <>
      <Background />
       <Header /> 
       <FormHeader/>
       {showTicket ? (
        <Ticket user={user} />
      ) : (
        <Form user={user} setUser={setUser} />
      )} 
    </>
  );
}

export default App;
