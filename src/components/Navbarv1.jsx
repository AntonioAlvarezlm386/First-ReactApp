import './Navbar.css';                  //Forma externo de importar css, pero tambien se pueden hacer inline

/**Se usa funcion normal si se necesita logica */
const Navbar = () => {
    const aStyles = {               //se crea un objeto previamente, para luego agregarlo en return
        color: 'white',
        fontSize : '1.3rem'
    }


    return (
        <div className='navbar-container'>
            <div className="navbar--title">
                <h1>Navbar</h1>
            </div>
            <div className="navbar--links">
                <div className="navbar--link">
                    <a href="./" style={aStyles}>Home</a>
                </div>
                <div className="navbar--link">
                    <a href="./">About</a>
                </div>
                <div className="navbar--link">
                    <a href="./" style={{                    //estilos inline
                        color: 'white',
                        fontSize : '1.3rem'
                    }} >Astros</a>
                </div>
            </div>
        </div>
    )
}

// export default Navbar