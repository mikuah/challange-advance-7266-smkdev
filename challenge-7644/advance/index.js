//parameter n untuk jumlah suku ke-n
function findSumSeries(n) {
    let nums = []; //penampung deret angka hingga n suku
    let num = ""; //string angka
    let sum = 0; //jumlah deret angka hingga n suki
    //looping sebanyak n kali
    for (let i = 0; i < n; i++) {
        num += "2"; //menggabungkan string angka
        nums.push(num); //menambahkan angka ke array penampung
    }
    //looping sebanyak panjang array penampung
    for (let j = 0; j < nums.length; j++) {
        //mengubah tipe data menjadi integer dan dijumlahkan dengan nilai sebelumnya
        sum = sum + parseInt(nums[j]);
    }
    return sum;
}
console.log(findSumSeries(5));
