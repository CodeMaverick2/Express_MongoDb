const router = require("express").Router();
const userController = require("../controllers/userController");


router.post("/", userController.createUser);


router.get("/", userController.getallusers);


router.get("/:id", userController.getById);


router.put("/:id", userController.updateuser);


router.delete("/:id", userController.deleteuser);


module.exports = router