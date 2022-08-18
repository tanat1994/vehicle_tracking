import { Request, Response, NextFunction } from 'express';
import { CurrentLocation } from '../../entities';
import { getDataSource } from '../../services/database-connection';
import { successResponse, errorResponse } from '../../utils/response';

export const recordLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const AppDataSource = await getDataSource();
        const { lat, long, vehicleId } = req.body;
        const currentLocationRepository = await AppDataSource.getRepository(CurrentLocation);
        const newCurrentLocation = new CurrentLocation();
        newCurrentLocation.lat = lat;
        newCurrentLocation.long = long;
        newCurrentLocation.vehicleId = vehicleId;
        await currentLocationRepository.save(newCurrentLocation);
        return res.status(200).json(successResponse(true, "location saved"));
    } catch (e: any) {
        return res.status(500).json(errorResponse(false, e.message));
    }
        
}