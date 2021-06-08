import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to="/">Home</Link> | 
            <Link to="/prayer">Prayer</Link> | 
            <Link to="/contact">Contact</Link> | 
            <Link to="/outlook">Outlook</Link>
            <Link to="/email/new">New Email</Link>
        </>
    );
}

export default Header;