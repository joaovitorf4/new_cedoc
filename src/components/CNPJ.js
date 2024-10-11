import React from 'react';
import '../pages/Form.css';

const CNPJ = () => {
    return (
        <div className='CNPJ'>
            <div className='div-inputs-sec'>
                <div className="form-group" id='nomeEmp'>
                    <label htmlFor="empresa" className="bold-it">Nome da Empresa</label>
                    <input type="text" id="empresa" name="empresa" required />
                </div>
                <div className="adjust-aside" id='numEmail'>
                    <div className="form-group">
                        <label htmlFor="email" className="bold-it">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CNPJ;
