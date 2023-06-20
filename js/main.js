/*===== Resize Navbar on Scroll =====*/
var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
window.onscroll = () =>{
this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}