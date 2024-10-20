const Router = require("express");
const router = new Router();

const transportController = require("../controllers/transportController");

router.post("/addOne", transportController.addTransport);

module.exports = router;
