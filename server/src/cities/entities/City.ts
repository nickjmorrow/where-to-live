import { PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm';

@Entity({ schema: 'wtl', name: 'cities_v2' })
export class City {
	@PrimaryGeneratedColumn({ name: 'city_id' })
	cityId!: number;

	@Column({ name: 'city_name' })
	name!: string;

	@Column({ name: 'population' })
	population!: number;

	@Column({ name: 'quality_of_life_index' })
	qualityOfLifeIndex!: number;

	@Column({ name: 'purchasing_power_index' })
	purchasingPowerIndex!: number;

	@Column({ name: 'safety_index' })
	safetyIndex!: number;

	@Column({ name: 'health_care_index' })
	healthCareIndex!: number;

	@Column({ name: 'cost_of_living_index' })
	costOfLivingIndex!: number;

	@Column({ name: 'property_price_to_income_ratio' })
	propertyPriceToIncomeRatio!: number;

	@Column({ name: 'traffic_commute_time_index' })
	trafficCommuteTimeIndex!: number;

	@Column({ name: 'pollution_index' })
	pollutionIndex!: number;

	@Column({ name: 'climate_index' })
	climateIndex!: number;
}
