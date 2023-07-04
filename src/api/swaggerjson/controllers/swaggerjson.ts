import fs from "fs";

export default {
  async index(ctx) {
    ctx.send(
      fs.readFileSync(
        "src\\extensions\\documentation\\documentation\\1.0.0\\full_documentation.json",
        "utf8"
      )
    );
  },
};
