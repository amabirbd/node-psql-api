module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    title: {
      type: Sequelize.STRING,
    },
  });
  //   Category.hasMany(Product, { as: "products" });
  //   Product.belongsTo(Category, {
  //     foreignKey: "categoryId",
  //     as: "tutorial",
  //   });
  return Category;
};
// a category has - title, product,
