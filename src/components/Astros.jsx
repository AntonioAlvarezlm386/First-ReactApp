import { useState, useEffect } from 'react';  //use state para que se guarde 
import './Astros.css'
import CircularIndeterminate from './Progreso.jsx';

const DATA_URL = 'http://api.open-notify.org/astros.json'

const Astro = ({ name, craft }) => {
    return (
        <div className="astro--container">
            <h2 className='astro-name'>{name}</h2>
            <p className="astro--station">Space station: {craft}</p>
        </div>
    )
}

const Astros = () => {
    const [astros, setAstros] = useState([])

    useEffect(() => {
        fetchAstros();
    }, []);

    const fetchAstros = () => {
        fetch(DATA_URL)
            .then(res => res.json())
            .then(data => setAstros(data.people))
            .catch(err => console.error(err))
    }

    return (
        <div className="contenedor">
            <div>
                <h2>Astros</h2>
            </div>
            <div className="cards--container">
                {
                    astros.length !== 0
                        ?
                        astros.map((astro, index) => (
                            <Astro key={index} {...astro} />
                        )) :
                        <CircularIndeterminate />
                }
            </div>
        </div>
    )
}

export default Astros