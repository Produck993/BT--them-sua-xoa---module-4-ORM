import express from "express";
import { AppDataSource } from "./src/data-source"
const PORT = 3000;
AppDataSource.initialize().then(connection=> {
    const app = express();
    app.listen(PORT,()=> {
        console.log(`Server is running on http://localhost:3000`);
    })

    app.get('/',(req,res)=> {
        
    })
})