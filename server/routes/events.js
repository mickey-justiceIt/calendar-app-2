const express = require("express");
const controller = require("../controllers/events");
const router = express.Router();

router.get("/:id/", controller.getEvents);
router.post("/", controller.create);
router.delete("/", controller.remove);
router.patch("/", controller.update);


module.exports = router;



module.exports = router;
