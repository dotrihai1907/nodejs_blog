const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next); // .catch((err) => next(err));

    // res.render("home");
  }

  // [GET] / search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
