function loadDataAjax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
                data.data.text.forEach(element => {
                var node = document.createElement("li");
                node.innerText = element;
                document.getElementById("weather").appendChild(node)
            });
        }
    };
    ///url reference substring split
    in1 = document.getElementById("#in1").value
    in2 = document.getElementById("#in2").value
    var RefUrl = "https://forecast.weather.gov/MapClick.php?lat=" + in1 + "&lon=" + in2 + "&FcstType=json"
    
    ///input boxes 1info and 2info 
   

    ///url reference (box1, on split 1) (box2, on split 2)
    xhttp.open("Get", RefUrl, true);

    xhttp.send();
}