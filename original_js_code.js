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




// localStorage.clear();
function viewResults() {

	if (localStorage.length > 0){
		let firstPageVisitsCount = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
		let secondPageVisitsCount = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
		let thirdPageVisitsCount = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};

		let ul = document.createElement("ul");
		ul.setAttribute("id","ul")

		let li1 = document.createElement("li");
		li1.setAttribute("id","li1")
		let li2 = document.createElement("li");
		li2.setAttribute("id","li2")
		let li3 = document.createElement("li");
		li3.setAttribute("id","li3")

		let li1Text = document.createTextNode(`You have visited Page 1 ${firstPageVisitsCount.counter} time(s)`);
		let li2Text = document.createTextNode(`You have visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
		let li3Text = document.createTextNode(`You have visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);

		// console.log(document.getElementById("ul"));

		if (document.getElementById("ul") === null){ 		// ???????????????? ?????????????? ???? ??????????. ???????? ???????? ???????????????????? ???????????????????? ???????????????????? ???? ???????????? ?? ?????????????????? ????, ???????????????????? ???? ?????? ???
			console.log("???????????? ????")
			li1.append(li1Text);
			li2.append(li2Text);
			li3.append(li3Text);
			ul.append(li1,li2,li3);
			document.body.append(ul);
			localStorage.clear()
		} else {
			console.log("?????? ?? ?????????????? ??????")

			let li1 = document.getElementById('li1')
			let li2 = document.getElementById('li2')
			let li3 = document.getElementById('li3')

			let firstPageVisitsCount = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
			let secondPageVisitsCount = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
			let thirdPageVisitsCount = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};

			li1.innerHTML =`You have visited Page 1 ${firstPageVisitsCount.counter} time(s)`;
			li2.innerHTML =`You have visited Page 2 ${secondPageVisitsCount.counter} time(s)`;
			li3.innerHTML =`You have visited Page 3 ${thirdPageVisitsCount.counter} time(s)`;
			
			localStorage.clear()


			// let innerHtmlCounter1 = "" + firstPageVisitsCount.counter;
			// let innerHtmlCounter2 = "" + secondPageVisitsCount.counter;
			// let innerHtmlCounter3 = "" + thirdPageVisitsCount.counter;

			// li1.innerHTML ="You visited Page 1 " + innerHtmlCounter1 + " time(s)";
			// li2.innerHTML ="You visited Page 2 " + innerHtmlCounter2 + " time(s)";
			// li3.innerHTML ="You visited Page 3 " + innerHtmlCounter3 + " time(s)";
		}
		
	} else {
		console.log("?????? ?? ?????????????? ?????????????????? ??????");

		// let ul = document.querySelector("#ul")

		let li1 = document.getElementById('li1')
		let li2 = document.getElementById('li2')
		let li3 = document.getElementById('li3')

		console.log(li1)
		console.log(li2)
		console.log(li3)
		if (li1 === null || li2 === null || li3 === null){
			let ul = document.createElement("ul");
			ul.setAttribute("id","ul")

			let li1 = document.createElement("li");
			li1.setAttribute("id","li1")
			let li2 = document.createElement("li");
			li2.setAttribute("id","li2")
			let li3 = document.createElement("li");
			li3.setAttribute("id","li3")

			li1.innerHTML ='You have visited Page 1 0 times';
			li2.innerHTML ='You have visited Page 2 0 times';
			li3.innerHTML ='You have visited Page 3 0 times';

			ul.append(li1,li2,li3);
			document.body.append(ul);
			localStorage.clear()
			return
		};

		li1.innerHTML ='You have visited Page 1 0 times';
		li2.innerHTML ='You have visited Page 2 0 times';
		li3.innerHTML ='You have visited Page 3 0 times';

		// ul.remove();
		// let firstPageVisitsCount = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
		// let secondPageVisitsCount = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
		// let thirdPageVisitsCount = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};

		// let ul = document.createElement("ul");

		// let li1 = document.createElement("li");
		// let li2 = document.createElement("li");
		// let li3 = document.createElement("li");


		// let li4Text = document.createTextNode(`You visited Page 1 0 time(s)`);
		// let li5Text = document.createTextNode(`You visited Page 2 0 time(s)`);
		// let li6Text = document.createTextNode(`You visited Page 3 0 time(s)`);

		// li1.replaceWith(li4Text)
		// li2.replaceWith(li5Text)
		// li3.replaceWith(li6Text)


		// ul.append(li1,li2,li3);
	}
	
	// console.log(document.body.contains(ul));

	

	// localStorage.clear();

	// if (firstPageVisitsCount.counter === 0 && secondPageVisitsCount.counter === 0 && thirdPageVisitsCount.counter === 0){
	// 	console.log("V")
	// 	ul.remove()
	// } else {
		

	// li1.append(li1Text);
	// li2.append(li2Text);
	// li3.append(li3Text);
	// ul.append(li1,li2,li3);
	// document.body.append(ul);
	// localStorage.clear();
	// }

	

	// let ul2 = document.createElement("ul");

	// let li4 = document.createElement("li");
	// let li5 = document.createElement("li");
	// let li6 = document.createElement("li");

	// let li4Text = document.createTextNode(`???? ????2`);
	// let li5Text = document.createTextNode(`You visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
	// let li6Text = document.createTextNode(`You visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);

	// li4.append(li4Text);
	// li5.append(li5Text);
	// li6.append(li6Text);
	// ul2.append(li4,li5,li6);
	// // document.body.append(ul2);

	// if (document.body.contains(ul)){
	// 	console.log(`???? ?????? ?? ?????????????? ?????? ?? ???????? ul = ${document.body.contains(ul)}`)
	// 	ul.remove()
	// 	document.body.append(ul2);
	// 	// li1.append(li1Text);
	// 	// li2.append(li2Text);
	// 	// li3.append(li3Text);
	// 	// ul.append(li1,li2,li3);
	// 	// document.body.append(ul);
	// } else if (document.body.contains(ul2)){
	// 	console.log(`???? ?????? ?? ?????????????? ?????? ?? ???????? ul2 = ${document.body.contains(ul2)}`)
	// 	ul2.replaceWith(ul);
	// }
	

	// if (firstPageVisitsCount.counter > 0 || secondPageVisitsCount.counter > 0 || thirdPageVisitsCount.counter > 0 ){
	// 	localStorage.clear();
	// 	ul.remove();
	// }
	// localStorage.clear();

	// ul.remove();

}



//       ?????????????????? ????????????????????, ???? ?????????????? ?????????????? ???? ?????? ?? ??????????????????



// function viewResults() {
// 	let firstPageVisitsCount = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
// 	let secondPageVisitsCount = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
// 	let thirdPageVisitsCount = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};

// 	let ul = document.createElement("ul");

// 	let li1 = document.createElement("li");
// 	let li2 = document.createElement("li");
// 	let li3 = document.createElement("li");

// 	let li1Text = document.createTextNode(`???? ???? 1`);
// 	let li2Text = document.createTextNode(`You visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
// 	let li3Text = document.createTextNode(`You visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);

// 	li1.append(li1Text);
// 	li2.append(li2Text);
// 	li3.append(li3Text);
// 	ul.append(li1,li2,li3);
// 	document.body.append(ul);

// 	let ul2 = document.createElement("ul");

// 	let li4 = document.createElement("li");
// 	let li5 = document.createElement("li");
// 	let li6 = document.createElement("li");

// 	let li4Text = document.createTextNode(`???? ????2`);
// 	let li5Text = document.createTextNode(`You visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
// 	let li6Text = document.createTextNode(`You visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);

// 	li4.append(li4Text);
// 	li5.append(li5Text);
// 	li6.append(li6Text);
// 	ul2.append(li4,li5,li6);
// 	// document.body.append(ul2);

// 	if (document.body.contains(ul)){
// 		console.log(`???? ?????? ?? ?????????????? ?????? ?? ???????? ul = ${document.body.contains(ul)}`)
// 		ul.remove()
// 		document.body.append(ul2);
// 		// li1.append(li1Text);
// 		// li2.append(li2Text);
// 		// li3.append(li3Text);
// 		// ul.append(li1,li2,li3);
// 		// document.body.append(ul);
// 	} else if (document.body.contains(ul2)){
// 		console.log(`???? ?????? ?? ?????????????? ?????? ?? ???????? ul2 = ${document.body.contains(ul2)}`)
// 		ul2.replaceWith(ul);
// 	}
	

	// if (firstPageVisitsCount.counter > 0 || secondPageVisitsCount.counter > 0 || thirdPageVisitsCount.counter > 0 ){
	// 	localStorage.clear();
	// 	ul.remove();
	// }
	// localStorage.clear();

	// ul.remove();

// }


//       ?????????????????? ????????????????????, ???? ?????????????? ?????????????? ???? ?????? ?? ??????????????????

// function viewResults() {

// 	let firstPageVisitsCount = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
// 	let secondPageVisitsCount = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
// 	let thirdPageVisitsCount = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};

// 	let ul = document.createElement("ul");
// 	let li1 = document.createElement("li");
// 	let li2 = document.createElement("li");
// 	let li3 = document.createElement("li");
// 	let li1Text = document.createTextNode(`You visited Page 1 ${firstPageVisitsCount.counter} time(s)`);
// 	let li2Text = document.createTextNode(`You visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
// 	let li3Text = document.createTextNode(`You visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);

// 	console.log(document.body.contains(ul))

// if (document.body.contains(ul)){
// 	ul.remove();
// 	viewResults();
// } else {
	
// 	// let li1Text = document.createTextNode(``);
// 	// let li2Text = document.createTextNode(``);
// 	// let li3Text = document.createTextNode(``);
	
// 	li1.append(li1Text);
// 	li2.append(li2Text);
// 	li3.append(li3Text);
// 	ul.append(li1,li2,li3);
// 	document.body.append(ul);
// }

// }











//							1 versiya spisky
// function viewResults() {
// 	let firstPageVisitsCount = JSON.parse(localStorage.getItem("visits-first-page")) || {counter : 0};
// 	let secondPageVisitsCount = JSON.parse(localStorage.getItem("visits-second-page")) || {counter : 0};
// 	let thirdPageVisitsCount = JSON.parse(localStorage.getItem("visits-third-page")) || {counter : 0};

// 	let ul = document.createElement("ul");
// 	let li1 = document.createElement("li");
// 	let li2 = document.createElement("li");
// 	let li3 = document.createElement("li");
// 	let li1Text = document.createTextNode(`You visited Page 1 ${firstPageVisitsCount.counter} time(s)`);
// 	let li2Text = document.createTextNode(`You visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
// 	let li3Text = document.createTextNode(`You visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);
	
// 	li1.append(li1Text);
// 	li2.append(li2Text);
// 	li3.append(li3Text);
// 	ul.append(li1,li2,li3);
// 	document.body.append(ul);

// 	localStorage.clear();
// }



























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
