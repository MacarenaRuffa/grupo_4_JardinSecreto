module.exports = (sequelize, dataTypes) => {
    let alias = 'User_products';
    let cols = {
        users_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        products_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'roles'
    }
    const User_Product= sequelize.define(alias, cols, config); 

    User_Product.belongsTo(User, {
         foreignKey: 'users_id',
          targetKey: 'id' 
        });
    User_Product.belongsTo(Product, { 
        foreignKey: 'products_id',
         targetKey: 'id'
         });
    return User_Product;
};