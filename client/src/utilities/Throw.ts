class InvalidOperationError extends Error {
	name = 'InvalidOperationError';
	public constructor(message: string) {
		super(message);
	}
}

export class Throw {
	public static InvalidIf(condition: boolean, message: string) {
		if (condition) {
			throw new InvalidOperationError(message);
		}
	}
}
