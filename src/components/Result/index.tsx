import './styles.css';

import Img from '../../assets/images/nelio.png';
import { Profile } from '../../types/Profile';

type Props = {
    profile: Profile;
}

const Result = ( { profile }: Props ) => {
    return (
        <div className='result-container'>
            <div className='img-container'>
                <img src={profile.avatar_url} alt='Imagem de perfil' />
            </div>
            <div className='info-container'>
                <h3>Informações</h3>
                <div className='info-container-row'>
                    <h6>Perfil:</h6>
                    <p>{profile.url}</p>
                </div>
                <div className='info-container-row'>
                    <h6>Seguidores:</h6>
                    <p>{profile.followers}</p>
                </div>
                <div className='info-container-row'>
                    <h6>Localidade:</h6>
                    <p>{profile.location}</p>
                </div>
                <div className='info-container-row'>
                    <h6>Nome:</h6>
                    <p>{profile.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Result;

