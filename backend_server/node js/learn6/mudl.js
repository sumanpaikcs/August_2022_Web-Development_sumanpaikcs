console.log("This is custom module");

function average(arr) {
   let sum =0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
    
}
module.exports = {
    avag: average,
    name: "suman",
    num: 4,
    repo: "linux"
}