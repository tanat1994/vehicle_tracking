import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { VehicleEntity } from './Vehicle';
@Entity({ 
    name: 'current_location' 
})
export class CurrentLocation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lat', type: "decimal", precision: 10, scale: 5, nullable: false, default: 0 })
    lat: string;

    @Column({ name: 'long', type: "decimal", precision: 10, scale: 5, nullable: false, default: 0 })
    long: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @Column({ name: 'vehicleId' })
    vehicleId: number;
}