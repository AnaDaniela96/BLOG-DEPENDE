import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Gretting({title, name = "user"}) {
  
  console.log(title, name)

  return <>
    <h1> { title }, dice { name }</h1>
    <p> { name } </p>
  </>
}
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //  <Navbar></Navbar>
  // </StrictMode>,
              
    <>
    <Navbar></Navbar>

    <Gretting title="hola" name="dani"/>
    <Gretting title="hola mundo" name="soy"/>
    <Gretting title="hola react" name="nueva"/>
    <Gretting title="hola jsx" />
    </>


)
