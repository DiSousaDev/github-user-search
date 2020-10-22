import React from 'react';
import './styles.css'
import ButtonDefault from "../../core/components/ButtonDefault";

const Home = () => (
        <div className="home-container">
            <h1 className="home-title">
                Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
            </h1>
            <p className="home-description">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                Favor observar as instruções passadas no capítulo sobre a elaboração<br /> deste projeto.<br /><br />
                Este design foi adaptado a partir de Ant Design System for Figma, de<br /> Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <ButtonDefault text="Começar" />
        </div>
    );

export default Home;