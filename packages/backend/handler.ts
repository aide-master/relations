import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import session from './utils/session'
import { run } from './utils'

export { search } from './controllers/search'
export { test } from './controllers/test'
export { extract } from './controllers/extracts'

export const hello: APIGatewayProxyHandler = run(async (event, _context) => {
  await 1
  console.log('requestId: ', session.get('requestId'))
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    }, null, 2)
  }
})
