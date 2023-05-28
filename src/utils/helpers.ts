export function capitalize(str?: string) {
	if (typeof str !== 'string') return '';
	const upperCaseString = str.charAt(0).toUpperCase() + str.slice(1);
	return upperCaseString;
}

export function isEmpty(obj: Record<string, unknown>) {
	if(typeof obj !== 'object') return !!obj;
	return !Object.keys(obj).length;
}

export function removeEmpty<T = unknown>(obj: Record<string, unknown>): T {
	if(typeof obj !== 'object') return obj;

	const entries = Object.entries<any>(obj)
		.filter(([, value]) => ![undefined, null, NaN, ''].includes(value));
	return Object.fromEntries(entries) as T;
}