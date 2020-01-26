declare module 'calendar-base' {
	export class Calendar {
		public getCalendar(
			year: number,
			month: number,
		): ({ day: number; weekDay: number; month: number; year: number } | false)[];
	}
}
