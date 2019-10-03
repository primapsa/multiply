module.exports = function multiply(first, second) {
  let i, j, current = 0, next = 0, term = 0, str='';
  let result = Array(first.length + second.length);
  result.fill(0);

  for(i=first.length-1; i>=0; i--){
    for(j=second.length-1; j>=0; j--){
      term = parseInt(first[i]) * parseInt(second[j]);
      current = term + parseInt(result[i+j+1]);      
      next = Math.floor(current / 10) + parseInt(result[i+j]) ;
      result[i+j+1] = current % 10;
      result[i+j] = next;
    }
  }
if(result[0] === 0) result.shift();
return result.join('');
}
