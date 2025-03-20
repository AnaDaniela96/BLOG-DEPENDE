import PropTypes from 'prop-types';
import '../styles/buttons.css';


export function Button({ text, name }) {
    // The difference between html tag <buton> and this function is the capital Letter. When
    // I used my component I will writing <Button/>
    console.log(text)
    if (!text) {
        console.error('el texto es requerido');
    }
    return <button className="primary">
        {text} - {name}
    </button>
}

export function CircleButton({ text }) {
    if (text === '<') {

        return <button className="button-arrow-right" onClick={ function () { 
            console.log('hola preciosa')
         }}>
            {text}
        </button>

    } else {
        return <button className="button-arrow-left">
            {text}
        </button>
    }
}

Button.PropTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some user'
}