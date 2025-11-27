'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orden.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
      Orden.belongsToMany(models.Producto, {
        through: models.OrdenProducto,
        foreignKey: 'ordenId',
        otherKey: 'productoId'
      });

    }
  }
  Orden.init({
    usuarioId: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    totalSinIGV: DataTypes.DECIMAL,
    totalConIGV: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Orden',
  });
  return Orden;
};