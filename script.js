let cityInput = "";
const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector  (".sch  button");
async function checkweather(cityInput)
{
    const apiurl=`http://api.weatherapi.com/v1/current.json?key=e669429a1a0d4df2829163533242802&q=${cityInput}&units=standard`;

    const response= await fetch(apiurl);
    var data=await response.json();
     console.log(data);
     document.querySelector(".city").innerHTML=data.location.name;
     document.querySelector(".temperature").innerHTML=Math.round(data.current.temp_c)+"℃";
     document.querySelector(".humid").innerHTML=data.current.humidity+"%";
     document.querySelector(".winspe").innerHTML=data.current.wind_kph+ "km/hr";
     document.querySelector(".inp").innerHTML.data=cityInput;
     

}
     searchBtn.addEventListener("click",()=>{
        cityInput=searchbox.value;
        if(cityInput===""){
            alert("Enter City Name");
        }
        else{
          
       checkweather(searchbox.value);
        }
        
    });