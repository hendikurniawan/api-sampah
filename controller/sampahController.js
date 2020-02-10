'use strict'

const sampah = require('../model/sampah')
exports.inputSampah = (saldo, total) =>
    new Promise((resolve,reject) => {


        const dataSampah = new sampah({

            saldo           : saldo,
            total           : total,
            tanggal  : new Date()
            
        });

        dataSampah.save()

            .then(() => resolve({ status: 200, message: 'Berhasil input data sampah' }))

            .catch(err => {

                if (err.code == 11000) {

                    reject({ status: 200, message: 'Kode sampah sudah digunakan' });

                } else {

                    reject({ status: 200, message: 'Internal Server Error !' });
                }
            });
    });

exports.dataSampah = ()=>
    new Promise((resolve, reject)=>{
        sampah.find()
            .then(sampahs => {
                if (sampahs.length == 0) {
                    reject({status: 200, message: 'tidak ada data' });
                } else {
                    resolve({ status: 200, message: sampahs});
                }
            })

    });

// exports.updateBuku = (kodebuku, judul, sinopsis, pengarang, harga) =>
//     new Promise((resolve,reject) => {

//         const kodeBuku = ({
//             kodebuku : kodebuku
//         });

//         const dataBuku = ({
//             judulbuku   : judul,
//             sinopsis    : sinopsis,
//             pengarang   : pengarang,
//             harga       : harga,
//             created_at  : new Date()
//         });


//         buku.update(kodeBuku, dataBuku)

//             .then(() => resolve({

//                 status: 200, message: 'Berhasil update data buku'

//             }))

//             .catch(err => {
//                 reject({ status: 200, message: 'Gagal' });
//             });
//     });

// exports.hapusBuku = (kodebuku) =>
//     new Promise((resolve,reject) => {

//         const kodeBuku = ({
//             kodebuku : kodebuku
//         });

//         buku.remove(kodeBuku)

//             .then(() => resolve({ status: 200, message: 'Data berhasil dihapus' }))

//             .catch(err => {

//                 reject({ status: 200, message: 'Gagal' });
//             });
//     });

// exports.dataBukuId = (kodebuku) =>
//     new Promise((resolve,reject) => {

//         const ids = ({
//             kodebuku:kodebuku
//         });

//         buku.findOne(ids)
//             .then(ressults => {
//                 if (ressults.length == 0) {
//                     reject({status: 200, message: 'tidak ada data' });
//                 } else {
//                     resolve({ status: 200, message: ressults});
//                 }
//             }).catch(err =>{
//             reject({ status: 200, message: 'Data tidak ditemukan' });
//         })
    // });
