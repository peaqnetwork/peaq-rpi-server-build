"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineAddress = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../../util/constants");
const responses_1 = require("../../util/responses");
const getMachineAddress = (_, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        (0, responses_1.sendResponse)(res, constants_1.RESPONSE_TYPES.SUCCESS, { address: global.machineKeyPair.address });
    }
    catch (error) {
        (0, responses_1.sendResponse)(res, constants_1.RESPONSE_TYPES.SERVER_ERROR, {}, "Server error", error);
    }
});
exports.getMachineAddress = getMachineAddress;
//# sourceMappingURL=controller.js.map