const Router = require("express");
const router = new Router();

const transportController = require("../controllers/imagesController");
const imagesController = require("../controllers/imagesController");

router.post("/addOne", imagesController.addImage);
router.get("/getAll", imagesController.getAllImages);

module.exports = router;
