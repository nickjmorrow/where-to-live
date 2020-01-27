import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1554075263102 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const query = `
			CREATE SCHEMA ss;

			CREATE TABLE ss.database_settings (
				setting_id VARCHAR(100) NOT NULL PRIMARY KEY
				, setting_name VARCHAR(255) NOT NULL
			);
			
			INSERT INTO ss.database_settings
			VALUES
				('appName', 'Reddit Subscriber');	
				
			CREATE TABLE ss.users (
				user_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(255) NOT NULL
				, email VARCHAR(255) NOT NULL UNIQUE
				, password VARCHAR(255) NULL
				, local_token VARCHAR(255) NULL
				, pocket_access_token VARCHAR(255) NULL
				, google_access_token VARCHAR(255) NULL
				, date_created DATE NOT NULL DEFAULT CURRENT_DATE
				, date_deleted DATE NULL
				, date_modified DATE NOT NULL DEFAULT CURRENT_DATE
			);

			INSERT INTO ss.users (name, email, password, pocket_access_token)
			SELECT 'f', 'e', 'p', '${process.env.ACCESS_TOKEN}';
				
			CREATE TABLE ss.lookbacks (
				lookback_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(100) NOT NULL
			);
						
			INSERT INTO ss.lookbacks (name)
			VALUES
				('day')
				, ('week')
				, ('month')
				, ('year')
				, ('all time');
			
			CREATE TABLE ss.cadences (
				cadence_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(100) NOT NULL
			);
			
			INSERT INTO ss.cadences (name) (
			VALUES
				('daily')
				, ('weekly')
				, ('monthly')
				, ('yearly')
			);
			
			CREATE TABLE ss.jobs (
				job_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, subreddit_name VARCHAR(255) NOT NULL
				, user_id INT NOT NULL REFERENCES ss.users(user_id)
				, cadence_id INT NOT NULL REFERENCES ss.cadences(cadence_id)
				, lookback_id INT NOT NULL REFERENCES ss.lookbacks(lookback_id)
				, num_entries INT NOT NULL
				, date_created DATE NOT NULL DEFAULT CURRENT_DATE
				, date_modified DATE NOT NULL DEFAULT CURRENT_DATE
				, date_deleted DATE NULL
				, last_run_date DATE NULL
				, next_run_date DATE NULL
			);
			
			CREATE TABLE ss.job_tags (
				subreddit_job_id INT NOT NULL REFERENCES ss.jobs(job_id)
				, tag VARCHAR(100) NOT NULL
			);
        `;

		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		const query = `
			DROP TABLE ss.job_tags;
			DROP TABLE ss.jobs;
			DROP TABLE ss.database_settings;
			DROP TABLE ss.lookbacks;
			DROP TABLE ss.cadences;
			DROP TABLE ss.users;
			DROP SCHEMA ss;
        `;
		await queryRunner.query(query);
	}
}
