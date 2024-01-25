module.exports = (sequelize, dataTypes) => {
    let alias = 'User_Product';
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
    };
    /*
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'roles'
    }*/
    const User_Product= sequelize.define(alias, cols, config); 

    User_Product.belongsTo(User, {
         foreignKey: 'user_id',
          targetKey: 'id' 
        });
    User_Product.belongsTo(Product, { 
        foreignKey: 'product_id',
         targetKey: 'id'
         });
    return User_Product;
};