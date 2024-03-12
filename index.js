const express = require("express");
const app = express();

// import database connection
require("./models/db")
// import articles Router
const articlesRouter = require("./routes/articles");
const usersRouter = require("./routes/user");
const commentRouter = require("./routes/comments");
app.use(express.json());

// articles Router
app.use("/articles", articlesRouter);
app.use("/users",usersRouter)
app.use("/articles",commentRouter)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT http://localhost:${PORT}`);
});
