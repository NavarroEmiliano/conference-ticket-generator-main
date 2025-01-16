import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background.tsx";
import Header from "./components/Header/Header.tsx";
import FormHeader from "./components/FormHeader/FormHeader.tsx";
import Ticket from "./components/Ticket/Ticket.tsx";
import Form from "./components/Form/Form.tsx";


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
      <FormHeader />
      {showTicket ? (
        <Ticket user={user} />
      ) : (
        <Form user={user} setUser={setUser} />
      )}
    </>
  );
}

export default App;
