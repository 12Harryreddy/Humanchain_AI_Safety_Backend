"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteIncident = exports.createIncident = exports.getIncidentById = exports.getAllIncidents = void 0;
const IncidentService = __importStar(require("../services/incident.service"));
const validation_1 = require("../utils/validation");
const getAllIncidents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const incidents = yield IncidentService.getAll();
        res.json(incidents);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllIncidents = getAllIncidents;
const getIncidentById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const incident = yield IncidentService.getById(id);
        if (!incident) {
            res.status(404).json({ message: 'Incident not found' });
            return;
        }
        res.json(incident);
    }
    catch (err) {
        next(err);
    }
});
exports.getIncidentById = getIncidentById;
const createIncident = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = (0, validation_1.validateIncidentInput)(req.body);
        if (error) {
            res.status(400).json({ message: error });
            return;
        }
        const newIncident = yield IncidentService.create(req.body);
        res.status(201).json(newIncident);
    }
    catch (err) {
        next(err);
    }
});
exports.createIncident = createIncident;
const deleteIncident = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const deleted = yield IncidentService.deleteById(id);
        if (!deleted) {
            res.status(404).json({ message: 'Incident not found' });
            return;
        }
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
});
exports.deleteIncident = deleteIncident;
