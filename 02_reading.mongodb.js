use('ecommerce');

// db.products.find({"name":"Gaming Laptop"})
// db.products.find({ category: "Electronics" });
// db.products.find({ price: { $gt: 1000 }});
// db.products.find({ price: { $lt: 1000 } });
// db.products.find({ price: { $gte: 500, $lte: 1500 } });

db.products.find({},{name:1, price:1, _id:0});