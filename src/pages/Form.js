import React, { useState, useRef } from 'react';
import './Form.css';
import { filedirector } from "../components/filedirector";
import logo from '../imgs/logo_cedoc.png';
import background from '../imgs/bg-cedoc.jpg';
import { generatePDF } from "./GeneratePDF";
import PulseLoader from "react-spinners/PulseLoader";


const Form = ({ bgImg = `url(${background})` }) => {
    const style = {
        backgroundImage: bgImg,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    };

    const elementRef = useRef();
    const [loading, setLoading] = useState(false);
    let [color] = useState("white");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        setLoading(true);

        try {
            let file = await generatePDF(elementRef);
            let files = document.getElementById("uploadarquivo").files;
            if (files.length === 0) {
                await filedirector(file);
            } else {
                await filedirector(file, files[0]);
            }
            
            setLoading(false);
            alert("Formulário enviado com sucesso!");
            form.reset();
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert("Erro ao enviar formulário. Por favor, tente novamente mais tarde.");
            setLoading(false);
        }
    };

    return (
        <div className="Form" style={style}>
            <form onSubmit={handleSubmit} ref={elementRef} style={{ padding: '20px', background: '#ffffff', whiteSpace: 'pre-wrap' }} id="myForm">
                <div className="form-header">
                    <img src={logo} alt="logo cedoc" />
                    <h1>Formulário de Requisição</h1>
                </div>
                <div>
                    <hr />
                </div>
                <div className="form1">
                    <div className="form-group">
                        <label htmlFor="empresa" className="bold-it">Empresa</label>
                        <input type="text" id="empresa" name="empresa" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="requisitante" className="bold-it">Nome do Requisitante</label>
                        <input type="text" id="requisitante" name="requisitante" required />
                    </div>
                    <div className="adjust-aside">
                        <div className="form-group">
                            <label htmlFor="telefone" className="bold-it">Telefone</label>
                            <input type="text" id="telefone" name="telefone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="bold-it">Email do Requisitante</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                </div>

                <div className="form2">
                    <div className="form-group">
                        <label className="bold-it">Meio de Disponibilização</label>
                        <div className="div-options">
                            <div>
                                <input type="radio" id="emailOption" name="meio" value="email" required />
                                <label htmlFor="emailOption">E-MAIL</label>
                            </div>
                            <div>
                                <input type="radio" id="sistema" name="meio" value="sistema" required />
                                <label htmlFor="sistema">NO SISTEMA</label>
                            </div>
                            <div>
                                <input type="radio" id="cedoc" name="meio" value="cedoc" required />
                                <label htmlFor="cedoc">TRANSPORTE VIA CEDOC</label>
                            </div>
                            <div>
                                <input type="radio" id="cliente" name="meio" value="cliente" required />
                                <label htmlFor="cliente">TRANSPORTE VIA CLIENTE</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="bold-it">Grau da Solicitação</label>
                        <div className="div-options">
                            <div>
                                <input type="radio" name="grau" id="normal" value="Normal" required />
                                <label htmlFor="normal">Normal</label>
                            </div>
                            <div>
                                <input type="radio" name="grau" id="emergencial" value="Emergencial" required />
                                <label htmlFor="emergencial">Emergencial</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form3">
                    <div className="form-group">
                        <label htmlFor="observacao" className="bold-it">Observação do Pedido</label>
                        <div id="observacao" name="observacao" contentEditable="true" required></div>
                    </div>
                    <div className="form-group">
                        <strong>
                            <label htmlFor="politica">
                                Comprometemo-nos a proteger seus dados pessoais, incluindo nome, e-mail e telefone, conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD). Seus dados serão utilizados exclusivamente para os fins previstos neste formulário e não serão compartilhados com terceiros sem sua autorização. Para mais informações sobre como seus dados são tratados, consulte nossa política de privacidade.
                            </label>
                        </strong>
                        <div id="accept">
                            <input type="checkbox" id="accept" name="accept" required />
                            <label htmlFor="accept">De Acordo</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input id={"uploadarquivo"} type={"file"} />
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="form-group">
                        {loading ? <h2 className='loading'>{<PulseLoader
                            color={color}
                            loading2={loading}
                            size={25}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />}</h2> : <input type="submit" value="Enviar" />}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
