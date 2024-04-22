import { jsPDF } from "jspdf";
import "jspdf-autotable";
import useCalculateResult from "../hooks/calculate";

const generatePDF = (formData) => {
    const calculatedResult = useCalculateResult(formData);

    const doc = new jsPDF();
    doc.setFont("helce");
    // Add header title on top right
    doc.setFontSize(20);
    doc.setFont("Courier", "medium"); // Use Inter font


    // Add header title on top right
    doc.text("Simulation Salarial", doc.internal.pageSize.width - 65, 20);

    const logoImg = "/logo.png";
    const logoWidth = 55;
    const logoHeight = 14;
    doc.addImage(logoImg, "PNG", 10, 10, logoWidth, logoHeight);

    // Set font size and style for the content
    doc.setFontSize(13);
    doc.setFont("poppins", "medium"); // Use Poppins font
    doc.setTextColor("#000000");

    // Add colored rectangle
    doc.setFillColor("#1B152B");
    doc.rect(0, 30, doc.internal.pageSize.width, 18, "F");


    // Add company details in left section
    doc.text("Your Company Name", 15, 60);
    doc.text("123 Street, City, Country", 15, 67);

    // Add employee details in right section
    doc.text(`Simulation ID: #05541`, doc.internal.pageSize.width - 70, 60);
    doc.text(`Simulation Date: 18/08/2023`, doc.internal.pageSize.width - 70, 67);


    // Add calculated values in a table
    const columns = ["Item", "Value"];

    // Define the data for the table
    const data = [
        { item: "Tarif Journalier HT", value: `${calculatedResult.TarifjournalierHT}€` },
        { item: "Nombre de Jours Travaillés", value: `${calculatedResult.Nbrjourstravaillés}€` },
        { item: "Total HT", value: `${calculatedResult.totalHt}€` },
        { item: "Frais de Gestion", value: `${calculatedResult.fraisDeGestion}€` },
        { item: "Frais Professionnels", value: `${calculatedResult.FraisPro}€` },
        { item: "Masse Salariale Disponible HT", value: `${calculatedResult.masseSalarialeDisponible}€` },
        { item: "Salaire Brut", value: `${calculatedResult.SalaireBrut}€` },
        { item: "Charges Patronales", value: `${calculatedResult.ChargesPatronales}€` },
        { item: "Charges Salariales", value: `${calculatedResult.ChargesSalariales}€` },
        { item: "Salaire Net Imposable", value: `${calculatedResult.SalaireNetImposable}€` },
        { item: "Salaire Net Avant Impôt", value: `${calculatedResult.SalaireNetAvantImpôt}€` },
        { item: `Réserve financière de ${calculatedResult.pourcentageRF}% du CA`, value: `${calculatedResult.ReserveFinanciere}€` },
        { item: "Total Reverse", value: `${calculatedResult.TotalReverse}€` },
    ];


    const headStyles = {
        fillColor: "#7F56D9", // Set the background color for the header row
        textColor: "#FFFFFF", // Set the text color
        fontSize: 14,
        fontStyle: "bold",
        rowHeight: 12,
        halign: "start",
        cellPadding: { top: 4, bottom: 4, left: 5 },
        lineWidth: 0,  // Horizontally center the header text
    };
    const alternateRowStyles = {
        fillColor: "#E4DBFA",
        cellPadding: { top: 4, bottom: 4, left: 5 },
        lineWidth: 0,
    };
    const whiteCellStyles = {
        fillColor: "#FFFFFF",
        textColor: "#1B152B", // Adjust text color as needed
        cellPadding: { top: 4, bottom: 4, left: 5 },// Adjust the cell height here
        lineWidth: 0,
    };
    // Create the table
    doc.autoTable({
        startY: 80,
        head: [columns],
        body: data.map(item => [item.item, item.value]),
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 5 },
        headStyles: headStyles,
        alternateRowStyles: alternateRowStyles,
        bodyStyles: { ...alternateRowStyles, ...whiteCellStyles },
        tableLineWidth: 0.1, // Set the table border width
        tableLineColor: "#7F56D9",
    });
    // Add colored rectangle
    doc.setFillColor("#1B152B");
    doc.rect(0, 270, doc.internal.pageSize.width, 1, "F");
    // Save the PDF
    // Add footer
    const footerX = 10;
    const footerY = doc.internal.pageSize.height - 10;

    // Footer content (phone, email, website)
    const footerContent = "Phone: +123456789  |  Email: info@example.com  |  Website: www.example.com";
    doc.setFontSize(11);
    doc.setTextColor("#7F56D9");
    doc.setFont("poppins", "medium");
    doc.text(footerContent, footerX, footerY);

    // Footer logo (adjust logo path and dimensions)
    const logoImgFooter = "/logo.png"; // Adjust the path to your logo
    const logoWidthFooter = 32;
    const logoHeightFooter = 8;
    doc.addImage(logoImgFooter, "PNG", doc.internal.pageSize.width - logoWidthFooter - footerX, footerY -6, logoWidthFooter, logoHeightFooter);

    doc.save("invoice.pdf");
};

export default generatePDF;
