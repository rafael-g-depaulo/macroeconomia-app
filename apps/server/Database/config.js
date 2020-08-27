import dotenv from "dotenv"
dotenv.config()

const databaseUrl = process.env.DATABASE_URL ?? ""
const dbUriRegex = /^(?<client>postgres):\/\/(?<username>\w+):(?<password>\w+)@(?<host>.+):(?<port>\d+)\/(?<database>\w+)$/
const result = dbUriRegex.exec(databaseUrl)

const {
  client   = process.env.DB_CLIENT ?? "postgres",
  host     = process.env.DB_HOST   ?? "localhost",
  username = process.env.DB_USER   ?? "user",
  password = process.env.DB_PASS   ?? "PASSWORD_HERE",
  port     = process.env.DB_PORT   ?? 5432,
  database = process.env.DB_NAME   ?? "test",
} = result?.groups ?? {}

const config = {
  dialect: client,
  host,
  port,
  username,
  password,
  database,
  define: {
    timestamps: true,
    underscored: true,
  },
}

export const development = config
export const local = config
export const test = config
export const production = config

export default config
