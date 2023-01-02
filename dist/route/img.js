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
const opearations_1 = require("../utils/opearations");
const sharp_1 = require("../utils/sharp");
const helper_1 = require("../utils/helper");
const Imgroutes = (0, express_1.Router)();
Imgroutes.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield (0, opearations_1.allImg)();
    const { filename = '' } = req.query;
    const { width = NaN, height = NaN } = req.query;
    if (filename && !images.includes(filename + '.jpg')) {
        return res.status(404).render('error_404');
    }
    if (images.includes(filename + '.jpg') && (width || height)) {
        if ((width && !(+width > 0)) || (height && !(+height > 0)))
            return res
                .status(422)
                .send('<strong style="font-family: sans-serif; text-align: center">Invalid Params, width & height must be positive number</strong>');
        const thumbnailName = (0, helper_1.generateFileName)(filename, width, height);
        if (!(0, opearations_1.existedThummbnail)(thumbnailName)) {
            yield (0, sharp_1.resizeImage)(filename, thumbnailName, width, height);
            return res.status(201).sendFile((0, opearations_1.ImgDir)(thumbnailName, 'jpg', true));
        }
        return res.sendFile((0, opearations_1.ImgDir)(thumbnailName, 'jpg', true));
    }
    if (images.includes(filename + '.jpg')) {
        return res.sendFile((0, opearations_1.ImgDir)(filename));
    }
    res.render('images', { images, trimExtension: helper_1.trimExtension });
}));
exports.default = Imgroutes;
