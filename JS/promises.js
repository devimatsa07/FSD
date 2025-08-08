function fun1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1)
        },1000)
    })
}
function fun2(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1)
        },1000)
    })
}
function fun3(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1)
        },1000)
    })
}
// fun1().then(function(){
//     console.log("Fun-1 completed")
//     fun2().then(function(){
//         console.log("Fun-2 completed")
//         fun3().then(function(){
//             console.log("Fun-3 completed")
//         })
//     })
// })

async function execute(){
    try{
        const result1=await fun1()
        const result2=await fun2(result1)
        const result3=await fun3(result2)
        console.log(result3);
    }
    catch(err){
        console.log(err)
    }
}
execute();