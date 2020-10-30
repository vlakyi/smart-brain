import React from 'react';
import { Link, useLocation} from 'react-router-dom';

const Navigation = ({signOut}) => {
    const location = useLocation();
    console.log('From header', location);
    if (location.pathname === '/home') {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to={() => {'/signin'}} onClick={signOut} className='f3 link dim black pa3 pointer'> Sign Out</Link>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/signin' className='f3 link dim black pa3 pointer'> Sign In</Link>
                <Link to='/register' className='f3 link dim black pa3 pointer'> Register</Link>
            </nav>
        );
    }
}

export default React.memo(Navigation);