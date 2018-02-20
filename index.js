function showImage(imgName) {
    document.getElementById('largeImg').src = imgName;
    showLargeImagePanel(imgName);
    document.getElementById('largeImgPanel').style.visibility = 'visible';
    unselectAll();
}
function showLargeImagePanel(imgName) {

    let imgH, imgW, w2, h2;
    for (let i=0; i<$("#middle img.fig").length; ++i) {
        let item = $("#middle img.fig:eq("+i+")");
        if (item.attr("src")==imgName) {
            imgH = $(item).css("height");
            imgH = parseInt(imgH.slice(0,imgH.length-2));
            imgW = $(item).css("width");
            imgW = parseInt(imgW.slice(0,imgW.length-2));
            break;
        }
    }

    let w = $(window).width();
    let h = $(window).height();

    if (imgH==undefined) {
        imgH = h;
        imgW = w;
    }

    if (w<h || (w>h && w/h<imgW/imgH)) {
        
        if (imgW>imgH) {
            h2 = w*(imgH/imgW);
        } else {
            h2 = w*(imgW/imgH);
        }

        $("#largeImgPanel").css("width",w2);
        $("#largeImgPanel").css("height",h2);
        $("#largeImgPanel").css("top",(h-h2)/2);
        $("#largeImgPanel").css("left",0);
    } else {
        
        if (imgW>imgH) {
            w2 = h*(imgW/imgH);
        } else {
            w2 = h*(imgH/imgW);
        }
        $("#largeImgPanel").css("height",h);
        $("#largeImgPanel").css("width",w2);
        $("#largeImgPanel").css("left",(w-w2)/2);
        $("#largeImgPanel").css("top",0);
    }
}
function unselectAll() {
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
}
function hideMe(obj) {
    obj.style.visibility = 'hidden';
}

let computeDocHeight = function() {

    if ($(window).width()<650) {
        $('#right').hide();
        $('#middle')

    } else {
        $('#right').show();
    }
    if (document.getElementById('largeImgPanel').style.visibility == 'visible') {
        showLargeImagePanel($("#largeImg").attr("src"));
    }
    // let h = $(window).height();
    // let hdr = $("#imgHdr").css("height");
    // let hdrHeight = parseInt(hdr.slice(0,hdr.length-2));
    // $("#left2").css("height",h-hdrHeight-40);
}

$(document).ready(computeDocHeight);
$(document).ready(showLargeImagePanel("test"));

$(window).resize(computeDocHeight);

$(".workLinks").on("mouseenter", function() {
    let work=$(this)[0].classList[1];
    $("."+work).css("text-decoration","line-through");
    let first = "."+work+":eq(0)";
    let second = "."+work+":eq(1)";
    if ($(second).length>0) {
        $(second).animate({opacity: 0.0, "margin-left": '-100px'}, 800, setInvisible);
        $(second).animate({opacity: 1.0, "margin-left": '0px'}, 10, setVisible);
        function setInvisible() {
        $(this).css('visibility', 'hidden');
        }
        function setVisible() {
        $(this).css('visibility', 'visible');
        }
    }
});

$(".workLinks").on("mouseleave", function() {
    let work=$(this)[0].classList[1];
    $("."+work).css("text-decoration","none");
});
