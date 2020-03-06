const Sequelize = require("sequelize");

const sequelize = databaseFactory();

const users = sequelize.define('user', {
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


const posts = sequelize.define('post', {
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


const comments = sequelize.define('comment', {
    // attributes
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Associations
users.hasMany(posts);
posts.hasMany(comments);

function databaseFactory() {
    return new Sequelize('graphql_blog', 'postgres', 'admin', {
        host: 'localhost',
        dialect: 'postgres',
    });
}

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = { sequelize, store: {
    users, posts, comments
    } };