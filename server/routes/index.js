const Router = require("express");
const router = new Router();

const transportRouter = require("./transportRouter");
const imagesRouter = require("./imagesRouter");

router.use("/transport", transportRouter);
router.use("/images", imagesRouter);

module.exports = router;
