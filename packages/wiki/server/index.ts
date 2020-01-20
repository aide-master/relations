
import express from 'express'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'

import nextI18next from '../utils/i18n'

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  await (nextI18next as any).initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', async (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})().catch(console.error)
