"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const router = express_1.default.Router();
const Machines_1 = (0, tslib_1.__importDefault)(require("../modules/Machines"));
router.use('/machines', Machines_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map