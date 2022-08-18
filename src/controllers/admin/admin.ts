import { Request, Response, NextFunction } from 'express';
import { Between } from 'typeorm';
import { CurrentLocation, VehicleEntity } from '../../entities';
import { getDataSource } from '../../services/database-connection';
import { successResponse, errorResponse } from '../../utils/response';

export const vehiclesList = async (req: Request, res: Response, next: NextFunction) => {
    // list all vehicle positions
    try {
        const AppDataSource = await getDataSource();
        const vehicles = await AppDataSource.getRepository(VehicleEntity)
            .createQueryBuilder("vehicles")
            .orderBy('registered_at', 'DESC')
            .getMany();
        if (vehicles) {
            return res.status(200).json(successResponse(true, 'record founded', vehicles));
        }
        return res.status(200).json(successResponse(false, 'record does not exists'));
    } catch (e: any) {
        return res.status(500).json(errorResponse(false, e.message));
    }
}

export const vehicleLocation = async (req: Request, res: Response, next: NextFunction) => {
    // display journey in the table
    try {
        const { vehicleId, startTime, endTime } = req.body;
        const AppDataSource = await getDataSource();
        const location = await AppDataSource.getRepository(CurrentLocation);
        const vehicleLocation = await location.find({
            where: {
                vehicleId,
                created_at: Between(startTime, endTime),
            },
            order: {
                created_at: "DESC",
            }
        });
        if (vehicleLocation) {
            return res.status(200).json(successResponse(true, 'record founded', vehicleLocation));   
        } else {
            return res.status(200).json(successResponse(false, 'record does not exists'));   
        }
    } catch (e: any) {
        return res.status(500).json(errorResponse(false, e.message));
    }
}

