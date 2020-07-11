
const text = document.querySelector('.title');
const togg = document.querySelector(".toggle");

const butt = document.querySelector("button")

text.style.backgroundColor = "green";
text.style.color = "#fff";
text.style.textAlign = "center";

togg.classList.add("change"); 
//text.classList.remove("change");

butt.addEventListener("click", function(){
	togg.classList.toggle("change");
});


var userList = document.querySelectorAll('.name li');
for(user of userList) {
	user.addEventListener('click', function(){
		console.log(this);
	})
}



