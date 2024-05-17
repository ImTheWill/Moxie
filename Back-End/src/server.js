import express from "express";
import {myDataSource} from "../src/database/dataSource";


const app = express();
const port = 3000

const server = async ()=>{
    await myDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })

}
server()