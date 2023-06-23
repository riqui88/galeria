import { pool } from "../db.js";

export const getList = async (req, res) => {
    try {
      const [result] = await pool.query("SELECT * FROM inventario");
      if (result === 0) {
        return res.status(404).json({ message: "ropa no encontrada no encontrado" });
      } else {
        res.json(result);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };