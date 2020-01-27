interface ValueType<T> {
	type: 'value';
	value: T;
}

interface ErrorType<E extends Error> {
	type: 'error';
	error: E;
}

type ResultType<T, E extends Error> = ValueType<T> | ErrorType<E>;

export class Result<T, E extends Error> {
	constructor(public result: ResultType<T, E>) {}

	static value<T>(value: T): Result<T, any> {
		return new Result({
			type: 'value',
			value,
		});
	}

	static error<E extends Error>(error: E): Result<any, E> {
		return new Result({
			type: 'error',
			error,
		});
	}

	public unwrap(): T {
		switch (this.result.type) {
			case 'value':
				return this.result.value;
			case 'error':
				throw this.result.error;
		}
	}

	public map<S>(f: (arg: T) => S): Result<S, E> {
		switch (this.result.type) {
			case 'value':
				return new Result<S, E>({
					type: 'value',
					value: f(this.result.value),
				});
			case 'error':
				return new Result<S, E>(this.result);
		}
	}

	public valueOrDefault(d: T): T {
		switch (this.result.type) {
			case 'value':
				return this.result.value;
			case 'error':
				return d;
		}
	}
}

function randomResult(): Result<number, Error> {
	if (Math.random() > 0.5) {
		return Result.value(42);
	}
	return Result.error(new Error('bad luck'));
}

const r = randomResult()
	.map(i => i + 1)
	.valueOrDefault(77);
