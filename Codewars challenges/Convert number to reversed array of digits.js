function digitize(n) {
    //code here
    let numArray;
    const stringNum = String(n);
    return  numArray = stringNum.split('').map(Number).reverse()  
  }