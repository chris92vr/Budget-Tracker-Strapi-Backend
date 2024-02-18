'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::budget.budget',{
    count(ctx) {
        var { query } = ctx.request
        return strapi.query('api::budget.budget').count({ where: query });
    },
   
});

    
