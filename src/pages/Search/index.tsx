import MainButton from '../../components/MainButton';
import Result from '../../components/Result';

import './styles.css';

const Search = () => {
    return (
        <div className='main-container'>
            <div className='search-container'>
                <div className='search-form-container'>
                    <h1>Encontre um perfil Github</h1>
                    <input placeholder='Usuário Github' />
                </div>
                <div className='button-container'>
                    <MainButton text='Encontrar' />
                </div>
            </div>
            <div>
                <Result />
            </div>
        </div>
    );
}

export default Search;