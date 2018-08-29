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
    xhttp.open("Get", "https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086&FcstType=json", true);
    xhttp.send();
}