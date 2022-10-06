function visitLink(path) {
	//your code goes here
}

function viewResults() {
	//your code goes here
}

// localStorage.clear();

// let storageSupportedCheck = window.sessionStorage && window.localStorage ? "is" : "is not";
// console.log(`Storage API ${storageSupportedCheck} supported.`)

// addEventListener('pageshow', (event) => {console.log("You have visited this page!") });

addEventListener('pageshow', (event) => {
	for (let i = 0; i < 4; i++){
		localStorage.setItem(`this is main page ${i}`, `count : ${i}`)
	}
});

let v = document.querySelector(".active")
console.log(v)
