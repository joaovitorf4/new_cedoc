import React from 'react';
import './ButtonZap.css';
import { Link } from 'react-router-dom';
import { comercialZap } from '../imports/Links'
import imagemZap from '../imgs/zap.svg'

const BackToTop = () => {
    return (
        <div className="button-zap">
            <Link to={comercialZap} target='_blank'>
                <img src={imagemZap} alt="icon whatsapp" />
            </Link>
        </div>
    );
};

export default BackToTop;
