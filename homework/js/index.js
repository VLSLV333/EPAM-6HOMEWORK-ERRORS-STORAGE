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

// addEventListener('pageshow', (event) => {
// 	for (let i = 0; i < 4; i++){
// 		localStorage.setItem(`this is main page ${i}`, `count : ${i}`)
// 	}
// });

let firstPageVisitsCount = document.getElementById("visit-count1");
let secondPageVisitsCount = document.getElementById("visit-count2");
let thirdPageVisitsCount = document.getElementById("visit-count3");

// console.log(secondPageVisitsCount);
// console.log(firstPageVisitsCount);


addEventListener('pageshow', (e) => {
	if (firstPageVisitsCount != null){
		firstPageVisitsCount.innerHTML = "Vlad"
	}
});
addEventListener('pageshow', (e) => {
	if (secondPageVisitsCount != null){
		// console.log("Vlad")
		secondPageVisitsCount.innerHTML = "Vlad"
	}
	
});
addEventListener('pageshow', (e) => {
	if (thirdPageVisitsCount != null){
		thirdPageVisitsCount.innerHTML = "Vlad"
	}
});



// console.log(v)
