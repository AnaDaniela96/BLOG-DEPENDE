import PropTypes from 'prop-types';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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

export function CircleButton({ text, onClick }) {
    return (
        <button className={text === '<' ? "button-arrow-left" : "button-arrow-right"} onClick={onClick}>
            {text === '<' ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </button>
    );
}

Button.PropTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some user'
}