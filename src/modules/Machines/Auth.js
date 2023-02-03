"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, _, next) => {
    console.info('API', req.protocol + '://' + req.get('host') + req.originalUrl);
    console.log('Params', JSON.stringify(req.params));
    console.log('Body', JSON.stringify(req.body));
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=Auth.js.map