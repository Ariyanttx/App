// function host() {
//     console.log('i am host function...');
//      return function () {
//     console.log('i am chiled');
//      }
// }
// var a =host();
// a;
// console.log(a());


function greeting(msg){
    return function (name) {
        console.log(msg + ' ' + name);
        
    }
}

var good = greeting('Good morning');
var hello = greeting ('hello');

hello('ibrahim');
good ('toki ami ki');