import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

export interface User {
  userImg?: File | null;
  fullName?: string;
  email?: string;
  [key: string]: string | File | null | undefined;
}

function App() {
  const [user, setUser] = useState<User>({});

  console.log(user);

  return (
    <>
      <Header />
      <Form user={user} setUser={setUser} />
    </>
  );
}

export default App;
