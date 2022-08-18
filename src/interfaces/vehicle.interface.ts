export interface IVehicle {
    vehicleId: string;
    deviceId: string;
    model: string;
    type: number;
    serialNumber: string;
}

export interface IVehicleRegister extends Omit<IVehicle, 'vehicleId' | 'deviceId'> { 
    chipSerialCode: string 
};