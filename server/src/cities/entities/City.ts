import { PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';

@Entity({ schema: 'wtl', name: 'cities' })
export class City {
	@PrimaryGeneratedColumn({ name: 'city_id' })
	cityId!: number;

	@Column({ name: 'name' })
	name!: string;
}
