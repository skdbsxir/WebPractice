var Body = {
    setColor : function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
var Links = {
    setColor : function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = 'powderblue';
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}
function buttonHandler(self){
    var target = document.querySelector('body')
    if(self.value === '어둡게'){
        //target.style.backgroundColor='black';
        //target.style.color='white';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '밝게';
        /*
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'powderblue';
            i = i + 1;
        }
        */
        Links.setColor('powderblue');
    }else{
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = '어둡게';
        /*
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'blue';
            i = i + 1;
        }
        */
        Links.setColor('powderblue');
    }
}