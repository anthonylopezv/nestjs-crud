"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_schema_1 = require("./schemas/task.schema");
exports.TasksProviders = [
    {
        provide: 'TaskModelToken',
        useFactory: (connection) => connection.model('Contact', task_schema_1.TaskSchema),
        inject: ['DbConnectionToken']
    }
];
//# sourceMappingURL=tasks.providers.js.map