import React from 'react';

const Navigation = ({isSignedIn, onRouteChange}) => {
        if(isSignedIn){
            return(
                <nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick = {() => onRouteChange('signout')}                           // adding arrow function to run this function only on click
                    className= 'f3 link dim black underline pa3 pointer'> Sign Out</p>
                 </nav>
            );
        } else {
            return(
        <nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick = {() => onRouteChange('signin')}                           // adding arrow function to run this function only on click
             className= 'f3 link dim black underline pa3 pointer'> Sign In</p>
            <p onClick = {() => onRouteChange('register')}                           // adding arrow function to run this function only on click
             className= 'f3 link dim black underline pa3 pointer'> Register</p>
        </nav>
            );
        }
}

export default Navigation;