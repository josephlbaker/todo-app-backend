

const express = require("express");
const router = express.Router();
const todoController = require('../controllers/todoListController');

router.get('/', todoController.list_all_tasks);
router.get('/:taskId', todoController.read_a_task);
router.post('/createtask', todoController.create_a_task);
router.delete('/deletetask', todoController.delete_a_task);
router.put('/:id/updatetask', todoController.update_a_task);

module.exports = router;
