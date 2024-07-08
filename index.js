const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://tejasghatule12345:L0zKCaep3DF9wtNQ@cluster0.11bongg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

const productSchema = new mongoose.Schema({
  product_name : {
    type : String,
    required : true
  },
  price : {
    type : String,
    required : true
  },
  isInStock : {
    type : Boolean,
    required : true
  },
  Category : {
    type : String,
    required : true
  }
});

const productModel = mongoose.model('products',productSchema);
//create
app.post("/api/products", async (req, res) => {
  const product = productModel.create({
    product_name : req.body.product_name,
    price : req.body.price,
    isInStock : req.body.isInStock,
    Category : req.body.Category
  });
  console.log(product);
  return res.status(201).json({message : "Product created successfully"});
});

app.get('/api/products' , async(req , res)=>{
  const allProucts = await productModel.find({isInStock:true})

  return res.json(allProucts)
})

// Get product by id

app.get('/api/products/:id' , async(req , res)=>{
const product = await productModel.findById(req.params.id)

return res.json(product)
})

// Update product

app.put('/api/products/:id' , async(req , res)=>{
 const updatedProduct = await productModel.findByIdAndUpdate(req.params.id , req.body)
 return res.json(updatedProduct)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});