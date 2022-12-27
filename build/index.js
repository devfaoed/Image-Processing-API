"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = 4000;
// Start server
app_1.app.listen(PORT, function () {
    return console.log("Server started on http://localhost:4000:" + PORT);
});
//# sourceMappingURL=index.js.map