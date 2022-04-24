
function disappear(){
    var holder = document.getElementById("cookie");
    holder.remove();
}

function loadThis(){
    alert(document.getElementById("this").innerHTML + " is being loaded")
}
function loadThat(){
    alert(document.getElementById("that").innerHTML + " is being loaded")
}
function loadOther(){
    alert(document.getElementById("other").innerHTML + " is being loaded")
}


var counter = 0;
console.log(counter)

function tempChange(element){
    var x = element.value;
    
    if(x == "fahrenheit" && counter == 0){
        counter +=1;
        console.log(counter);

        for(i = 0; i < 5; i++){
        var y = document.getElementsByClassName("morning")[i].innerHTML;
        var z = document.getElementsByClassName("night")[i].innerHTML;

        y = Math.round((parseInt(y)*9/5) + 32);
        z = Math.round((parseInt(z)*9/5) + 32);
        
        document.getElementsByClassName("morning")[i].innerHTML = y;
        document.getElementsByClassName("night")[i].innerHTML = z;
        }
    }
    else if(x == "celsius" && counter == 1){
        counter -=1;
        console.log(counter);

        for(i = 0; i < 5; i++){
        var y = document.getElementsByClassName("morning")[i].innerHTML;
        var z = document.getElementsByClassName("night")[i].innerHTML;

        y = Math.round((parseInt(y)- 32) * 5/9);
        z = Math.round((parseInt(z)- 32) * 5/9);
        
        document.getElementsByClassName("morning")[i].innerHTML = y;
        document.getElementsByClassName("night")[i].innerHTML = z;
        }
    }
}








