window.onload=function(){
//$(document).ready(function(){ //$不能使用jquery的$(document).ready() 加载方法，会导致无法生效,详情需了解它与window.onload()的区别
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
