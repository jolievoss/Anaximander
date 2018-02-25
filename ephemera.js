function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randSign() {
  let r = Math.round(Math.random());
  if (r == 0) r = -1;
  return r;
}

let startEph = function() {
	let n = $(".eph").length;
	let windowW = $("#middle").width()/2;
	let ratio = windowW/$(".eph").eq(0).width();
	let left, height;
	if ($(window).width()<650) {
		left = 200;
		height = 150;
	} else {
		left = $(".eph").eq(0).width()*ratio;
		height = $(".eph").eq(0).height()*ratio;
	}
	let top = 0;
	let rMin = 25, rMax = 50;
	for (let i=0; i<n; ++i) {
		let tile = $(".eph").eq(i);
		tile.animate({"width": left, "height": height, "margin-top": top+rand(rMin,rMax)*randSign()},
			{ duration: 250, queue: false })
		if (i % 2 == 1) {
			tile.animate({"width": left, "height": height, "margin-left": left+rand(rMin,rMax)*randSign()},
				{ duration: 250, queue: false })
			top = top + height*ratio;
		}
		$("#middle").css("height",top);
	}
}

let closeEph = function() {
	let n = $(".eph").length;
	let windowW = $("#middle").width()/2;
	let ratio = windowW/$(".eph").eq(0).width();
	let width = $(".eph").eq(0).width()*ratio;
	let height = $(".eph").eq(0).height()*ratio;
	let top = 0;
	let left = 0;
	for (let i=0; i<n; ++i) {
		let tile = $(".eph").eq(i);
		tile.animate({"width": 200, "height": 150, "margin-top": top, "margin-left": left},{ duration: 250, queue: false })
		top += 5;
		left += 5;
	}
}


$(closeEph)
$(window).resize(closeEph);
$("#middle").on("mouseenter",startEph)
$("#middle").on("mouseleave",closeEph)
// $("#middle").on("hover",startEph)