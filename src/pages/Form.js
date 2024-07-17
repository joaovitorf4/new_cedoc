import React from 'react';
import './Form.css'; // Import your CSS file
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from '../imgs/logo_cedoc.png';

const Form = () => {
  const elementRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width / height < 1.28) {
      alert('Coloque em tela cheia para que o formulário não fique muito achatado');
      alert('A requisição deve ser feita apenas em computadores');
      return;
    }

    const form = event.target;
    if (form.checkValidity()) {
      downloadPDF();
    } else {
      alert('Please fill out all required fields.');
      form.reportValidity();
    }
  };

  const downloadPDF = async () => {
    const element = elementRef.current;

    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
    });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'pt', 'a4');

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const scaledWidth = imgWidth * 0.85;
    const scaledHeight = imgHeight * 0.85;

    const marginX = (imgWidth - scaledWidth) / 2;
    const marginY = (pdf.internal.pageSize.getHeight() - scaledHeight) / 2;

    if (scaledHeight > pdf.internal.pageSize.getHeight()) {
      const scaleRatio = pdf.internal.pageSize.getHeight() / scaledHeight;
      const adjustedWidth = scaledWidth * scaleRatio;
      const adjustedHeight = scaledHeight * scaleRatio;

      pdf.addImage(imgData, 'PNG', (imgWidth - adjustedWidth) / 2, (pdf.internal.pageSize.getHeight() - adjustedHeight) / 2, adjustedWidth, adjustedHeight);
    } else {
      pdf.addImage(imgData, 'PNG', marginX, marginY, scaledWidth, scaledHeight);
    }

    pdf.save('download.pdf');
    alert("Formulário enviado!")
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit} ref={elementRef} style={{ padding: '20px', background: '#f5f5f5', whiteSpace: 'pre-wrap' }} id="myForm">
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
                <input type="radio" id="email" name="meio" value="email" required />
                <label htmlFor="email">E-MAIL</label>
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
            <div contentEditable="true" id="observacao" name="observacao"></div>
          </div>
          <div className="form-group">
            <strong>
              <label htmlFor="politica">
                Comprometemo-nos a proteger seus dados pessoais, incluindo nome, e-mail e telefone, conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD). Seus dados serão utilizados exclusivamente para os fins previstos neste formulário e não serão compartilhados com terceiros sem sua autorização. Para mais informações sobre como seus dados são tratados, consulte nossa política de privacidade.
              </label>
            </strong>
            <div id="accept">
              <input type="radio" name="accept" required />
              <label>De Acordo</label>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="form-group-sign">
            <div className="model-signature"><div id="signature"></div><p>CEDOC</p></div>
            <div className="model-signature"><div id="signature"></div><p>Cliente</p></div>
          </div>
          <div>
            <hr />
          </div>
          <div className="form-group">
            <input type="submit" name="file" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
