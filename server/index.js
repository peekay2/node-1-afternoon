const express = require("express");
const { json } = require("body-parser");
cors = require("cors");
port = 3001;
app = express();

const {
  create,
  read,
  update,
  deleted
} = require("./controllers/messages_controller");

app.use(express.static(__dirname + "/../public/build"));
// We need app.use to run our middleware
app.use(json());
// app.use(bodyParser.json() ); //old way
app.use(cors());

const messageBaseURL = "/api/messages";
app.post(messageBaseURL, create);
app.get(messageBaseURL, read);
app.put(`${messageBaseURL}/:id`, update);
app.delete(`${messageBaseURL}/:id`, deleted);

app.listen(port, () => {
  console.log(`BEEEEP BEEEP server reporting from port ${port}`);
});
