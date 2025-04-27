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
exports.deleteById = exports.create = exports.getById = exports.getAll = void 0;
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.incident.findMany();
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.incident.findUnique({ where: { id } });
});
exports.getById = getById;
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.incident.create({ data });
});
exports.create = create;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const incident = yield prismaClient_1.default.incident.findUnique({ where: { id } });
    if (!incident)
        return null;
    yield prismaClient_1.default.incident.delete({ where: { id } });
    return true;
});
exports.deleteById = deleteById;
