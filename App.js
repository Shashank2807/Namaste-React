import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' 
                src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All'
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
            <img
                className='res-logo'
                alt='res-logo' 
                src='https://lh3.googleusercontent.com/p/AF1QipO0OpQWGSkf5nMVdntGFzQYnyz1rTEMboX-nYIj=s1360-w1360-h1020-rw'
            />
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian</h4>
            <h4>4.3 stars</h4>
            <h4>38 mins</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'> 
                <RestaurantCard />

            </div>

        </div>
    )
}

const AppLayout = () => {
    return(
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(
                document.getElementById('root')
            );


root.render(<AppLayout />);