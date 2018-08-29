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
    var RefUrl = "https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086&FcstType=json"
    BaseLat = RefUrl.split("https://forecast.weather.gov/MapClick.php?lat=")
    BaseLon = RefUrl.split("https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=")
    BaseEnd = RefUrl.split("https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086")

    ///input boxes 1info and 2info 
    FinUrl = BaseLat.concat(input1, BaseLon, input2, BaseEnd)

    ///url reference (box1, on split 1) (box2, on split 2)
    xhttp.open("Get", FinUrl, true);

    xhttp.send();
}