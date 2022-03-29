import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";

createConnection()
  .then(() => {
    app.listen(3000, () => {
      console.log("Running at http://localhost:3000");
    });
  })
  .catch((err: any) => console.log(err));
