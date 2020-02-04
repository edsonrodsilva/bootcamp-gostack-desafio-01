const express = require("express")

const server = express()

server.use(express.json())

//middleware check project exist
function checkIdProject(req, res, next) {
  const id = req.params.id
  const project = projects.find(p => p.id == id);

  if(!project) {
    return res.status(400).json({ error: 'This is project not exist' })
  }

  return next()
}

const projects = [
  {
    id: 1,
    title: "app1",
    tasks: []
  },
  {
    id: 2,
    title: "app2",
    tasks: []
  },
  {
    id: 3,
    title: "app3",
    tasks: []
  },
  {
    id: 4,
    title: "app4",
    tasks: []
  }
]

//start app
server.get("/", (req, res) => {
  return res.send("Welcome app manager project and tasks")
})

//list all projects
server.get("/projects", (req, res) => {
  return res.json(projects)
})

//list one project
server.get('/projects/:id', checkIdProject, (req, res) => {
  const id = req.params.id  
  const project = projects.find(project => project.id == id);
  return res.json(project)
})

//create project
server.post("/projects", (req, res) => {
  const { id, title } = req.body  
  project = {
    id,
    title,
    tasks: []    
  }
  projects.push(project)
  return res.json(projects)
})

//update project
server.put("/projects/:id", checkIdProject, (req, res) => {
  const { id } = req.params
  const { title } = req.body
  const project = projects.find(project => project.id == id);
  project.title = title
  return res.json(project)
})

//delete project
server.delete("/projects/:id", checkIdProject, (req, res) => {    
    const { id } = req.params;
    projects.splice(id, 1);
    return res.send();
})

//create task
server.post("/projects/:id/task", checkIdProject, (req, res) => {
  const id = req.params.id
  const title = req.body.title
  const project = projects.find(project => project.id == id)
  project.tasks.push(title)
  return res.json(project)
})

server.listen(3000)
