let counter =document.getElementById('counter');
let count =0;

setInterval(function(){
	if(count<100){
		count++;
		counter.innerHTML = count;
	}
},100);

let counter1 =document.getElementById('counter1');
let count1 =0;

setInterval(function(){
	if(count1<50){
		count1++;
		counter1.innerHTML = count1;
	}
},600);
let counter2 =document.getElementById('counter2');
let count2 =0;

setInterval(function(){
	if(count2<200){
		count2++;
		counter2.innerHTML = count2;
	}
},20);

$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


});
