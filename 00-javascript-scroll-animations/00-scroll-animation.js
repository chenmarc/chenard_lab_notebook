//Implement
const observer = new IntersectionObserver((entries) => {
		//Your code goes here
});

//Pass this the correct elements (classes found in 00-scroll.css)
const animatedElements = document.querySelectorAll(); 

animatedElements.forEach((e1) => observer.observe(e1));


