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

let objectCounterFirstPage  = {
	counter : 0
}

// let objectCounterFirstPage  = [];

let objectCounterSecondPage  = {
	counter : 0
}
let objectCounterThirdPage  = {
	counter : 0
}


let firstPageVisitsCount = document.getElementById("visit-count1");
let secondPageVisitsCount = document.getElementById("visit-count2");
let thirdPageVisitsCount = document.getElementById("visit-count3");

// objectCounterFirstPage.counter += 1;
function changeObj(obj) {
	
	obj.counter += 21
	return obj
}



addEventListener('pageshow', changeObj(objectCounterFirstPage));

console.log(objectCounterFirstPage.counter)


//   Listener bazovui
// addEventListener('pageshow', (e) => {
// 	if (firstPageVisitsCount != null){
// 		// firstPageVisitsCount.innerHTML = "Vlad"
// 		objectCounterFirstPage.counter += 1;
// 		// console.log(objectCounterFirstPage.counter)
// 		// return objectCounterFirstPage.counter;
// 	}
// 	// console.log(objectCounterFirstPage.counter)
// 	// objectCounterFirstPage.counter += 1;
// 	return objectCounterFirstPage.counter;
// });


// console.log(objectCounterFirstPage);

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
