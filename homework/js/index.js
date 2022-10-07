function visitLink() {
	let firstPageVisitsCount = document.getElementById("visit-count1");
	let secondPageVisitsCount = document.getElementById("visit-count2");
	let thirdPageVisitsCount = document.getElementById("visit-count3");	
	if (firstPageVisitsCount != null){
		let storageUpdate = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
		storageUpdate.counter += 1;
		localStorage.setItem("visits-first-page" ,JSON.stringify(storageUpdate))
	} else if (secondPageVisitsCount != null){
		let storageUpdate = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
		storageUpdate.counter += 1;
		localStorage.setItem("visits-second-page" ,JSON.stringify(storageUpdate))
	} else if (thirdPageVisitsCount != null){
		let storageUpdate = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};
		storageUpdate.counter += 1;
		localStorage.setItem("visits-third-page" ,JSON.stringify(storageUpdate))
	}
}
addEventListener('pageshow', visitLink());

function viewResults() {
	//your code goes here
}

// localStorage.clear();

























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

// addEventListener('pageshow', (e) => {
// 	if (secondPageVisitsCount != null){
// 		// console.log("Vlad")
// 		secondPageVisitsCount.innerHTML = "Vlad"
// 	}
	
// });
// addEventListener('pageshow', (e) => {
// 	if (thirdPageVisitsCount != null){
// 		thirdPageVisitsCount.innerHTML = "Vlad"
// 	}
// });
