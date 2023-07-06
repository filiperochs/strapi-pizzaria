import fs from "fs";
import path from "path";

export default {
  async index(ctx) {
    if (process.env.NODE_ENV === "production") return null;
    ctx.send(
      fs.readFileSync(
        path.resolve(
          __dirname,
          "..\\..\\..\\extensions\\documentation\\documentation\\1.0.0\\full_documentation.json"
        ),
        "utf8"
      )
    );
  },
};
// /app/dist/src/extensions/documentation/documentation/1.0.0
// fs.readFileSync(
//   "..\\..\\..\\extensions\\documentation\\documentation\\1.0.0\\full_documentation.json",
//   "utf8"
// )
