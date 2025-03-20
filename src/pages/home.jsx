import PropTypes from 'prop-types';
import { CircleButton } from '../components/Button.jsx'

import '../styles/pages/home.css';

function Home ( ready ) {
    return (
        <main className="container mt-4">
            <article className="row">
                <div className="col-md-2">
                    <CircleButton text='<' />
                </div>
                <div className="col-md-8">
                    <a className="cardSquare">
                        <img src="https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_.jpg" alt="" />
                        <div className="card-title">
                            <span 
                            style = {ready ? {background: 'green'} : {background: 'blue'}}
                            for="card-title">{ ready.PropTypes ? 'tarea realizade' : 'tarea pendienta'} </span>
                        </div>
                    </a>
                </div>
                <div className="col-md-2">
                    <CircleButton text='>' />
                </div>
            </article>

            
        </main>
    )
}

export default Home;