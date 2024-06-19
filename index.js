const app = require("./app");
const dotenv  = require("dotenv")
//config
dotenv.config({ path: "config/config.env" }); // line: 4
app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});