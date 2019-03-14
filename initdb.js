const db = require('./models/db.js')
require('./models/user.js')

/**
 * Initialize the database by creating tables which match all models
 * @function init
 */
async function init() {
    await db.sync({force: true})
}

init()
