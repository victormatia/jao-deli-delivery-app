module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId', as: 'seller'
    });
  };

  return Sale;
};
