// backend/models/PdfDocument.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pdfDocumentSchema = new Schema({
  name: String,
  data: Buffer,
});

module.exports = mongoose.model('PdfDocument', pdfDocumentSchema);
