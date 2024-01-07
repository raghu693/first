let hours = document.getElementById("hours")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(() => {
    let ct = new Date();
    hours.innerHTML = (ct.getHours()<10?"0":"") +  ct.getHours();
    min.innerHTML = (ct.getMinutes()<10?"0":"") +  ct.getMinutes();
    sec.innerHTML = (ct.getSeconds()<10?"0":"") +  ct.getSeconds();
}, 1000);
// console.log(ct.getHours());
// console.log(ct.getMinutes());
// console.log(ct.getSeconds());