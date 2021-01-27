const db = require("../base-init");
const _ = require("lodash");

async function getAll() {
    const query = `SELECT * FROM department`;
    return await db.query(query, []);
}

async function getById(id) {
    const query = `SELECT * FROM department WHERE id = ?`;
    const rows = await db.query(query, [id]);
    if (rows.length > 0) {
        return rows[0];
    }
    return null;
}

async function createRecord(info) {
    const fields = ["name", "shortName"];
    const data = _.pick(info, fields);
    const query = `INSERT INTO department SET ?`;
    await db.query(query, [data]);
}

async function updateRecord(id, info) {
    const fields = ["name", "shortName"];
    const data = _.pick(info, fields);
    const query = `UPDATE department SET ? WHERE id = ?`;
    await db.query(query, [data, id]);
}

async function deleteRecord(id) {
    const query = `DELETE FROM department WHERE id = ?`;
    await db.query(query, [id]);
}

module.exports = {
    getAll,
    getById,
    createRecord,
    updateRecord,
    deleteRecord,
};
