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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const operations_1 = require("../utils/operations");
const sharp_1 = require("../utils/sharp");
const helpers_1 = require("../utils/helpers");
const imagesRouter = (0, express_1.Router)();
imagesRouter.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield (0, operations_1.listImages)();
    const { filename = '' } = req.query;
    const { width = NaN, height = NaN } = req.query;
    // IF image not found
    if (filename && !images.includes(filename + '.jpg')) {
        return res.status(404).render('img-404');
    }
    // IF image found & width or height are provided
    if (images.includes(filename + '.jpg') && (width || height)) {
        if ((width && !(+width > 0)) || (height && !(+height > 0)))
            return res
                .status(422)
                .send('<strong style="font-family: sans-serif; text-align: center">Invalid Params, width & height must be positive number</strong>');
        const thumbnailName = (0, helpers_1.generateFileName)(filename, width, height);
        if (!(0, operations_1.thumbnailExists)(thumbnailName)) {
            yield (0, sharp_1.resizeImage)(filename, thumbnailName, width, height);
            return res.status(201).sendFile((0, operations_1.getImagePath)(thumbnailName, 'jpg', true));
        }
        return res.sendFile((0, operations_1.getImagePath)(thumbnailName, 'jpg', true));
    }
    // IF Image found & width and height are not provided.
    if (images.includes(filename + '.jpg')) {
        return res.sendFile((0, operations_1.getImagePath)(filename));
    }
    // File Name not provided -> Display available images
    res.render('images', { images, trimExtension: helpers_1.trimExtension, url: req.originalUrl });
}));
exports.default = imagesRouter;
