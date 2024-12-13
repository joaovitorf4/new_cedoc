import React, { useState, useRef } from 'react';
import './Form.css';
import { filedirector } from "../components/filedirector";
import logo from '../imgs/logo_cedoc.png';
import background from '../imgs/bg-cedoc.jpg';
import { generatePDF } from "./GeneratePDF";
import PulseLoader from "react-spinners/PulseLoader";
import CNPJ from '../components/CNPJ';
import { useLocation } from 'react-router-dom';

const Form = ({ bgImg = `url(${background})` }) => {
    const style = {
        backgroundImage: bgImg,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    };

    const location = useLocation();
    const { showForm } = location.state || { showForm: true };

    const elementRef = useRef();
    const contentRef = useRef();
    const [loading, setLoading] = useState(false);
    const [color] = useState("white");

    const [enabledInputs, setEnabledInputs] = useState({
        etiquetas: false,
        caixas: false,
        lacres: false,
        fitas: false,
        requisicoes: false,
        caixasMovimentadas: false,
        coleta: false,
        entrega: false,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (window.innerWidth < 800) {
            alert('Submissao bloqueada: Utilize o site em tela cheia.');
            return;
        }

    //setLoading(true);

    const form = event.target;

    function redefineInput(id, shouldUpdate) {
        const inputElement = document.querySelector(`#${id}`);
        if (inputElement && !enabledInputs[id.replace('Input', '')]) {
            inputElement.value = 0;  
        }
        if (shouldUpdate) {
            return inputElement.value;
        }

        return inputElement.value || 0;
    }

    const inputIds = [
        'caixasInput', 
        'etiquetasInput', 
        'lacresInput', 
        'fitasInput', 
        'requisicoesInput', 
        'coletaInput', 
        'entregaInput', 
        'requisitante', 
        'telefone'
    ];

        for (const id of inputIds) {
            const inputElement = document.querySelector(`#${id}`);
            if (!inputElement || (inputElement.value.trim() === "" && !inputElement.disabled)) {
                alert(`O campo ${inputElement ? inputElement.previousElementSibling.innerText : id} está vazio!`);
                setLoading(false);
                return;
            }
        }
    
        let caixasVaziasIn = redefineInput('caixasInput', true);
        let etiquetasIn = redefineInput('etiquetasInput', true);
        let lacresIn = redefineInput('lacresInput', true);
        let fitasIn = redefineInput('fitasInput', true);
        let requisicoesIn = redefineInput('requisicoesInput', true);
        let coletaIn = redefineInput('coletaInput', true);
        let entregaIn = redefineInput('entregaInput', true);

        let empresa;
        let email;
        
        if (showForm) {
            empresa = document.querySelector("#empresa").value;
            email = document.querySelector("#email").value;
        }
        else{
            empresa = 0;
            email = 0;
        }
        let requisitante = document.querySelector("#requisitante").value;
        let telefone = document.querySelector("#telefone").value;
        let meio = document.querySelector('input[name="meio"]:checked').value.toUpperCase();
        let grau = document.querySelector('input[name="grau"]:checked').value.toUpperCase();
        let observacao = contentRef.current.innerText;
    
        try {
            let response = '';
            let file = await generatePDF(elementRef);
            let files = document.getElementById("uploadarquivo").files;
    
            // if (files.length === 0) {
            //     response = await filedirector(requisitante, telefone, empresa, email, meio, grau, observacao, caixasVaziasIn, etiquetasIn, lacresIn, fitasIn, requisicoesIn, coletaIn, entregaIn, file);
            // } else {
            //     response = await filedirector(requisitante, telefone, empresa, email, meio, grau, observacao, caixasVaziasIn, etiquetasIn, lacresIn, fitasIn, requisicoesIn, coletaIn, entregaIn, file, files[0]);
            // }

            // setLoading(false);
            // if (response === 0){
            //     alert("Formulário enviado com sucesso!");
            // }
            // else{
            //     alert("Erro enviando formulario!");
            // }

            setEnabledInputs({
                etiquetas: false,
                caixas: false,
                lacres: false,
                fitas: false,
                requisicoes: false,
                caixasMovimentadas: false,
                coleta: false,
                entrega: false,
            });
            //form.reset();
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
            <form onSubmit={handleSubmit} ref={elementRef} style={{ background: '#ffffff', whiteSpace: 'pre-wrap' }} id="myForm">
                <div className="form-header">
                    <img src={logo} alt="logo cedoc" />
                    <h1>Formulário de Requisição</h1>
                </div>
                <div>
                    <hr />
                </div>
                <div className="form1">
                    <div className='div-inputs-sec'>
                        <div className="form-group" id='nomeReq'>
                            <label htmlFor="requisitante" className="bold-it">Nome do Requisitante</label>
                            <input type="text" id="requisitante" name="requisitante" required />
                        </div>
                        <div className="adjust-aside" id='numTel'>
                            <div className="form-group">
                                <label htmlFor="telefone" className="bold-it">Telefone</label>
                                <input type="tel" id="telefone" name="telefone" required />
                            </div>
                        </div>
                    </div>
                   {showForm ? (
                        <CNPJ></CNPJ>
                    ) : (<div></div>)}
                </div>
                <div className="form2">
                    <div className="form-group" id='meioDisp'>
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
                    <div className="form-group" id='grauSoli'>
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
                                <label htmlFor="caixas" className="bold-it">Caixas 20Kg Vazias</label>
                                <input
                                    type="number"
                                    id="caixasInput"
                                    name="caixasInput"
                                    placeholder="Qtd"
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
                                    id="etiquetasInput"
                                    name="etiquetasInput"
                                    placeholder="Qtd"
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
                                    id="lacresInput"
                                    name="lacresInput"
                                    placeholder="Qtd"
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
                                    id="fitasInput"
                                    name="fitasInput"
                                    placeholder="Qtd"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.fitas}
                                />
                            </div>
                        </div>    
                    </section>
                </div>
                <div className="form5">
                    <h2>Serviços</h2>
                    <section>
                        <div className="form-group5">
                            <div className="div-checkbox">
                                <input
                                    type="checkbox"
                                    id="requisicoes"
                                    checked={enabledInputs.requisicoes}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="requisicoes" className="bold-it">Requisições de Documentos</label>
                                <input
                                    type="number"
                                    id="requisicoesInput"
                                    name="requisicoesInput"
                                    placeholder="Qtd"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.requisicoes}
                                />
                            </div>
                        </div>

                        <div className="form-group5">
                            <div className="div-checkbox">
                                <input
                                    type="checkbox"
                                    id="coleta"
                                    checked={enabledInputs.coleta}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="coleta" className="bold-it">Coleta de Caixas</label>
                                <input
                                    type="number"
                                    id="coletaInput"
                                    name="coletaInput"
                                    placeholder="Qtd"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.coleta}
                                />
                            </div>
                            <div className="div-checkbox">
                                <input
                                    type="checkbox"
                                    id="entrega"
                                    checked={enabledInputs.entrega}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="entrega" className="bold-it">Entrega de Caixas</label>
                                <input
                                    type="number"
                                    id="entregaInput"
                                    name="entregaInput"
                                    placeholder="Qtd"
                                    min="0"
                                    step="1"
                                    onChange={handleNumberChange}
                                    disabled={!enabledInputs.entrega}
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
                        <p id={"assinatura-recebedor"} className={"label-assinatura"}>Assinatura do recebedor:</p>
                        <hr/>
                        <p id={"assinatura-entregador"} className={"label-assinatura"}>Assinatura do entregador:</p>
                        <hr/>
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
