import { Link } from 'react-router-dom';
import MainButton from '../../components/MainButton';
import './styles.css';

const Home = () => {
    return (
        <div className='main-container'>
            <div className='title-container'>
                <h1>Desafio Github API</h1>
                <p>Bootcamp Spring React - DevSuperior</p>
            </div>
            <div className='button-container'>
                <Link to={'/search'}>
                    <MainButton text='Começar' />
                </Link>
            </div>
        </div>
    );
}

export default Home;