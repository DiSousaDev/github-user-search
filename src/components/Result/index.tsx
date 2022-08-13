import './styles.css';

import Img from '../../assets/images/nelio.png';

const Result = () => {
    return (
        <div className='result-container'>
            <div className='img-container'>
                <img src={Img} alt='Imagem de perfil' />
            </div>
            <div className='info-container'>
                <h3>Informações</h3>
                <div className='info-container-row'>
                    <h6>Perfil:</h6>
                    <p>https://api.github.com/users/acenelio</p>
                </div>
                <div className='info-container-row'>
                    <h6>Seguidores:</h6>
                    <p>4376</p>
                </div>
                <div className='info-container-row'>
                    <h6>Localidade:</h6>
                    <p>Uberlândia</p>
                </div>
                <div className='info-container-row'>
                    <h6>Nome:</h6>
                    <p>Nélio Alves</p>
                </div>
            </div>
        </div>
    );
}

export default Result;

