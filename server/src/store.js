const SQL = require('sequelize');


module.exports.createStore = () => {
    const Op = SQL.Op;
    const operatorsAliases = {
        $in: Op.in,
    };

    const db = new SQL('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: './store.sqlite',
        operatorsAliases,
        logging: false,
    });

    const users = db.define('user', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: SQL.STRING,
        lastName: SQL.STRING,
        email: SQL.STRING,
        token: SQL.STRING,
        createdAt: SQL.DATE,
    });

    const posts = db.define('post', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        createdAt: SQL.DATE,
        title: SQL.STRING,
        body: SQL.STRING,
        userId: {
            type: SQL.INTEGER,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'Companies',
                key: 'id'
            }
        },
    });

    return { users, trips };
};
