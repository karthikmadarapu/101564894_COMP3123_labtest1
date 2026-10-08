const  lowerCaseWords = ((arr) =>{

    return  new Promise((resolve, reject) =>{

          if (!Array.isArray(arr)) {
            reject("Input must be an array");
            return;
        }

     const finalRes = arr
            .filter(itr => typeof itr === 'string')
            .map(itr => itr.toLowerCase());

            resolve(finalRes);

    });

});



const mixedArr = ['PIZZA', 10, true, 'Artifact', false, 'Js'];



lowerCaseWords(mixedArr)
.then(result => console.log(result)) 

 .catch(error => console.error(error));