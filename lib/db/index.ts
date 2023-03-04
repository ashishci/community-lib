import { Pool, PoolConfig } from 'pg'

import { LoggerPartial } from '../interfaces'

export const connectDb = async (
  sql: string,
  dbConfig: PoolConfig,
  logger: LoggerPartial
) => {
  try {
    const pool = new Pool(dbConfig as PoolConfig)

    await pool.connect()
    const res = await pool.query(sql)
    logger.info(res)
    await pool.end()
  } catch (error) {
    logger.error(error)
  }
}
