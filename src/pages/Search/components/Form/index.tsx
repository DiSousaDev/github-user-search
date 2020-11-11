import React from 'react';
import './styles.css';
import ButtonDefault from '../../../../core/components/ButtonDefault';

const Form = () => (
    <div className="container">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input type="text" className="search-user" placeholder="Usuário GitHub" />
        <ButtonDefault text="Encontrar" />
    </div>
); 

export default Form;