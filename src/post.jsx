import { VscCallIncoming } from 'react-icons/vsc'

export const Posts = ( ) => {
     

    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')

            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => error)
    }}>

<VscCallIncoming />
        Traer Datos
    </button>
} 