"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
// Instance of express App
const app = (0, express_1.default)();
// Set Views template engine
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Morgan Logger Middleware
app.use((0, morgan_1.default)('short'));
// Routes
app.use('/', routes_1.default);
// Start the Server
app.listen(4000, () => {
    console.log(`Server started at http://localhost:4000`);
});
exports.default = app;
