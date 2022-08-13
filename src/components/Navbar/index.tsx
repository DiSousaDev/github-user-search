import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className='navbar-title'>
                <Link to={'/'}>
                    <h1>Github API</h1>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;