import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonDefault = ({ text }: Props) => (
    <div className="btn-default">
        <button className="btn">
            <p className="btn-name">{text}</p>
        </button>
    </div>
);
export default ButtonDefault;