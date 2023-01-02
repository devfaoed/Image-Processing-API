"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFileName = exports.trimExtension = void 0;
const trimExtension = (file) => file.substring(0, file.lastIndexOf('.')) || file;
exports.trimExtension = trimExtension;
const generateFileName = (name, width, height) => {
    let thumbnailName = name;
    if (width) {
        thumbnailName += `_w${width}`;
    }
    if (height) {
        thumbnailName += `_h${height}`;
    }
    return thumbnailName;
};
exports.generateFileName = generateFileName;
