const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);

// viet o duoi cung
router.get("/", newsController.index);

module.exports = router;
