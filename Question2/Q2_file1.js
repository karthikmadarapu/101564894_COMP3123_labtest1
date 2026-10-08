// Callback.js 


// Mimicking the callback.js

//Step 1 - create the  resolve successfull method 

const resolvedPromise = () =>{
    return new Promise((resolve) =>{

        setTimeout(() =>{

            const success = {message: "delayed success!"};
            resolve(success);

        },500);
    });
};

//Step 2 - create a reject promise 

const rejectedPromise = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
 
            let error = {error: "delayed rejection"}
        
            reject(error);
       
        },500);


        
    });
};


//outputting the promises
resolvedPromise()
.then((result) => {
    console.log(result);
})
.catch((e) =>{
    console.log(e);
});





rejectedPromise()
.then((result) => {
    console.log(result);
})
.catch((e) =>{
    console.log(e);
});