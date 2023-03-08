// promise 1
// const getData=new P
// romise((resolve, reject)=>{
//     // resolve(113)
//     reject("No data found")
// })
// console.log(getData)
// // output:
// // Promise { 113 }
// // Promise { <rejected> 'No data found' }
// getData.then(data=>console.log(data))
// // 113
// .catch(error=>console.log(error))
// // No data found


// promise practise 2
// const getData1=new Promise((resolve, reject)=>{
// // resolve(114)
// reject("No value")
// })
// console.log(getData1)
// // Promise { 114 }
// // Promise { <rejected> 'No value' }
// getData1.then(data=>console.log(data))
// // 114
// .catch(err=>{
//     console.log(err)
// })
// // No value



// fetch
// function get(getUrl){
//     fetch(getUrl).then(res=>res.json()).then(data=>console.log(data)).catch(err=>{
//         console.log(err)
//     })
// }



// // async await
// async function get(geturl){
//     try{
//         const res=await fetch(geturl)
//     const data=await res.json()
//     console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
