const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'Alice'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'Alice'}).toArray();
   console.log(data)
}

main()
