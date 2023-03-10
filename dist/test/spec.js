"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
// supertest request object
const request = (0, supertest_1.default)(index_1.default);
describe('Test Endpoint Response', () => {
    it('should return 200 status code when enter / endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.statusCode).toEqual(200);
    }));
    it('should return 404 status code when enter not exists route ex: /fadl', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/fadl');
        expect(response.statusCode).toBe(404);
    }));
    it('should resize the fjord image and create the new one returned status code should be 201', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images?filename=fjord&width=50');
        expect(response.statusCode).toBe(201);
    }));
    it('should get the fjord image from cache, returned status code should be 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images?filename=fjord&width=50');
        expect(response.statusCode).toBe(200);
    }));
    it('should return 404 status code when image not found', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images?filename=myphoto');
        expect(response.statusCode).toBe(404);
    }));
});
