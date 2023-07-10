const apiKey = "e58c2f733ec93827f8e4d7a5115ed2b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search input");
        const icon = document.querySelector(".icon")

        async function weatherCheck(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".info").style.display = "none";
            }
            else {
                
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".read").innerHTML = Math.floor(data.main.temp) + " °C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                if(data.weather[0].main == "Clouds"){
                    icon.src = "images/clouds.png";
                }
                else if(data.weather[0].main == "Clear"){
                    icon.src = "images/clear.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    icon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    icon.src = "images/mist.png";
                }
                else if(data.weather[0].main == "Rain"){
                    icon.src = "images/rain.png";
                    }
                else if(data.weather[0].main == "Snow"){
                    icon.src = "images/snow.png";
                }
            

            document.querySelector(".info").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }

        }

        searchBtn.addEventListener("click", () => {
            weatherCheck(searchBox.value);
        })