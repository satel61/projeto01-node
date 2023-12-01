import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', async(request, reply)=>{
  //usar middleware globalmente para todas as rotas de outros arquivos
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
