 // strapi-api/config/database.js
 module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-34-193-114-71.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dao6cirb38ciib"),
        username: env("DATABASE_USERNAME", "gzkfybfwinypkc"),
        password: env("DATABASE_PASSWORD", "2e6f3053e3f5dcf9146930239ec5a4ab5d49c44c94cb54132c662c6de5fc0ee3"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});