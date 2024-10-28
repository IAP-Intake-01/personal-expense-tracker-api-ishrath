import prisma from '../config/dbConfig.js';

const getExampleData = async () => {
    const data = await prisma.example.findMany();
    return data;
};

export {getExampleData};