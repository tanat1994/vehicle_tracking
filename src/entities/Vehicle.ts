import { BaseEntity, Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { DeviceEntity } from './';
@Entity({ 
    name: 'vehicle' 
})
export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'vehicle_id', type: "varchar", length: 36, unique: true, nullable: false })
    vehicleId: string;

    @Column({ name: 'model', length: 100, nullable: false })
    model: string;

    @Column({ name: 'serial_number', type: "varchar", length: 50, unique: true, nullable: false })
    serialNumber: string;

    @Column({ name: 'type', nullable: false})
    type: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    registered_at: Date;

    @OneToOne(() => DeviceEntity, (device) => device.vehicle, { cascade: true })
    @JoinColumn()
    device: DeviceEntity;
}