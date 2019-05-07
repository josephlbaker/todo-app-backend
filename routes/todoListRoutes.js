// 'use strict';
// module.exports = function (app) {
//   var todoList = require('../controllers/todoListController');

//   // todoList Routes
//   app.route('/tasks')
//     .get(todoList.list_all_tasks)
//     .post(todoList.create_a_task);


//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
// };

const express = require("express");
// const jwt = require('jsonwebtoken');
const router = express.Router();
const todoController = require('../controllers/todoListController');

router.get('/', todoController.list_all_tasks);
router.get('/:taskId', todoController.read_a_task);
router.post('/createtask', todoController.create_a_task);
router.delete('/deletetask', todoController.delete_a_task);
router.put('/:id/updatetask', todoController.update_a_task);

module.exports = router;
