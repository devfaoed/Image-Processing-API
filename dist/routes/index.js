"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_1 = __importDefault(require("./img"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('index');
});
// Images Router
router.use('/', img_1.default);
//404 Page not found
router.use((req, res) => res.status(404).render('error_404'));
// 500 Server Errors Handlers
router.use((error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    console.log(error);
    res.status(500).render('error_500');
});
exports.default = router;
