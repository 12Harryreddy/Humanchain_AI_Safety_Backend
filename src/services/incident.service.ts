import prisma from '../utils/prismaClient';

export const getAll = async () => {
  return await prisma.incident.findMany();
};

export const getById = async (id: number) => {
  return await prisma.incident.findUnique({ where: { id } });
};

export const create = async (data: { title: string; description: string; severity: string }) => {
  return await prisma.incident.create({ data });
};

export const deleteById = async (id: number) => {
  const incident = await prisma.incident.findUnique({ where: { id } });
  if (!incident) return null;
  await prisma.incident.delete({ where: { id } });
  return true;
};
