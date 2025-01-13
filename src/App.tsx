/* import { useState } from "react"; */
import "./App.css";
/* import Form from "./components/Form/Form"; */
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";

export interface User {
  userImg?: File | null;
  fullName?: string;
  email?: string;
  [key: string]: string | File | null | undefined;
}

function App() {
  /*   const [user, setUser] = useState<User>({}); */

  return (
    <>
      <Background />
      {/* <Header /> */}
      {/* <Form user={user} setUser={setUser} /> */}
    </>
  );
}

export default App;
