module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'saleId',
      as: 'product',
      otherKey: 'productId'
    });
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'productId',
      as: 'sale',
      otherKey: 'saleId'
    });
  };

  return SaleProduct;
};

