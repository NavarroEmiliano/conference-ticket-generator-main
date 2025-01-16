//import { useState } from "react";
import "./App.css";
//import Form from "./components/Form/Form";
//import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
//import Ticket from "./components/Ticket/Ticket";

export interface User {
  userImg?: File | null;
  username?: string;
  email?: string;
  github?: string;
  imgUrl?: string;
  [key: string]: string | File | null | undefined;
}

function App() {
 /*  const [user, setUser] = useState<User>({});

  const showTicket = user.email && user.github && user.username && user.imgUrl;
 */

  return (
    <>
      <Background />
{/*       <Header /> */}
{/*       {showTicket ? (
        <Ticket user={user} />
      ) : (
        <Form user={user} setUser={setUser} />
      )} */}
    </>
  );
}

export default App;
