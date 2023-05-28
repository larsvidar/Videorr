/***** HELPER-FUNCTIONS *****/

/**
 * Function for capitalize a string.
 *	- If passed value is not a string, it will return an empty string.
 * @param {string} value String to capitalize.
 * @returns {String} Capitalized string.
 */
export function capitalize(value?: string) {
	if (typeof value !== 'string') return '';
	const upperCaseString = value.charAt(0).toUpperCase() + value.slice(1);
	return upperCaseString;
}


/**
 * Function for checking if an object has no properties.
 *	- Also works with arrays
 *	- If passed value is not an object, it will check if the value is nullish.
 * @param value 
 * @returns 
 */
export function isEmpty(value: Record<string, unknown>) {
	if(typeof value !== 'object') return !!value;
	return !Object.keys(value).length;
}


/**
 * Function for removing undefined and nullish values from an object.
 * 	- Also works with arrays
 *	- If passed value is not an object, it will return the passed value.
 * @param {Record<string, unknown>} value Object to remove undefined and nullish values from.
 * @returns {T} Object without undefined and nullish values.
 */
export function removeEmpty<T = unknown>(value: Record<string, unknown>): T {
	if(typeof value !== 'object') return value;
	if(Array.isArray(value)) {
		return value.filter((value) => ![undefined, null, NaN, ''].includes(value)) as unknown as T;
	}

	const entries = Object.entries<any>(value)
		.filter(([, value]) => ![undefined, null, NaN, ''].includes(value));
	return Object.fromEntries(entries) as T;
}
