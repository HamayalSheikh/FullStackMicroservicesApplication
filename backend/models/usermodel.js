const pool = require('../db');

// const createUser = async (email, hashedPassword) => {
//   const result = await pool.query(
//     "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
//     [email, hashedPassword]
//   );
//   return result.rows[0];
// };

const createUser = async (name, email, hashedPassword) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hashedPassword]
  );
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
};

module.exports = { createUser, getUserByEmail };
