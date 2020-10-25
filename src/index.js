  module.exports = function reverse (n) {
    let f='';
    let nn=Math.abs(n);
      while (nn>0) {
          f+=nn%10;
          nn=(nn-nn%10)/10;
  
    }
    return f;
}
