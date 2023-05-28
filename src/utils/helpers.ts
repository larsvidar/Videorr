export function capitalize(str?: string) {
	if (typeof str !== 'string') return '';
	const upperCaseString = str.charAt(0).toUpperCase() + str.slice(1);
	return upperCaseString;
}