import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

/**
 * The Appointment model is a "junction model". It represents the many-to-many relationship between Doctor and Patient.
 * In this app, there is data related to this relationship (the date of the appointment), so this data gets added to
 * this model as a Column.
 *
 * This model is the many side of the one-to-many relationships it has with the Doctor and Patient models.
 */

@Entity({ schema: 'ss', name: 'database_settings' })
export class DatabaseSetting {
	@PrimaryColumn({ name: 'setting_id' })
	settingId!: string;

	@Column({ name: 'setting_name' })
	settingName!: string;
}
