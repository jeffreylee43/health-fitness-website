import React from 'react';

const Home = ({ handleLogout }) =>{
    return(
        <section className = "home"> 
            <nav>
                <button onClick = {handleLogout}>Logout</button>
                <h1 className = "welcome">Welcome to FitU!</h1>
            </nav>
        </section>
    )
}

export default Home;