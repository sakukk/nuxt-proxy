import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'

var mock = new mockAdapter(axios)

mock.onGet('/user').reply(200,{
  users: [
    {id: 1, name: '123123'}
  ]
})
