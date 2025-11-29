use ('ecommerce');

db.products.updateOne(
    {name : "Gaming Laptop"},
    { $set: { price: 50000 }}
)