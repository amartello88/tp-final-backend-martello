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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProducts = void 0;
var product_model_1 = require("../models/product.model");
var mongoose_1 = __importDefault(require("mongoose"));
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_1, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, product_model_1.Product.find().sort({ _id: -1 })];
            case 1:
                products = _a.sent();
                res.json({ success: true, data: products });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                err = error_1;
                res.status(500).json({ success: false, error: err.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, name_1, price, stock, category, description, createdProduct, error_2, prueba, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                body = req.body;
                name_1 = body.name, price = body.price, stock = body.stock, category = body.category, description = body.description;
                // zod / joi / yup validaciones
                if (!name_1) {
                    return [2 /*return*/, res.status(400).json({ success: false, error: "Data invalida, vuelve a intentarlo" })];
                }
                return [4 /*yield*/, product_model_1.Product.create({ name: name_1, price: price, stock: stock, category: category, description: description })];
            case 1:
                createdProduct = _a.sent();
                res.status(201).json({ success: true, data: createdProduct });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                prueba = 1;
                err = error_2;
                res.status(500).json({ success: false, error: err.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updates, updatedProduct, error_3, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                updates = req.body;
                return [4 /*yield*/, product_model_1.Product.findByIdAndUpdate(id, updates, { new: true })];
            case 1:
                updatedProduct = _a.sent();
                if (!updatedProduct) {
                    return [2 /*return*/, res.status(404).json({ success: false, error: "no existe el producto para actualizar" })];
                }
                res.json({ success: true, data: updatedProduct });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                err = error_3;
                res.status(500).json({ success: false, error: err.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProduct = updateProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedProduct, error_4, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                    return [2 /*return*/, res.status(400).json({
                            success: false,
                            error: "ID incorrecto, ingresa un valor válido"
                        })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, product_model_1.Product.findByIdAndDelete(id)];
            case 2:
                deletedProduct = _a.sent();
                if (!deletedProduct) {
                    return [2 /*return*/, res.status(404).json({ success: false, error: "no existe el producto para borrar" })];
                }
                res.json({ success: true, data: deletedProduct });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                err = error_4;
                res.status(500).json({ success: false, error: err.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
