import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { GalleryService } from './gallery.service';

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await GalleryService.getData();

  res.status(200).json({
    status: 'success',
    results: result,
  });
});

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await GalleryService.createData(req.body);

  res.status(200).json({
    status: 'success',
    results: result,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const result = await GalleryService.update(req.params.id, req.body);

  res.status(200).json({
    status: 'success',
    results: result,
  });
});

const swapSerial = catchAsync(async (req: Request, res: Response) => {
  const result = await GalleryService.swapSerial(req.body);

  res.status(200).json({
    status: 'success',
    results: result,
  });
});

export const GalleryController = {
  getData,
  createData,
  update,
  swapSerial,
};
