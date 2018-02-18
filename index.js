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


let computeDocHeight = function() {
    let hdr = $("#hdr").css("height");
    hdr = parseInt(hdr.slice(0,hdr.length-2));
    let wHeight = $(window).height()-hdr-100;

    $('#middle').css({
        'height' : wHeight + 'px'   
    });

    wHeight = $(window).height()-hdr;
    $('#rightscroll').css({
        'height' : wHeight + 'px'   
    }); 

    if ($(window).width()<650) {
        $('#right').hide();

    } else {
        $('#right').show();
    }
    console.log("resized");
}

$('document').ready(computeDocHeight);

$(window).resize(computeDocHeight);

