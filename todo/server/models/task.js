import { pool } from '../helpers/db.js'

const selectAllTasks = async () => {
 return await pool.query('SELECT * FROM task')
}

const insertTask = async (description) => {
  return await pool.query(
    "insert into tasks (description) values ($1) returning *",
    [description]
  );
};

const deleteTask = async (id) => {
  return await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id])
}

export { selectAllTasks, insertTask, deleteTask };