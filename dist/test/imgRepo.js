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
const Request = (0, supertest_1.default)(index_1.default);
const opearations_1 = require("../utils/opearations");
const sharp_1 = require("../utils/sharp");
describe('Image Processing Functionalities Test', () => __awaiter(void 0, void 0, void 0, function* () {
    it('should create image thumbnail from icelandwaterfall image and save it in thumbnail folder with icelandwaterfall_test_thumbnail', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, sharp_1.resizeImage)('icelandwaterfall', 'icelandwaterfall_test_thumbnail', 400, 400);
        expect((0, opearations_1.existedThummbnail)('icelandwaterfall_test_thumbnail')).toBe(true);
    }));
    it('If Thumbnail Exists will delete it and create the thumbnail -> will return true', () => __awaiter(void 0, void 0, void 0, function* () {
        const IMAGE_NAME = 'encenadaport_w800_h600';
        if ((0, opearations_1.existedThummbnail)(IMAGE_NAME))
            yield (0, opearations_1.removeFile)((0, opearations_1.ImgDir)(IMAGE_NAME, 'jpg', true));
        yield Request.get('/images?filename=encenadaport&width=800&height=600');
        expect((0, opearations_1.existedThummbnail)(IMAGE_NAME)).toBeTruthy();
    }));
}));
describe('File System Functionalities Test', () => {
    it('should read all images in images folder and return array of images names and has fjord img', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagesArr = yield (0, opearations_1.allImg)();
        expect(imagesArr).toContain('fjord.jpg');
    }));
    it('should check if fadl.jpg in thumbnail folder and return false', () => {
        const isExist = (0, opearations_1.existedThummbnail)('fadl');
        expect(isExist).toBeFalsy();
    });
});
