function visitLink() {
	let firstPageVisitsCount = document.getElementById('visit-count1');
	let secondPageVisitsCount = document.getElementById('visit-count2');
	let thirdPageVisitsCount = document.getElementById('visit-count3');	
	if (firstPageVisitsCount !== null){
		let storageUpdate = JSON.parse(localStorage.getItem('visits-first-page')) || {counter : 0};
		storageUpdate.counter += 1;
		localStorage.setItem('visits-first-page' ,JSON.stringify(storageUpdate))
	} else if (secondPageVisitsCount !== null){
		let storageUpdate = JSON.parse(localStorage.getItem('visits-second-page')) || {counter : 0};
		storageUpdate.counter += 1;
		localStorage.setItem('visits-second-page' ,JSON.stringify(storageUpdate))
	} else if (thirdPageVisitsCount !== null){
		let storageUpdate = JSON.parse(localStorage.getItem('visits-third-page')) || {counter : 0};
		storageUpdate.counter += 1;
		localStorage.setItem('visits-third-page' ,JSON.stringify(storageUpdate))
	}
}
addEventListener('pageshow', visitLink());

function viewResults() {
	if (localStorage.length > 0){
		let firstPageVisitsCount = JSON.parse(localStorage.getItem('visits-first-page')) || {counter : 0};
		let secondPageVisitsCount = JSON.parse(localStorage.getItem('visits-second-page')) || {counter : 0};
		let thirdPageVisitsCount = JSON.parse(localStorage.getItem('visits-third-page')) || {counter : 0};
		let ul = document.createElement('ul');
		ul.setAttribute('id','ul')
		let li1 = document.createElement('li');
		li1.setAttribute('id','li1')
		let li2 = document.createElement('li');
		li2.setAttribute('id','li2')
		let li3 = document.createElement('li');
		li3.setAttribute('id','li3')
		let li1Text = document.createTextNode(`You have visited Page 1 ${firstPageVisitsCount.counter} time(s)`);
		let li2Text = document.createTextNode(`You have visited Page 2 ${secondPageVisitsCount.counter} time(s)`);
		let li3Text = document.createTextNode(`You have visited Page 3 ${thirdPageVisitsCount.counter} time(s)`);
		if (document.getElementById('ul') === null){ 	
			li1.append(li1Text);
			li2.append(li2Text);
			li3.append(li3Text);
			ul.append(li1,li2,li3);
			document.body.append(ul);
			localStorage.clear()
		} else {
			let li1 = document.getElementById('li1')
			let li2 = document.getElementById('li2')
			let li3 = document.getElementById('li3')
			let firstPageVisitsCount = JSON.parse(localStorage.getItem('visits-first-page')) || {counter : 0};
			let secondPageVisitsCount = JSON.parse(localStorage.getItem('visits-second-page')) || {counter : 0};
			let thirdPageVisitsCount = JSON.parse(localStorage.getItem('visits-third-page')) || {counter : 0};
			li1.innerHTML =`You have visited Page 1 ${firstPageVisitsCount.counter} time(s)`;
			li2.innerHTML =`You have visited Page 2 ${secondPageVisitsCount.counter} time(s)`;
			li3.innerHTML =`You have visited Page 3 ${thirdPageVisitsCount.counter} time(s)`;
			localStorage.clear()
		}
	} else {
		let li1 = document.getElementById('li1')
		let li2 = document.getElementById('li2')
		let li3 = document.getElementById('li3')
		if (li1 === null || li2 === null || li3 === null){
			let ul = document.createElement('ul');
			ul.setAttribute('id','ul')
			let li1 = document.createElement('li');
			li1.setAttribute('id','li1')
			let li2 = document.createElement('li');
			li2.setAttribute('id','li2')
			let li3 = document.createElement('li');
			li3.setAttribute('id','li3')
			li1.innerHTML ='You have visited Page 1 0 times';
			li2.innerHTML ='You have visited Page 2 0 times';
			li3.innerHTML ='You have visited Page 3 0 times';
			ul.append(li1,li2,li3);
			document.body.append(ul);
			localStorage.clear()
			return
		}
		li1.innerHTML ='You have visited Page 1 0 times';
		li2.innerHTML ='You have visited Page 2 0 times';
		li3.innerHTML ='You have visited Page 3 0 times';
	}
}