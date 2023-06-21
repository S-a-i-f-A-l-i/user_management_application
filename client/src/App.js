import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import UserList from "./components/UserList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index={true} element={<UserList />} />
        <Route path="add" element={<Form />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
