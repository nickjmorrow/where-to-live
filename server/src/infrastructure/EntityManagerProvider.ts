import { getConnection, EntityManager } from 'typeorm';
import { injectable } from 'tsyringe';

@injectable()
export class EntityManagerProvider {
	public async getEntityManager(): Promise<EntityManager> {
		return getConnection().manager;
	}
}
