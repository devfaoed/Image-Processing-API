"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_1 = __importDefault(require("./img"));
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    res.render('index');
});
// Images Router
routes.use('/', img_1.default);
//404 Page not found
routes.use((req, res) => res.status(404).render('404'));
// 500 Server Errors Handlers
routes.use((error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    console.log(error);
    res.status(500).render('error_500');
});
exports.default = routes;
