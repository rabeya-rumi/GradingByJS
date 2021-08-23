//statement start from here//
function total(){
    var sub1 = parseInt;
    document.getElementById("eng").value.length;
    
    var sub2 = parseInt;
    document.getElementById("mat").value.length;
    
    var sub3 = parseInt;
    document.getElementById("phy").value.length;
    
    var sub4 = parseInt;
    document.getElementById("che").value.length;
    
    var sub5 = parseInt;
    document.getElementById("cmp").value.length;
    
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English marks :"+sub2+ "<br> Mathmatics marks :"+sub3+ "<br> Physics marks :"+sub4+" <br> Chemistry marks :"+sub5+"  Computer marks :"+sub1+" <br>_________________<br> Total Marks"+total;
    }
}

function average(){
     var sub1 = parseInt;
    document.getElementById("eng").value.length;
    
    var sub2 = parseInt;
    document.getElementById("mat").value.length;
    
    var sub3 = parseInt;
    document.getElementById("phy").value.length;
    
    var sub4 = parseInt;
    document.getElementById("che").value.length;
    
    var sub5 = parseInt;
    document.getElementById("cmp").value.length;
    
     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alaert("Please Enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var ave = total/5;
        document.getElementById("average").innerHTML = "Your average marks is:" +ave;
    }
}

function grade(){
     var sub1 = parseInt;
    document.getElementById("eng").value.length;
    
    var sub2 = parseInt;
    document.getElementById("mat").value.length;
    
    var sub3 = parseInt;
    document.getElementById("phy").value.length;
    
    var sub4 = parseInt;
    document.getElementById("che").value.length;
    
    var sub5 = parseInt;
    document.getElementById("cmp").value.length;
    
     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alaert("Please Enter mark in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var ave = total/5;
        
        if(ave>=80 && ave<=100){
            document.getElementById("grade").innerHTML = "Your grade is A";
        }
        
        else if(ave>=75 && ave<=80){
            document.getElementById("grade").innerHTML = "Your grade is B+";
        }
        
         else if(ave>=70 && ave<=75){
            document.getElementById("grade").innerHTML = "Your grade is B";
        }
        
         else if(ave>=65 && ave<=70){
            document.getElementById("grade").innerHTML = "Your grade is C+";
        }
        
        else if(ave>=60 && ave<=65){
            document.getElementById("grade").innerHTML = "Your grade is C";
        }
        
         else if(ave>=50 && ave<=60){
            document.getElementById("grade").innerHTML = "Your grade is D";
        }
        else{
            document.getElementById("grade").innerHTML = "Your grade is F";
        }
    }
}


















 