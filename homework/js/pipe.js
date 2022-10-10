function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
const pipe = (value, ...funcs) => {
		try{
			for (let i = 0; i < funcs.length; i++){
				if (isFunction(funcs[i])){
					value = funcs[i](value)
				} else {
					throw new SyntaxError('Provided argument at position 2 is not a function!');
				}
			}
			return value;
		} catch(e){
			return e.message;
		}
};
const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error);

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result);