import  React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AddQuote from "./pages/AddQuote";
import EditQuote from "./pages/EditQuote";
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<AddQuote/>} />
      <Route path="/edit/:id" element={<EditQuote/>} />
    </Routes>
     
    </>
  )
}

export default App



