const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const databaseName='admin'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
   let db= result.db(databaseName);
    return db.collection('products');
  
}
module.exports= dbConnect;