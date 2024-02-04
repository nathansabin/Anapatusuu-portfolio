import React from 'react';
import './home.css';
import Header from '../../components/header/header';
import Button from '../../components/button/button';

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <nav className='button-container'> 
                <div>
                    <Button text='Character Design'/>
                    <Button text='Sketches'/>
                    <Button text='Animation'/>
                    <Button text='Chibi'/>  
                </div>    
            </nav>
            <hr />
            <nav className='button-container'>
                <div>
                    <Button text='About Me'/>
                    <Button text='Contact'/>
                </div>
            </nav>
        </div>
    );
}

export default Home;