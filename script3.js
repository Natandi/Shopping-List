var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Del';
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// })

// function deleteNote(e) {
//     const parent = e.target.parentNode;
//     parent.remove();
// }

//  const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.textContent = 'Delete note';
//   btn.addEventListener("click", (e) => deleteNote(e));


// function inputLength() {
// return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value))
// 	ul.appendChild(li);
// 	input.value + "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode ==13) {
// 		createListElement();
// 	}
// }

// button.addEventListner("click", addListAfterClick);

// input.addEventListner("keypress", addListAfterKeypress);