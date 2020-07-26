const app = require("./server");
require('./routes/categories')(app);
const sitesRoute = require("./routes/sites");
const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);
app.use("/sites", sitesRoute);

const port = process.env.PORT || 9200;
app.listen(port, () => console.log(`server on port ${port}`));