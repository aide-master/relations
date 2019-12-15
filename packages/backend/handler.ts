import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'

export { search } from './controllers/search'
export { test } from './controllers/test'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  await 1
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    }, null, 2)
  }
}
