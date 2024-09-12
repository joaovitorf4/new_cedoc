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
    const contentRef = useRef();
    const [loading, setLoading] = useState(false);
    const [color] = useState("white");

    const [enabledInputs, setEnabledInputs] = useState({
        etiquetas: false,
        caixas: false,
        lacres: false,
        fitas: false,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const form = event.target;

        let empresa = document.querySelector("#empresa").value;
        let requisitante = document.querySelector("#requisitante").value;
        let telefone = document.querySelector("#telefone").value;
        let email = document.querySelector("#email").value;
        let meio = document.querySelector('input[name="meio"]:checked').value.toUpperCase();
        let grau = document.querySelector('input[name="grau"]:checked').value.toUpperCase();
        let observacao = contentRef.current.innerText;

        try {
            let file = await generatePDF(elementRef);
            let files = document.getElementById("uploadarquivo").files;
            if (files.length === 0) {
                await filedirector(empresa, requisitante, telefone, email, meio, grau, observacao, file);
            } else {
                await filedirector(empresa, requisitante, telefone, email, meio, grau, observacao, file, files[0]);
            }

            setLoading(false);
            alert("Formulário enviado com sucesso!");
            form.reset();
            contentRef.current.innerText = '';
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert("Erro ao enviar formulário. Por favor, tente novamente mais tarde.");
            setLoading(false);
        }
    };

    const handleNumberChange = (event) => {
        const value = event.target.value;
        if (value < 0 || value.includes('.')) {
            event.target.value = '';
        }
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setEnabledInputs(prevState => ({
            ...prevState,
            [id]: checked
        }));
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
                        <label htmlFor="requisitante" className="bold-it">Nome do Requisitante</label>
                        <input type="text" id="requisitante" name="requisitante" required />
                    </div>
                    <div className="adjust-aside">
                        <div className="form-group">
                            <label htmlFor="telefone" className="bold-it">Telefone</label>
                            <input type="text" id="telefone" name="telefone" required />
                        </div>
                    </div>
                </div>

                <div className="form2">
                    <div className="form-group">
                        <label className="bold-it">Meio de Disponibilização</label>
                        <div className="div-options">
                            <div>
                                <input type="radio" id="emailOption" name="meio" value="E-MAIL" required />
                                <label htmlFor="emailOption">E-MAIL</label>
                            </div>
                            <div>
                                <input type="radio" id="sistema" name="meio" value="NO SISTEMA" required />
                                <label htmlFor="sistema">NO SISTEMA</label>
                            </div>
                            <div>
                                <input type="radio" id="cedoc" name="meio" value="TRANSPORTE VIA CEDOC" required />
                                <label htmlFor="cedoc">TRANSPORTE VIA CEDOC</label>
                            </div>
                            <div>
                                <input type="radio" id="cliente" name="meio" value="TRANSPORTE VIA CLIENTE" required />
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

                <div className="form4">
                    <h2>Materiais</h2>
                    <section>
                        <div className="form-group4"> 
                            <div className='div-checkbox'>
                                <input
                                    type="checkbox"
                                    id="caixas"
                                    checked={enabledInputs.caixas}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="caixas" className="bold-it">Caixas Vazias</label>
                                <input
                                    type="number"
                                    id="caixas"
                                    name="caixas"
                                    placeholder="Quantidade"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.caixas}
                                />
                            </div>
                        </div>
                        <div className="form-group4"> 
                            <div className='div-checkbox'>
                                <input
                                    type="checkbox"
                                    id="etiquetas"
                                    checked={enabledInputs.etiquetas}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="etiquetas" className="bold-it">Etiquetas</label>
                                <input
                                    type="number"
                                    id="etiquetas"
                                    name="etiquetas"
                                    placeholder="Quantidade"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.etiquetas}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group4"> 
                            <div className='div-checkbox'>
                                <input
                                    type="checkbox"
                                    id="lacres"
                                    checked={enabledInputs.lacres}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="lacres" className="bold-it">Lacres</label>
                                <input
                                    type="number"
                                    id="lacres"
                                    name="lacres"
                                    placeholder="Quantidade"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.lacres}
                                />
                            </div>
                        </div>
                        <div className="form-group4"> 
                            <div className='div-checkbox'>
                                <input
                                    type="checkbox"
                                    id="fitas"
                                    checked={enabledInputs.fitas}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="fitas" className="bold-it">Fitas</label>
                                <input
                                    type="number"
                                    id="fitas"
                                    name="fitas"
                                    placeholder="Quantidade"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.fitas}
                                />
                            </div>
                        </div>    
                    </section>
                </div>

                <div className="form3">
                    <div className="form-group">
                        <label htmlFor="observacao" className="bold-it">Observação do Pedido</label>
                        <div
                            id="observacao"
                            name="observacao"
                            contentEditable="true"
                            required
                            ref={contentRef}
                            style={{ direction: 'ltr', textAlign: 'left' }}
                        />
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
                        <label htmlFor="uploadarquivo">Você pode anexar arquivos logo abaixo:</label>
                        <input id="uploadarquivo" name='uploadarquivo' type="file" />
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="form-group">
                        {loading ? (
                            <h2 className='loading'>
                                <PulseLoader
                                    color={color}
                                    loading={loading}
                                    size={25}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            </h2>
                        ) : (
                            <input type="submit" value="Enviar" />
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
