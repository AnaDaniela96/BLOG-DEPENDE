import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from './components/Button.jsx'
import { Saludar } from './components/saludar.jsx'
import { CircleButton } from './components/Button.jsx'
import { Posts } from './post.jsx'


// function Gretting({title, name = "user"}) {
  
//   console.log(title, name)

//   const cardStyles = { background: "#202020", color: "#fff", padding: "20px"};
//   return <>
//     <div style={cardStyles}>hey</div>
//     <h1> { title }, dice { name }</h1>
//     <p> { name } </p>
//   </>

// }


const handleChange = (e) => {
  console.log(e.target.value + '...')
}

const user = [
  {
    id: 1,
    name: 'ryan reinols',
    image: 'http://robohash.org/user1'
  },
  {
    id: 2,
    name: 'meredith grey',
    image: 'http://robohash.org/user2'
  },
  {
    id: 3,
    name: 'juana de arco',
    image: 'http://robohash.org/user3'
  },
]


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //  <Navbar></Navbar>
  // </StrictMode>,
              
    <>
    {user.map((user,i) => {
      return <div key={i}>
        <h1 className='text-start'>{user.name}</h1>
        <img src={user.image} alt="" />
      </div>
    })}
    <Posts/>
    <Saludar/>
    <CircleButton text='<' />
    <input id="hole" type="text" onDoubleClick={() => console.log('double click')}/>

    <form onSubmit={(e) => {
      e.preventDefault()
      alert('enviado')
    }
    }>
      <h1>formulario de registro de usuarios</h1>

      <button>enviar</button>
    </form>
    <CircleButton text='>' />
    {/* <Navbar></Navbar>
    <Home ready={false}/>
    <Button text='Click me'/>
    <Button text='Go to'/>
    <Button text='' name='joe'/>

    <Gretting title="hola" name="dani"/>
    <Gretting title="hola mundo" name="soy"/>
    <Gretting title="hola react" name="nueva"/>
    <Gretting title="hola jsx" /> */}
    <App/>
    </>


)
