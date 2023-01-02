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
exports.removeFile = exports.alreadyExis = exports.existedThummbnail = exports.ImgDir = exports.allImg = void 0;
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const imagesPath = path_1.default.join(__dirname, '..', 'images');
const thumbnailPath = path_1.default.join(__dirname, '..', 'images', 'thumbnails');
const allImg = () => __awaiter(void 0, void 0, void 0, function* () {
    const imagesPath = path_1.default.join(__dirname, '..', 'images');
    try {
        const files = yield (0, promises_1.readdir)(imagesPath, { withFileTypes: true });
        const images = files.filter((file) => !file.isDirectory());
        const imagesName = [];
        for (const image of images) {
            imagesName.push(image.name);
        }
        return imagesName;
    }
    catch (error) {
        console.error(error);
        return [];
    }
});
exports.allImg = allImg;
const ImgDir = (imageName, extension = 'jpg', thumbnail = false) => {
    const imgPath = thumbnail ? thumbnailPath : imagesPath;
    return path_1.default.join(imgPath, `${imageName}.${extension}`);
};
exports.ImgDir = ImgDir;
const existedThummbnail = (imageName, extension = 'jpg') => {
    const filePath = path_1.default.join(thumbnailPath, `${imageName}.${extension}`);
    return (0, fs_1.existsSync)(filePath);
};
exports.existedThummbnail = existedThummbnail;
const alreadyExis = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(0, fs_1.existsSync)(path))
            yield (0, promises_1.mkdir)(path);
    }
    catch (error) {
        console.log(error);
    }
});
exports.alreadyExis = alreadyExis;
const removeFile = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, promises_1.unlink)(path);
    }
    catch (error) {
        return false;
    }
    return true;
});
exports.removeFile = removeFile;
