"use strict";

/**
 * expense controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::expense.expense", {
    count(ctx) {
        var { query } = ctx.request;
        return strapi.query("api::expense.expense").count({ where: query });
    }
});
