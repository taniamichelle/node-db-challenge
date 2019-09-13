exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 155).notNullable();
            tbl.text('description');
            tbl.boolean('completed').defaultTo('false');
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_name', 155).notNullable();
            tbl.text('description', 255).notNullable();
            tbl.text('notes');
            tbl.boolean('completed').defaultTo('false');
            tbl.integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        // .createTable('projects-task', tbl => {
        //     tbl.increments();
        //     tbl.integer('project_id')
        //         .unsigned()
        //         .references('id')
        //         .inTable('projects')
        //         .onDelete('RESTRICT')
        //         .onUpdate('CASCADE');
        //     tbl.integer('task_id')
        //         .unsigned()
        //         .references('id')
        //         .inTable('tasks')
        //         .onDelete('RESTRICT')
        //         .onUpdate('CASCADE');
        // })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 180).unique().notNullable();
            tbl.text('description');
        })
        .createTable('projects-resources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects-resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
