import React from 'react';
import {Link} from "react-router-dom";
import './styles.css';

type Props = {
    text: string;
}

const ButtonDefault = ({ text }: Props) => (
    <div className="btn-default">
        <Link to="/search">
            <button className="btn">
                <p className="btn-name">{text}</p>
            </button>
        </Link>
    </div>
);
export default ButtonDefault;