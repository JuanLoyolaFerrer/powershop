'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenProducto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrdenProducto.belongsTo(models.Orden, { foreignKey: 'ordenId' });
      OrdenProducto.belongsTo(models.Producto, { foreignKey: 'productoId' });
    }
  }
  OrdenProducto.init({
    ordenId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdenProducto',
  });
  return OrdenProducto;
};