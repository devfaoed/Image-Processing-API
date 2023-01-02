"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
// routes importation
const route_1 = __importDefault(require("./route"));
// setting up middleware
app.use((0, morgan_1.default)('short'));
app.use('/', route_1.default);
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(4000, () => {
    console.log(`Server started at http://localhost:4000`);
});
exports.default = app;
