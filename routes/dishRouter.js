const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the dishes to you!');
})

.put(function(req,res,next){
    res.end('PUT is not supported on /dishes.');
})

.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();  
})
.get((req, res, next) => {
    res.end("Will send the dish : " +req.params.dishId+ " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST is not supported on /dishes/:"+req.params.dishId);
})
.put((req, res, next) => {
    res.write("Updating the dish : "+req.params.dishId);
    res.end("Updated the dish : "+req.body.name+ "with details : "+ req.body.description);
})
.delete((req, res, next) => {
    res.end("Will delete the dish : "+ req.params.dishId);
});

module.exports = dishRouter;