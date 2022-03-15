import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./pages/userList/UserList";
import NewUser from './pages/newUser/NewUser';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/addNewUSer" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
