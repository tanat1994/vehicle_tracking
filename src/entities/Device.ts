import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleEntity } from './Vehicle';
@Entity({ 
    name: 'device' 
})
export class DeviceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'chip_serial_code', type: "varchar", length: 16, nullable: false})
    chipSerialCode: string;

    @OneToOne(() => VehicleEntity, (vehicle) => vehicle.vehicleId)
    vehicle: VehicleEntity;
}