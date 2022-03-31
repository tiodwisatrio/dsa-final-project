// * Cashier Application
function checkCashRegister(price, cash, cid) {
    // Cari total kembalian
    let totalKembalian = (cash * 100) - (price * 100)
    console.log(totalKembalian)

    // Hitung jumlah uang di dalam mesin kasir
    let totalUangDiKasir = cid.map((el) => el[1]).reduce((acc, curr) => acc + curr * 100, 0);
    console.log(totalUangDiKasir)

    // Panduan Satuan & Pecahan --> sudah dikali 100
    let rumusSlot = {
        PENNY: 1,
        NICKEL: 5,
        DIME: 10,
        QUARTER: 25,
        ONE: 100,
        FIVE: 500,
        TEN: 100,
        TWENTY: 2000,
        'ONE HUNDRED': 10000,
    }
    
    // Pengecekan Kondisi
    // Kasus 1 --> Ketika kembalian tidak cukup
    if (totalKembalian > totalUangDiKasir) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    // Kasus 2 --> Ketika Kembalian sama dengan uang di kasir
    else if (totalKembalian === totalUangDiKasir) {
        return {status: "CLOSED", change: cid}
    }

    // Kasus 3 --> Ketika Kembalian lebih kecil dari uang yg ada di kasir
    // Kembalikan sesuai dengan pecahannya dari yang terbesar
    else {
        cid = cid.reverse();
        // console.log(cid)

        // Menyiapkan uang kembalian (dalam bentuk array)
        let jumlahUangYangDiKembalikan = [];

        // Telusuri setiap slot uang di mesin kasir
        cid.forEach(slot => {
        let kondisiSlotbaru = [slot[0], 0]

        // Satuan atau nama pecahan
        let satuan = slot[0];

        // Jumlah Uang
        let pecahan = slot[1] * 100

        // Cek Uang berdasarkan satuan, kurangi jika kembalian masih memenuhi
        while(totalKembalian >= rumusSlot[satuan] && pecahan > 0) {
            totalKembalian -= rumusSlot[satuan]
            pecahan -= rumusSlot[satuan]
            kondisiSlotbaru[1] += rumusSlot[satuan] / 100
        }

        if(kondisiSlotbaru[1] > 0) {
            jumlahUangYangDiKembalikan.push(kondisiSlotbaru)
        }});


        // Mengecek jika uang ada tapi pecahannya tidak ada (Gada receh maszehh, permen aja ya masszehh)
        if (totalKembalian > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []}

        }
        return  {
        status: "OPEN", 
        change: jumlahUangYangDiKembalikan
        }
    }
}

// Uang yang diberikan: 20
// Total harga: 19.5
// Uang dikembalikan: 0.5  
// Hasil: [['QUARTER', 0.5]]
  
  console.log(checkCashRegister(19.5, 20, [
      ["PENNY", 1.01], 
      ["NICKEL", 2.05], 
      ["DIME", 3.1], 
      ["QUARTER", 4.25], 
      ["ONE", 90], 
      ["FIVE", 55], 
      ["TEN", 20], 
      ["TWENTY", 60], 
      ["ONE HUNDRED", 100]
    ]));
