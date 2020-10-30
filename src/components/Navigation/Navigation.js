import React from 'react';
import { Link, useLocation} from 'react-router-dom';

const Navigation = ({signOut}) => {
    const location = useLocation();
    if (location.pathname === '/smartbrain/home') {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to={() => {'/smartbrain/signin'}} onClick={signOut} className='f3 link dim black pa3 pointer'> Sign Out</Link>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/smartbrain/signin' className='f3 link dim black pa3 pointer'> Sign In</Link>
                <Link to='/smartbrain/register' className='f3 link dim black pa3 pointer'> Register</Link>
            </nav>
        );
    }
}

export default React.memo(Navigation);