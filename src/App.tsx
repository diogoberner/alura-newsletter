import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";
import Header from "./components/Header";
import type { IUser } from "./types/shared";

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const hasUser = Boolean(user);

  return (
    <div className="App">
      <Header user={user} />
      {!hasUser ? <Form onSubmit={setUser} /> : <ArticleList />}
    </div>
  );
}

export default App;
