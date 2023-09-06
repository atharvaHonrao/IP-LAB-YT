import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home_page";
import Contact from "./pages/contact_page";
import Layout from "./pages/layout";
import LoginScreen from "./pages/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="login" element={<LoginScreen/>} />
        </Route>
      </Routes>
  );
}

export default App;
