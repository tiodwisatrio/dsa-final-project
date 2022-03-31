//* Harus memenuhi syarat di bawah ini
//* 555-555-5555
//* (555)555-5555
//* (555) 555-5555
//* 555 555 5555
//* 5555555555
//* 1 555 555 5555
function telephoneCheck(str) {
    const rule = /^(1 ?)?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/
  
    return rule.test(str)
  
  }
  
  console.log(telephoneCheck("555-555-5555"));