module.exports = function check(str, bracketsConfig) {
    let container = [], pair = {};
    for(let i = 0; i < bracketsConfig.length; i++) {
      pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    let Arr = str.split('');
    for(let i = 0; i < Arr.length; i++) {
      if(Arr[i] === (container[container.length - 1] || 0)) {
        container.pop();
      } else {
        container.push(pair[Arr[i]]);
      }
      
    }
    if(container.length == 0) {
      return true;
    } else {
      return false;
    }
}
