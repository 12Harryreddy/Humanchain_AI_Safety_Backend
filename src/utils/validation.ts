const allowedSeverities = ['Low', 'Medium', 'High'];

export const validateIncidentInput = (data: { title: string; description: string; severity: string }) => {
  if (!data.title || !data.description || !data.severity) {
    return { error: 'All fields (title, description, severity) are required.' };
  }
  if (!allowedSeverities.includes(data.severity)) {
    return { error: `Severity must be one of ${allowedSeverities.join(', ')}` };
  }
  return { error: null };
};
