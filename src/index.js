// pdf-generation.js

const pdf = require('pdf-creator-node');
const fs = require('fs');

const PdfGeneration = {
  // Function to generate a PDF from HTML content
  generatePDF: (htmlContent, options, outputPath) => {
    // Define PDF options
    const defaultOptions = {
      format: 'A4',
      orientation: 'portrait',
      border: '10mm'
    };
    const mergedOptions = Object.assign({}, defaultOptions, options);

    // Create PDF
    pdf.create(htmlContent, mergedOptions)
      .then((result) => {
        // Write PDF to file
        fs.writeFileSync(outputPath, result);
        console.log(`PDF generated successfully at ${outputPath}`);
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  }
};

// Export the PdfGeneration object
module.exports = PdfGeneration;
