import 'reflect-metadata'
import express from 'express'
import * as projectController from './controllers/project'
import * as moduleController from './controllers/module'
import * as teamController from './controllers/team'
import './setup'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Batata'))

app.post('/project', projectController.create)
app.get('/project/:id', projectController.getById)

app.post('/module', moduleController.create)
app.get('/module', moduleController.getAll)
app.get('/module/:id', moduleController.getById)

app.post('/team', teamController.create)
app.get('/team', teamController.getAll)
app.get('/team/:id', teamController.getById)

export default app
