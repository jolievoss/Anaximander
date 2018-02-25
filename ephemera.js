function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randSign() {
  let r = Math.round(Math.random());
  if (r == 0) r = -1;
  return r;
}

let startEph = function() {
	if ($(window).width() >= 800) {
		let n = $(".eph").length;
		let windowW = $("#ephMain").width()/4;
		let ratio = windowW/$(".eph").eq(0).width();
		let width, height;
		let top = 0; //parseNum($("#ephMain").css("top"));
		let left = parseNum($("#ephMain").css("left"));
		if ($(window).width()<800) {
			width = 200;
			height = 150;
		} else {
			width = $(".eph").eq(0).width()*ratio;
			height = $(".eph").eq(0).height()*ratio;
		}
		let rMin = 25*ratio, rMax = 75*ratio, nCols = 4;
		for (let i=0; i<n; ++i) {
			let tile = $(".eph").eq(i);
			let topNow = top+rand(rMin,rMax)*randSign();
			if (topNow+height > $(window).height()) {
				topNow = $(window).height()-height-3;
			} else if (topNow < 0) {
				topNow = 3;

			}
			tile.animate({"width": width, "height": height, "top": topNow},
				{ duration: 250, queue: false })
			if (i % nCols == 1) {
				tile.animate({"width": width, "height": height, "left": rand(rMin,rMax)},
					{ duration: 250, queue: false })
				top = top + height*ratio/2;
			} else if (i % nCols != 0) {
					
				let leftNow = left*(i%nCols)+rand(rMin,rMax)*randSign();
				if (leftNow+width > $(window).width()) {
					leftNow = $(window).width()-width-3;
				}
				tile.animate({"width": width, "height": height, "left": leftNow},
					{ duration: 250, queue: false })
				top = top + height*ratio/2;
			}
		}
		$("#ephMain").css("height",top);
		$("body").css("height",top);
		$("#ephMain").css("width",left);
	} else {
		$(".eph").removeAttr( 'style' );
	}
}

let closeEph = function() {
	if ($(window).width() >= 800) {
		let n = $(".eph").length;
		let windowW = $("#ephMain").width()/4;
		let ratio = windowW/$(".eph").eq(0).width();
		let width = $(".eph").eq(0).width()*ratio;
		let height = $(".eph").eq(0).height()*ratio;
		let top = parseNum($("#ephMain").css("top"));
		let left = parseNum($("#ephMain").css("left"));
		for (let i=0; i<n; ++i) {
			let tile = $(".eph").eq(i);
			tile.animate({"width": 200, "height": 150, "top": top, "left": left},{ duration: 250, queue: false })
			top += rand(10,30)*randSign();
			left += rand(10,30)*randSign();
		}

		$("#ephMain").css("visibility","visible");
	} else {
		$(".eph").removeAttr( 'style' );
	}
}

$(closeEph)
$(window).resize(closeEph);
$("#ephMain").on("click",startEph)
$("#ephMain").on("mouseenter",startEph)
$("#ephMain").on("mouseleave",closeEph)
