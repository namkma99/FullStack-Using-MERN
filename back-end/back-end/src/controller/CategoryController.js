const Categories = require("../models/Categories");
const slugify = require("slugify");

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if(parentId == null) {
    category = categories.filter(cat => cat.parentId == undefined);
  }
  else{
    category = categories.filter(cat => cat.parentId == parentId);
  }

  for(let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      childrent: createCategories(categories, cate._id),
    })
  }


  return categoryList;
}

//[POST]
exports.addCategory = (req, res) => {
  Categories.findOne({name: req.body.name}).exec((error, item) => {
    if (item) return res.status(400).json({ error: 'Category exist' });
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
    };

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }

    const cat = new Categories(categoryObj);
    cat.save((error, category) => {
      if (error) return res.status(400).json({ error });
      if (category) {
        return res.status(201).json({ category });
      }
    });
  });
};



//[GET]
exports.getCategory = (req, res) => {
  Categories.find({})
    .exec((error, category) => {
      if (error) return res.status(400).json({ error: error });
      if (category) {
        const categoryList = createCategories(category) 

        res.status(200).json({categoryList})


      }
  });
};
