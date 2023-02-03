"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonFunctions_1 = require("../../util/commonFunctions");
const types_1 = require("../../util/types");
const controller_1 = require("./controller");
const routes = [
    {
        path: '/getAddress',
        method: types_1.HTTP_METHODS.GET,
        handler: controller_1.getMachineAddress,
    },
];
exports.default = (0, commonFunctions_1.routesGenerator)(routes);
//# sourceMappingURL=index.js.map