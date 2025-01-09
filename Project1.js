//* SISTEM MANAJEMEN STOK PRODUCT
 //* membuat  pengelolaan stok barang sederhana untuk sebuah toko. 
 //* Aplikasi ini akan mencatat data barang, 
 //* menambah stok baru, 
//  * mengurangi stok.


//BARANG TEKNOLOGI

const Product = [
    {id: "1", name: "Laptop", stok: "100"},
    {id: "2", name: "mouse", stok: "200"},
    {id: "3", name: "Flashdisk", stok: "150"},
    {id: "4", name: "memory", stok: "180"},
    {id: "5", name: "SSD", stok: "120"},
    {id: "6", name: "keyboard", stok: "200"},
    {id: "7", name: "earphone", stok: "180"},
    {id: "8", name: "Headset", stok: "200"},
    {id: "9", name: "Adapter", stok: "250"},
];

// membuat Daftar Product
function showProduct(){
    console.log("Daftar Produk Technologhy");
for(let i = 0; i < Product.length; i++){ //looping
    const product = Product[i];
console.log(`ID: ${product.id}, Name: ${product.name}, Stok: ${product.stok}`);

  }
}
// menambah product baru dengan menggunakan method array(.push)
function addProduct(id, name, stok) {
    Product.push({id, name, stok});
    console.log(`\n Product baru "${name}" berhasil ditambahkan`);
};

//mengurangi stok
function reduceStockSimple(id, jumlah) {
    for (let i = 0; i < Product.length; i++) {
        if (Product[i].id === id) { //melakukan perbandingan  apakah product sudah ditemukan
            
            // jika iya, tahapnya ke conditional 

            if (Product[i].stok >= jumlah) { //memastikan stok cukup
                Product[i].stok -= jumlah; //ini untuk mengurangi produk yang akan di perintah di akhir
                console.log(`\nStok produk "${Product[i].name}" berhasil dikurangi sebanyak ${jumlah}.`);
            } else {
                console.log(`\nStok produk "${Product[i].name}" tidak mencukupi! (Stok tersedia: ${Product[i].stok})`);
            }
            return; 
        }
    }
    console.log(`\nProduk dengan ID "${id}" tidak ditemukan.`);
}

showProduct();
addProduct("10", "Handphone", "150");
reduceStockSimple("3", 50);
reduceStockSimple("10", 80); 
reduceStockSimple("11", 65);
showProduct();