import { PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';

@Entity({ schema: 'wtl', name: 'cities' })
export class City {
	@PrimaryGeneratedColumn({ name: 'city_id' })
	cityId!: number;

	@Column({ name: 'name' })
	name!: string;

	@Column({ name: 'population' })
	population!: number;

	@Column({ name: 'cost_of_living' })
	costOfLiving!: number;

	@Column({ name: 'tech_jobs' })
	techJobs!: number;

	@Column({ name: 'happiness' })
	happiness!: number;
}
