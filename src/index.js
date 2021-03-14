module.exports = function reverse (n) {
    n = String(Math.abs(n)).split('');
    n.reverse();

    while(n[0] == 0){
        n.shift()
    }
    
   return Number(n.join(''));
}