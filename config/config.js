//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://dhzkiisi:knk1Hd_8vMz-yak5A8rXwW0FbP6NypY5@babar.db.elephantsql.com/dhzkiisi',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
