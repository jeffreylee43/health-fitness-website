import React from 'react';

const Home = ({ handleLogout }) =>{
    return(
        <section className = "home"> 
            <nav>
                <h1>Welcome</h1>
                <button onClick = {handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Home;