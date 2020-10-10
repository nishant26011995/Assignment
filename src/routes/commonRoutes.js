const CommonController = require("../controller/commonController");

const routes = app => {
    app.post("/api/v1/factorial", CommonController.factorial);
}
module.exports = routes;