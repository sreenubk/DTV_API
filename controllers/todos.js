
const todos = [
    {id:1, text:'Hello Wordl'},
    {id:2, text:'Real World'},
    {id:2, text: 'My Wolrd'},
    {id:3, text: 'Our World'},
    {id:4, text: 'Mid World'},
    {id:5, text: 'Nice World'}
]
// @desc  Get all TODOS
// @route PUT /api/v1/todos
// @access PUBLIC
exports.getTodos = (req, res,next) =>{
    res.status(200).json({success: true, data: todos});
}
// @desc  Get a TODO
// @route GET /api/v1/todos/:id
// @access PUBLIC
exports.getTodo = (req, res,next) =>{
    res.status(200).json({success: true, data: `Getting Message ID : ${req.params.id}`});
}
// @desc  Create TODO
// @route POST /api/v1/todos
// @access PUBLIC
exports.createTodo = (req, res,next) =>{
    res.status(200).json({success: true, data: `Creating A todo : `, middle: req.hello });
}
// @desc  Update  TODO
// @route PUT /api/v1/todos/:id
// @access PUBLIC
exports.updateTodo = (req, res,next) =>{
    res.status(200).json({success: true, data: `Saving Message ID: ${req.params.id}`});
}
// @desc  Delete  TODO
// @route DELETE /api/v1/todos/:id
// @access PUBLIC
exports.deleteTodo = (req, res,next) =>{
    res.status(200).json({success: true, data: `Deleting message IF: ${req.params.id}`});
}