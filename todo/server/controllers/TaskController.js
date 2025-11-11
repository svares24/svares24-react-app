import { selectAllTasks, insertTask, deleteTask } from "../models/task.js";

const getTasks = async (req, res,next) => {
 try {
 const result = await selectAllTasks()
 return res.status(200).json(result.rows || [])
 } catch (error) {
 return next(error)
 }
}

const postTask = async (req, res,next) => {
 const { task } = req.body
    try {
    if (!task) {
    return res.status(400).json({ error: 'Task is required' })
    }   
    
     const result = await insertTask(task.description);
    return res
      .status(201)
      .json({ id: result.rows[0].id, description: result.rows[0].description });
    }
    catch (error) {
    return next(error);
    }
};

const delTask = async (req, res,next) => {  
    const { id } = req.params
    try {
    const result = await deleteTask(id);
    if (result.rowCount === 0) {
    const error = new Error('Task not found', 404)
        return next(error)
    }   
    return res.status(200).json({id:id})
    } catch (error) {
    return next(error)
    }
};

export { getTasks, postTask, delTask };
