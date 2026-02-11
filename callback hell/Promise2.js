function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success : your data was saved");
        }else {
            reject("Failure : weak connection. data was not saved");
        }
    });
    
}


saveToDb("dev")
.then((result) => {
    console.log(" data1 saved. promise was resolved");
    console.log("result of promise: ",result);
    return saveToDb("Gun");
    })
    .then((result) => {
        console.log(" data2 saved");
        console.log("result of promise: ",result);
        return saveToDb("fire");
})
.then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ",result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ",error);
})
