const db = require("../base-init");
const _ = require("lodash");

async function getAll() {
    const query = `SELECT * FROM employee`;
    return await db.query(query, []);
}

async function getById(id) {
    const query = `SELECT * FROM employee WHERE id = ?`;
    const rows = await db.query(query, [id]);
    if (rows.length > 0) {
        return rows[0];
    }
    return null;
}

async function createRecord(info) {
    const fields = ["fullName", "employeeId", "dob", "workDate", "status", "positionId", "salary", "avatar", "address", "departmentId"];
    const data = _.pick(info, fields);
    const query = `INSERT INTO employee SET ?`;
    await db.query(query, [data]);
}

async function updateRecord(id, info) {
    const fields = [
        "fullName",
        "employeeId",
        "dob",
        "workDate",
        "status",
        "positionId",
        "salary",
        "avatar",
        "address",
        "departmentId",
    ];
    const data = _.pick(info, fields);
    const query = `UPDATE employee SET ? WHERE id = ?`;
    await db.query(query, [data, id]);
}

async function deleteRecord(id) {
    const query = `DELETE FROM employee WHERE id = ?`;
    await db.query(query, [id]);
}

module.exports = {
    getAll,
    getById,
    createRecord,
    updateRecord,
    deleteRecord,
};
