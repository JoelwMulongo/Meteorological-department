<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joel Weather Application</title>
    <link rel="stylesheet" href="style.css">
</head>
    <!--body-->
<body>
    <div class="main-container">
        <div class="container top">
            <h1>Forecasting</h1>
            
             <!--form and the button-->
            <form action="" onsubmit="return false">
                <input type="text" class="search" placeholder="Enter town name">
                <button type="submit" class="btn">Check</button>
                <p class="error"></p>
            </form>
            <section>
                <div class="container">
                    <div class="icon">
                        <img src="" alt="" class="weather-icon">
                    </div>
                    
                     <!--location, temperature, weather and temperature range-->
                    <div class="location">
                        <div class="city">Your Location</div>
                        <div class="date">Date Placeholder</div>
                    </div>
                    <div class="current">
                        <div class="temp">Temperature <span>°C</span></div>
                        <div class="weather">Weather: Condtion</div>
                        <div class="temp-range">Temp Range: °C / °C</div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
 <!--javascript file-->
    <script src="app.js"></script>
</body>
</html>

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-(https://github.com/JoelwMulongo/Meteorological-department/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.
