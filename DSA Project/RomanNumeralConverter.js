function convertToRoman(num) {

    let roman = [];
    let satuDigit = num % 10;
    let duaDigit = Math.floor(num % 100/10);
    let tigaDigit = Math.floor(num % 1000/100);
    let empatDigit = Math.floor(num/1000);  
     
   if (num % 1 > 0 || num <= 0) {
     return "Silahkan masukkan angka yang anda inginkan...";
   }
   
   function satuan() {
     if (satuDigit === 4) {
      roman.push('IV');
     } else if (satuDigit === 9) {
      roman.push('IX');
     } else if (satuDigit < 4 && satuDigit > 0) {
      roman.push('I');
      satuDigit --;
      satuan();
     } else if (satuDigit >= 5) {
      roman.push('V');
      satuDigit = satuDigit - 5;
      satuan();
     }
   }
     
   function puluhan() {
     if (duaDigit === 4) {
       roman.push('XL');
     } else if (duaDigit === 9) {
       roman.push('XC');
     } else if (duaDigit < 4 && duaDigit > 0) {
       roman.push('X');
        duaDigit--;
       puluhan();
     } else if ( duaDigit >= 5) {
       roman.push('L');
        duaDigit = duaDigit  - 5;
       puluhan();
     }
   }
     
   function ratusan() {
     if (tigaDigit === 4) {
       roman.push('CD');
     } else if (tigaDigit === 9) {
       roman.push('CM');
     } else if (tigaDigit < 4 && tigaDigit > 0) {
       roman.push('C');
       tigaDigit --;
       ratusan();
     } else if (tigaDigit >= 5) {
       roman.push('D');
       tigaDigit = tigaDigit - 5;
       ratusan();
     }
   }
     
   function ribuan() {
     if (empatDigit > 0) {
       roman.push('M');
       empatDigit--;
       ribuan();
     }
   }
     
     ribuan();
     ratusan();
     puluhan();
     satuan();
     
     return roman.join('');
   
   }

console.log(convertToRoman(11))