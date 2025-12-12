//Implement
const observer = new IntersectionObserver((entries) => {
		//Your code goes here
		entries.forEach((entry) => {
			console.log(entry)
			if(entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
	
	});
});

//Pass this the correct elements (classes found in 00-scroll.css)
const animatedElements = document.querySelectorAll('.scroll-trigger'); 

animatedElements.forEach((e1) => observer.observe(e1));


