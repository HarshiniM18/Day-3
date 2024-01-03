var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<=result.length;i++){
        //2 - Use the rest countries API URL and display all  the country flags in the console
        console.log(result[i].flags)
        //3 - Use the same rest countries and print all the countrie's name, region, sub region and population
        console.log(result[i].name)
        console.log(result[i].region)
        console.log(result[i].subregion)
        console.log(result[i].population)
    }
}