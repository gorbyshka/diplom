"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/complex-object', function (_req, res) {
    var complexObject = {
        id: 1,
        name: Math.random().toString(36).substring(7),
        price: Math.floor(Math.random() * 51)
    };
    res.json(complexObject);
});
app.listen(3001, function () {
    console.log('Server started on port 3001');
});
