const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { name:'Abeeha'},
        {
            $set:{name:'Abeeha Zahid', age:13}
        }
        );
    console.warn(result);

}

updateData();