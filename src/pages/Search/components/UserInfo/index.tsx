import React from 'react';
import ButtonDefault from '../../../../core/components/ButtonDefault';
import './styles.css';

const UserInfo = () => (
    <div className="user-info-container">
        <div className="user-info">
            <div className="user-info-avatar-content">
                <img src="https://avatars3.githubusercontent.com/u/50030046?v=4" alt="Imagem do perfil" className="user-info-avatar" />
                <ButtonDefault text="Ver Perfil" />
            </div>
            <div className="user-info-details">
                <div className="badges-content">
                    <span className="badge-item user-info-item">Repositórios públicos: 87</span>
                    <span className="badge-item user-info-item">Seguidores: 123</span>
                    <span className="badge-item user-info-item">Seguindo: 80</span>
                </div>
                <div className="user-info-content user-info-item">
                    <h3 className="user-info-title">Informações</h3>
                    <div className="user-info-details-item user-info-item"><strong>Empresa:</strong> @ZupIT</div>
                    <div className="user-info-details-item user-info-item"><strong>Website/Blog:</strong> https://thewashington.dev</div>
                    <div className="user-info-details-item user-info-item"><strong>Localidade:</strong> Uberlândia</div>
                    <div className="user-info-details-item user-info-item"><strong>Membro desde:</strong> 19/10/2013</div>
                </div>
            </div>
        </div>
    </div>
);

export default UserInfo;