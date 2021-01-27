const db = require("../base-init");
const _ = require("lodash");

async function getAll() {
    const query = `SELECT * FROM position`;
    return await db.query(query, []);
}

async function getById(id) {
    const query = `SELECT * FROM position WHERE id = ?`;
    const rows = await db.query(query, [id]);
    if (rows.length > 0) {
        return rows[0];
    }
    return null;
}

async function createRecord(info) {
    const fields = ["name"];
    const data = _.pick(info, fields);
    const query = `INSERT INTO position SET ?`;
    await db.query(query, [data]);
}

async function updateRecord(id, info) {
    const fields = ["name"];
    const data = _.pick(info, fields);
    const query = `UPDATE position SET ? WHERE id = ?`;
    await db.query(query, [data, id]);
}

async function deleteRecord(id) {
    const query = `DELETE FROM position WHERE id = ?`;
    await db.query(query, [id]);
}

module.exports = {
    getAll,
    getById,
    createRecord,
    updateRecord,
    deleteRecord,
};
