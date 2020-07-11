const title = document.querySelector(".title");
title.style.backgroundColor = "green";
title.style.color = "#fff";
title.style.textAlign = "center";


const input = document.querySelector(".input");
const inputButton = document.querySelector(".inputButton");
const namelist = document.querySelector(".namelist");

inputButton.addEventListener('click', function(){
	//create li
	const newLi = document.createElement('li');
	const liContent = document.createTextNode(input.value);

	//append child content
	newLi.appendChild(liContent);
	namelist.appendChild(newLi);
})

