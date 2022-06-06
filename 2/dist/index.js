"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('OK!!!');
    }
    else {
        res.send('Hello World!!!66!');
    }
});
app.get('/osa', (req, res) => {
    res.send('Hello OSA!!!!');
});
app.post('/osa', (req, res) => {
    res.send('you created OSA!!!!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
