const Sequelize = require("sequelize");

const sequelize = databaseFactory();

const User = sequelize.define('user', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING
    }
});


const Post = sequelize.define('post', {
    // attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


const Comment = sequelize.define('comment', {
    // attributes
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Associations
User.hasMany(Post);
Post.hasMany(Comment);

function databaseFactory() {
    const Op = Sequelize.Op;
    const operatorsAliases = {
        $in: Op.in,
    };

    return new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
        storage: './store.sqlite',
        operatorsAliases,
        logging: false,
    });
}

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = { sequelize };