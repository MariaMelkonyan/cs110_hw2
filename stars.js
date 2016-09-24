const stars = function(st) {
  if (st === 0) {
    return "";
  }
  return "*" + stars(st-1);
};

const space = function(sp) {
  if (sp === 0) {
    return "";
  }
  return " " + space(sp-1);
};
  
    
  const connect= function (spCount, stCount, n) {
    if (n===0) {
      return "";
       }
    console.log(space(spCount)+ stars(stCount)) ; 
    connect(spCount-1, stCount+2, n-1);
  };

  const triangleStars = function(n) {
    connect(n-1, 1, n)
  }
triangleStars(15);
