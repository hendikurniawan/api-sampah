const mongoose = require('mongoose');
const sampahSchema = mongoose.Schema({
    saldo        : String,
    total 		 : String,
    tanggal		 : String
});
module.exports = mongoose.model('sampah', sampahSchema);
