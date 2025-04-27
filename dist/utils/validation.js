"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIncidentInput = void 0;
const allowedSeverities = ['Low', 'Medium', 'High'];
const validateIncidentInput = (data) => {
    if (!data.title || !data.description || !data.severity) {
        return { error: 'All fields (title, description, severity) are required.' };
    }
    if (!allowedSeverities.includes(data.severity)) {
        return { error: `Severity must be one of ${allowedSeverities.join(', ')}` };
    }
    return { error: null };
};
exports.validateIncidentInput = validateIncidentInput;
