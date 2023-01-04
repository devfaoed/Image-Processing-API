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
exports.resizeImage = void 0;
const promises_1 = require("fs/promises");
const sharp_1 = __importDefault(require("sharp"));
const operations_1 = require("./operations");
const path_1 = __importDefault(require("path"));
const thumbnailFolderPath = path_1.default.join(__dirname, '..', 'images', 'thumbnails');
const resizeImage = (originalImageName, thumbnailImageName, width, height, extension = 'jpg') => __awaiter(void 0, void 0, void 0, function* () {
    const imagePath = (0, operations_1.getImagePath)(originalImageName);
    const dimensions = {};
    if (width)
        dimensions.width = +width;
    if (height)
        dimensions.height = +height;
    const thumbnailPath = path_1.default.join(thumbnailFolderPath, `${thumbnailImageName}.${extension}`);
    try {
        yield (0, operations_1.makeDirIfNotExists)(thumbnailFolderPath);
        const originalImg = yield (0, promises_1.readFile)(imagePath);
        yield (0, sharp_1.default)(originalImg).resize(dimensions).toFile(thumbnailPath);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.resizeImage = resizeImage;
