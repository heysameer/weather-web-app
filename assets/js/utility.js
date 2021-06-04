
/*
 * Pad a string with characters
 */
function pad(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}

/*
 * Convert Kelvin to Celsius
 */
function toCelsius(kelvin) {
    var deg = kelvin - 273.15;
    return Math.round(deg);
}

/**
 * Source : http://web.archive.org/web/20081227003853/http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}



 /*let favourite=(i)=>(`<div class="container" id="fav${i}">
 <h2 id="meteo-title">
     <span>
         Weather in <a href="https://www.google.com/maps/place/India" class="text-muted meteo-city" target="_blank">India</a>
     </span>
 </h2>
 <section class="section-meteo row">
     <div id="meteo-day-1" class="meteo-day col-sm">
         <h3><span class="name">Day 1</span> <span class="text-muted date">--/--</span></h3>
         <div class="meteo-block row meteo-temperature-container">
             <div class="meteo-temperature">
                 <i class="wi wi-night-sleet"></i>
                 <span class="data">--°C</span>
             </div>
         </div>
         <div class="row">
             <div class="col meteo-block meteo-humidity">
                 <div class="meteo-block-title">
                     <i class="fa fa-tint" aria-hidden="true"></i>
                      Humidity
                 </div>
                 <div class="meteo-block-data">--%</div>
             </div>
             <div class="col meteo-block meteo-wind">
                 <div class="meteo-block-title">
                     <i class="fa fa-flag" aria-hidden="true"></i>
                     Wind
                 </div>
                 <div class="meteo-block-data">-- km/h</div>
             </div>
         </div>
         <div class="row">
             <div class="col meteo-block meteo-sunrise">
                 <div class="meteo-block-title">
                     <i class="fa fa-sun-o" aria-hidden="true"></i>
                     Sunrise
                 </div>
                 <div class="meteo-block-data">--:--</div>
             </div>
             <div class="col meteo-block meteo-sunset">
                 <div class="meteo-block-title">                      
                     <i class="fa fa-sun-o" aria-hidden="true"></i>
                     Sunset
                 </div>
                 <div class="meteo-block-data">--:--</div>
             </div>
         </div>
     </div>
     <div id="meteo-day-2" class="meteo-day col-sm">
         <h3><span class="name">Day 2</span> <span class="text-muted date">--/--</span></h3>
         <div class="meteo-block row meteo-temperature-container">
             <div class="meteo-temperature">
                 <i class="wi wi-night-sleet"></i>
                 <span class="data">--°C</span>
             </div>
         </div>
         <div class="row">
             <div class="col meteo-block meteo-humidity">
                 <div class="meteo-block-title">
                     <i class="fa fa-tint" aria-hidden="true"></i>
                      Humidity
                 </div>
                 <div class="meteo-block-data">--%</div>
             </div>
             <div class="col meteo-block meteo-wind">
                 <div class="meteo-block-title">
                     <i class="fa fa-flag" aria-hidden="true"></i>
                     Wind
                 </div>
                 <div class="meteo-block-data">-- km/h</div>
             </div>
         </div>
         <div class="row">
             <div class="col meteo-block meteo-sunrise">
                 <div class="meteo-block-title">
                     <i class="fa fa-sun-o" aria-hidden="true"></i>
                     Sunrise
                 </div>
                 <div class="meteo-block-data">--:--</div>
             </div>
             <div class="col meteo-block meteo-sunset">
                 <div class="meteo-block-title">                      
                     <i class="fa fa-sun-o" aria-hidden="true"></i>
                     Sunset
                 </div>
                 <div class="meteo-block-data">--:--</div>
             </div>
         </div>
     </div>
     <div id="meteo-day-3" class="meteo-day col-sm">
         <h3><span class="name">Day 3</span> <span class="text-muted date">--/--</span></h3>
         <div class="meteo-block row meteo-temperature-container">
             <div class="meteo-temperature">
                 <i class="wi wi-night-sleet"></i>
                 <span class="data">--°C</span>
             </div>
         </div>
         <div class="row">
             <div class="col meteo-block meteo-humidity">
                 <div class="meteo-block-title">
                     <i class="fa fa-tint" aria-hidden="true"></i>
                      Humidity
                 </div>
                 <div class="meteo-block-data">--%</div>
             </div>
             <div class="col meteo-block meteo-wind">
                 <div class="meteo-block-title">
                     <i class="fa fa-flag" aria-hidden="true"></i>
                     Wind
                 </div>
                 <div class="meteo-block-data">-- km/h</div>
             </div>
         </div>
         <div class="row">
             <div class="col meteo-block meteo-sunrise">
                 <div class="meteo-block-title">
                     <i class="fa fa-sun-o" aria-hidden="true"></i>
                     Sunrise
                 </div>
                 <div class="meteo-block-data">--:--</div>
             </div>
             <div class="col meteo-block meteo-sunset">
                 <div class="meteo-block-title">                      
                     <i class="fa fa-sun-o" aria-hidden="true"></i>
                     Sunset
                 </div>
                 <div class="meteo-block-data">--:--</div>
             </div>
         </div>
     </div>
 </section>
</div>
</div>`)*/





