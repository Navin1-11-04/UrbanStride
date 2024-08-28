const Product = require("../models/productModel");
const {v4: uuidv4} = require('uuid');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(404).json("No product found");
  }
};

exports.createProduct = async (req,res) =>{
  const {name,sub_title,brand,description,price,sizes,colors,images,category,material} = req.body;
  try{
    const product = new Product({
      id:uuidv4(),
      name,
      sub_title,
      brand,
      description,
      price,
      sizes,
      colors,
      images,
      category,
      material
    })
    await product.save();
    res.status(200).json("Product created successfully")
  }
  catch(err){  
    res.status(404).json("Cannot create Product",err);
  }
}

exports.deleteProduct = async (req,res) =>{
  const { id } = req.params;
  try{
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json("Product Deleted successfully");
  }catch(err){
    res.status(404).json("Cannot delete Product",err);
  }
}

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json("Product not found");
    }
    res.status(200).json("Product updated successfully");
  } catch (err) {
    res.status(400).json("Cannot update Product",err);
  }
};