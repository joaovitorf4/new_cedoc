import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementRef) => {
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

    pdf.save('generated.pdf');
    alert("Formulário enviado!");
  };