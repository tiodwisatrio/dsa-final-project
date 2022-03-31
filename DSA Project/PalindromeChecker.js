function palindrome(str) {

    const newStr = str.replace(/[\W_]/g, '').toLowerCase()
    return newStr.split('').reverse().join('') === newStr 
  }
  
console.log(palindrome("Kasur Rusak"));