const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

const sortMiddleware = require("./app/middlewares/sortMiddleware");

const route = require("./routes");
const db = require("./config/db");

//connect to db
db.connect();

//static file
app.use(express.static(path.join(__dirname, "public")));

//middleware handle form submit (XMLHttpRequest, fetch, axios)
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

//custiom middleware
app.use(sortMiddleware);

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: require("./app/helpers/handlebars"),
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
