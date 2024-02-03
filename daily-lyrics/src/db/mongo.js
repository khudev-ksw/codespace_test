import { MongoClient, ServerApiVersion } from "mongodb";
import { MONGO_URL, MONGO_DB, MONGO_COLLECTION, MONGO_QUERY } from "../../env.js";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Get the database and collection on which to run the operation
        const database = client.db(MONGO_DB);
        const songInfo = database.collection(MONGO_COLLECTION);

        // Query example
        const query = MONGO_QUERY;

        // Execute query
        const songToday = await songInfo.findOne(query);
        
        // Print the document returned by findOne()
        console.log(songToday);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
  }
  run().catch(console.dir);




// DB ping test
// async function testRun() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// testRun().catch(console.dir);
