const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   family: 4, // Force using IPv4. Remove or change to 6 to force IPv6.
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
module.exports = connectDatabase;
