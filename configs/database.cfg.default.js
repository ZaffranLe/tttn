let config = {}

config.development = {
    mysql: {
        connectionLimit: 500,
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
        database: "tttn"
    }
}

module.exports = config;