export function add(a, b) {
	return a+b;
}

export function substract(a, b) {
	return a-b;
}

export function multiply(a, b) {
	return a*b;
}

export function divide(a, b) {
	if(b === 0) {
		throw new Error(`On ne divise pas par 0!`); 
	}
	return a/b;
}