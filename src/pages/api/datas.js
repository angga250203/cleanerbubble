export default function handler(req, res) {
    res.status(200).json([
        {
            id:1,
            name:"FAST CLEAN",
            img:"/asset/jasa/cuci1.webp",
            desc:"Treatment membersihkan / cuci sepatu secara cepat khusus untuk sepatu (lebih dikhususkan sneakers/loafers) aman untuk semua bahan dan warna.dapat ditunggu 20-45 menit"  
        },
        {
            id:2,
            name:"DEEP CLEAN",
            img:"/asset/jasa/cuci2.webp",
            desc:"Treatment pencucian khusus untuk sepatu secara detail untuk seluruh bagian, aman untuk semua bahan dan warna.Durasi pengerjaan +- 3 hari."  
        },
        {
            id:3,
            name:"DEEP CLEAN EXPRESS",
            img:"/asset/jasa/cuci3.webp",
            desc:"Treatment pencucian khusus untuk sepatu secara detail untuk seluruh bagian, aman untuk semua bahan dan warna.Durasi pengerjaan 24 jam."  
        },
        {
            id:4,
            name:"WHITENING",
            img:"/asset/jasa/cuci5.webp",
            desc:"Treatment pencucian khusus untuk sepatu berbahan canvas dan mesh berwarna putih.Durasi pengerjaan +- 2 hari."  
        },
        {
            id:5,
            name:"DEEPCLEAN BAG",
            img:"/asset/jasa/cuci4.webp",
            desc:"Treatment pencucian khusus untuk tas, aman untuk semua bahan dan warna.Durasi pengerjaan +- 3 hari."  
        },
        {
            id:6,
            name:"DEEPCLEAN SNAPBACK",
            img:"/asset/jasa/cuci6.webp",
            desc:"Treatment pencucian khusus untuk topi, aman untuk semua bahan dan warna.Durasi pengerjaan +- 2 hari."  
        },
      
    ])
  }