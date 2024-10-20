// src/mocks/handlers.js
import { http } from 'msw'
 
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/todos/1', () => {
    console.log('Captured a "GET /posts" request')
  }),
  http.post('/posts', () => {
    console.log('Captured a "POST /posts" request')
  }),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
]