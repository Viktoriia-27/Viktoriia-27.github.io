// кошик***************
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");
for ( let i = 0; i < addToCartButtons.length; i++ ) {
	addToCartButtons[i].addEventListener("click", function() {
		let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
	})
}

// ***************
// (не вийшло додати лайк, не зовсім вірно реалізований html)
// let likeButtons = document.querySelectorAll(".wish");
// for ( let i = 0; i < likeButtons.length; i++) {
// 	likeButtons[i].addEventListener("click", function(){
// 		if(this.classList.contains("liked")) {
// 			this.classList.remove("liked")
// 		} else { 

// 			this.classList.add("liked")
// 		}
// 	})
// }

// slider**********************************************************
$(".slider-block").slick({

})

// modal *****************

let moreDetailsButtons = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal"); 
let closeBtn = document.querySelector(".btn-close");

moreDetailsButtons.forEach(function(btn){
	btn.addEventListener("click", function(){
		modal.classList.add("show")
		modal.classList.remove("hide")
	})
})

function closeModal() {
	modal.classList.add("hide")
	modal.classList.remove("show")
}
closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e){
	if(e.target === modal) {
		closeModal()
	}

})
















