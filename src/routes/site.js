const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);

// viet o duoi cung
router.get("/", siteController.index);

module.exports = router;
