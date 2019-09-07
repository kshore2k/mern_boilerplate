const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/<<DATABASE>>', { useNewUrlParser: true });

const ModelSchema = new mongoose.Schema({
    // << MODEL FIELDS >>
}, { timestamps: true });

module.exports = mongoose.model('Model', ModelSchema);