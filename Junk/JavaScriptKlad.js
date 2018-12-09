// var person = {
//     firstName: "firstname",
//     lastName: "lastname",
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// var john = {
//     firstName: "john",
//     lastName: "Doe"
// }

// var johnny = {
//     firstName: "Johnny",
//     lastName: "blue"
// }

// var jimmy = {
//     firstName: "jimmy",
//     lastName: "lam"
// }

// // person.prototype.getFullName = function () {
// //     return this.firstName + " " + this.lastName;
// // };

// console.log(jimmy.getFullName());
// console.log(john.getFullName());
// console.log(johnny.getFullName());

function A(x){
    var y = x * 2;
    return function(y){
        var z = y * 3;
        return function(z){
            return x + y + z;
        }
    }
}
console.log( A(3)(4)(5) );