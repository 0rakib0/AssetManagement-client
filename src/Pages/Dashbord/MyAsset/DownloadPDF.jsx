import React from 'react';
import jsPDF from 'jspdf';
import moment from 'moment';


const DownloadPDF = ({ asset }) => {

    const { assetName, image, assetType, } = asset

    console.log(asset)

    const date = new Date()


    const generatePdf = () => {
        const pdf = new jsPDF();

        // Add content to the PDF
        pdf.addImage(image, 'JPEG', 10, 60, 50, 50);
        pdf.text(`Company Name:Pluto`, 10, 10);
        pdf.text(`Asset Name: ${assetName}`, 10, 20);
        pdf.text(`Asset Type: ${assetType}`, 10, 30);
        pdf.text(`Print Date: ${moment(date).format('DD-MM-YYY')}`, 10, 40);

        // Save the PDF
        pdf.save('generated_pdf.pdf');
    };
    return (
        <div>
            <button onClick={generatePdf}>Generate PDF</button>
        </div>
    )
};

export default DownloadPDF;