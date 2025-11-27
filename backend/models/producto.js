'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.belongsTo(models.Categoria, { foreignKey: 'categoriaId' });
      Producto.belongsToMany(models.Orden, {
        through: models.OrdenProducto,
        foreignKey: 'productoId',
        otherKey: 'ordenId'
      });
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    categoriaId: DataTypes.INTEGER,
    destacado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};