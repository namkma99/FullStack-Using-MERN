const Product = require("../models/Product");
const slugify = require("slugify");
const shortid = require("shortid");
const multer = require("multer");

exports.createProduct = (req, res, next) => {
  // res.status(200).json({file: req.files, body: req.body});

  const {
    name, price, description, productPicture, category, createdBy 
  } = req.body;

  const product = new Product({

    name: req.body,
    slug: slugify(name),
    price,
    description,
    productPicture,
    createdBy: req.user._id
  });

  product.save()
  .exec((error, product) =>{
    if(error) return res.status(400).json({error})
    if(product) {
      res.status(200).json({product})
    }
  })
};
