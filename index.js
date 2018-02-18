function showImage(imgName) {
    document.getElementById('largeImg').src = imgName;
    showLargeImagePanel();
    unselectAll();
}
function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.visibility = 'visible';
}
function unselectAll() {
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
}
function hideMe(obj) {
    obj.style.visibility = 'hidden';
}

// let computeDocHeight = function() {

//     if ($(window).width()<650) {
//         $('#right').hide();
//         $('#middle')

//     } else {
//         $('#right').show();
//     }
// }

// $('document').ready(computeDocHeight);

// $(window).resize(computeDocHeight);

$(".workLinks").on("mouseenter", function() {
    let work=$(this)[0].classList[1];
    $("."+work).css("text-decoration","line-through");
    let first = "."+work+":eq(0)";
    let second = "."+work+":eq(1)";
    if ($(second).length>0) {
        $(second).animate({opacity: 0.0, "margin-left": '-100px'}, 1000, setInvisible);
        $(second).animate({opacity: 1.0, "margin-left": '0px'}, 100, setVisible);
        function setInvisible() {
        $(this).css('visibility', 'hidden');
        }
        function setVisible() {
        $(this).css('visibility', 'visible');
        }
        
        // $(second).animate({
        //         'marginLeft' : "-=80px" //moves left
        //     });
        // $(second).fadeOut('slow');
        // $(second).animate({
        //         'marginLeft' : "+=80px" //moves left
        //     });
        
        
        // $(second).fadeOut('slow');
        // $(second).fadeIn('slow');
    }
    // $(second).fadeOut('slow',function() {
    //     $(this).delay(500);
    // });
});

$(".workLinks").on("mouseleave", function() {
    let work=$(this)[0].classList[1];
    $("."+work).css("text-decoration","none");
});


