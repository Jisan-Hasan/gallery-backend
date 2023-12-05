import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getData = async () => {
  const result = await prisma.images.findMany({
    orderBy: {
      serial: 'asc',
    },
  });

  return result;
};

const createData = async (data: any) => {
  const result = await prisma.images.create({
    data,
  });

  return result;
};

const update = async (id: string | number, data: any) => {
  const result = await prisma.images.update({
    where: {
      id: Number(id),
    },
    data,
  });

  return result;
};

const swapSerial = async (data: any) => {
  await prisma.$transaction(async transactionClient => {
    // find image1
    const image1 = await transactionClient.images.findUnique({
      where: {
        id: data.imageId1,
      },
    });

    // find image2
    const image2 = await transactionClient.images.findUnique({
      where: {
        id: data.imageId2,
      },
    });

    if (!image1 || !image2) {
      throw new ApiError(404, 'Image not found');
    }

    // store serial of image1 & image2
    const serial1 = image1?.serial;
    const serial2 = image2?.serial;

    // update image1
    await transactionClient.images.update({
      where: {
        id: data.imageId1,
      },
      data: {
        serial: serial2,
      },
    });

    // update image2
    await transactionClient.images.update({
      where: {
        id: data.imageId2,
      },
      data: {
        serial: serial1,
      },
    });
  });
};

export const GalleryService = {
  getData,
  createData,
  update,
  swapSerial,
};
