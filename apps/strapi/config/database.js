module.exports = ({ env }) => {

  const databaseUrl = process.env.DABABASE_URL || ""
  const dbUriRegex = /^(?<client>postgres):\/\/(?<username>\w+):(?<password>\w+)@(?<host>.+):(?<port>\d+)\/(?<database>\w+)$/
  const result = dbUriRegex.exec(databaseUrl)
  
  const client    = result ? result.groups.client   : env('DB_CLIENT', 'postgres')
  const host      = result ? result.groups.host     : env('DB_HOST', '127.0.0.1')
  const username  = result ? result.groups.username : env('DB_USER', 'user')
  const password  = result ? result.groups.password : env('DB_PASS', 'password')
  const port      = result ? result.groups.port     : env.int('DB_PORT', 5432)
  const database  = result ? result.groups.database : env('DB_NAME', 'starter-project-strapi')
  
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client,
          host,
          port,
          database,
          username,
          password,
          ssl: env.bool('DB_SSL', false),
        },
        options: {}
      },
    },
  }
}