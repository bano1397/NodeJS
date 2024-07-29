const dbConnect = require('./mongodb');

const insertData = async () => {
    let data = await dbConnect();
    let result = await data.insertMany( // Change to insertMany for multiple documents
        [
            { name: 'Shehar', age: '20', email: 'banobnd' },
            { name: 'Bano', age: '20', email: 'bahuduj' },
            { name: 'Abeeha', age: '12', email: 'ndnbc' },
        ]
    );
    if (result.acknowledged) {
        console.warn("Data is inserted");
    }
}

insertData();
