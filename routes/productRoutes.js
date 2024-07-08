const router = require("express").Router();
const productControllers = require("../controllers/productControllers");


router.post("/", productControllers.createProduct);


router.get("/", productControllers.getallProducts);


router.get("/:id", productControllers.getById);


router.put("/:id", productControllers.updateProduct);


router.delete("/:id", productControllers.deleteProduct);


module.exports = router