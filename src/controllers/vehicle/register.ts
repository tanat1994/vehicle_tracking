import { Request, Response, NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { IVehicleRegister } from '../../interfaces/vehicle.interface';
import { VehicleEntity, DeviceEntity } from '../../entities';
import { getDataSource } from '../../services/database-connection';
import { successResponse, errorResponse } from '../../utils/response';

export const register = async (req: Request<{}, {}, IVehicleRegister>, res: Response, next: NextFunction) => {
    const newVehicleUuid = uuidV4();
    const { model, serialNumber, type, chipSerialCode } = req.body;
    try {
        const AppDataSource =  await getDataSource();

        const vehicleRepository = await AppDataSource.getRepository(VehicleEntity);
        const vehicleDataSource = await vehicleRepository.findOne({
            where: {
                serialNumber,
            },
        });

        const deviceRepository = await AppDataSource.getRepository(DeviceEntity);
        const deviceDataSource = await deviceRepository.findOne({
            where: {
                chipSerialCode,
            },
        });
        if (vehicleDataSource || deviceDataSource) {
            let errorSchema = vehicleDataSource ? "Vehicle.serial_number" : "Device.chip_serial_code";
            return res.status(400).json(errorResponse(false, `${errorSchema} already exists`));
        } else {
            try {
                const newVehicle = new VehicleEntity();
                newVehicle.vehicleId = newVehicleUuid;
                newVehicle.model = model;
                newVehicle.type = type;
                newVehicle.serialNumber = serialNumber;
                const newDevice = new DeviceEntity();
                newDevice.chipSerialCode = chipSerialCode;
                newVehicle.device = newDevice;        
                await vehicleRepository.save(newVehicle);
                return res.status(200).json(successResponse(true, "Register vehicle successfully"));
            } catch (e: any) {
                return res.status(500).json(errorResponse(false, e.message));
            }
        }
    } catch (e: any) {
        return res.status(500).json(errorResponse(false, e.message));
    }
}