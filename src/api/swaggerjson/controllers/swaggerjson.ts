import fs from "fs";
import path from "path";

export default {
  async index(ctx) {
    ctx.send(
      fs.readFileSync(
        path.resolve(
          "dist\\src\\extensions\\documentation\\documentation\\1.0.0\\full_documentation.json"
        ),
        "utf8"
      )
    );
  },
};
// dist\src\extensions\documentation\documentation\1.0.0\full_documentation.json
// fs.readFileSync(
//   "..\\..\\..\\extensions\\documentation\\documentation\\1.0.0\\full_documentation.json",
//   "utf8"
// )
