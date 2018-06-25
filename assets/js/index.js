window.onload=function(){
    //mytimeline黑夜模式，根据时间23--7点设为白色字体
    var date = new Date();
    var hour = date.getHours();
        if(hour==23||hour<7)
    {
        var aList=document.getElementsByClassName("archive-name");
        for(var i=0;i<aList.length;i++){
            document.getElementsByClassName("archive-name")[i].style.color="#fff";
        }
        
    }else{
        var aList=document.getElementsByClassName("archive-name");
        for(var i=0;i<aList.length;i++){
            document.getElementsByClassName("archive-name")[i].style.color="#333";
        }
    }
}