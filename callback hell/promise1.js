h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         h1.style.color = color;
         resolve("color changed")
        }, delay);
    });
    
}  

    changeColor("red", 1000)
    .then(() => {
        console.log("red complied");
        return changeColor("orange", 1000)
     })
    .then(() => {
        console.log("orange complied");
        return changeColor("green", 1000)
    })
    .then(() => {
         console.log("green complied");
         return changeColor("yellow", 1000)
    })
    .then(() => {
        console.log("yellow complied");
        return changeColor("blue", 1000)
    })
    .then(() => {
        console.log("blue complied");
        return changeColor("brown", 1000);
    })
    .then(() => {
        console.log("brown complied");
    })
