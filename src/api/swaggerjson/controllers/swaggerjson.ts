import fs from "fs";
import path from "path";

export default {
  async index(ctx) {
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

// fs.readFileSync(
//   "..\\..\\..\\extensions\\documentation\\documentation\\1.0.0\\full_documentation.json",
//   "utf8"
// )
