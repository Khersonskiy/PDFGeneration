const PdfGeneration = require('pdf-generation-package');

// Define HTML content
const htmlContent = `
<html>
<head>
  <title>PDF Document</title>
</head>
<body>
  <h1>Hello, PDF!</h1>
  <p>This is a simple PDF generated from HTML content.</p>
</body>
</html>
`;

// Define PDF generation options
const options = {
  format: 'A4',
  orientation: 'portrait',
  border: '10mm'
};

// Define output file path
const outputPath = 'output.pdf';

// Generate PDF
PdfGeneration.generatePDF(htmlContent, options, outputPath);
