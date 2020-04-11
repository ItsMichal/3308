$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    for(var state_initials in state_info){
    
        let state_obj = state_info[state_initials];
        console.log(state_obj);
        let url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${state_obj.lat},${state_obj.lng}`;
        console.log(state_obj.lat +','+ state_obj.lng);

        (function(state_init){$.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                    console.log(data)
                    //var temperature = null
                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                    var temperature = (data.current.temperature*(9/5)) +32

                    //console.log(temperature)

                    //TODO
                    // Default color gray
                    // Create a series of if else blocks to set the color for the state based on the temperature
                    // Less than equal to 10F	#6495ED
                    // Between 11F and 20F	#7FFFD4
                    // Between 21F and 30F	#0000FF
                    // Between 31F and 40F	#008B8B
                    // Between 41F and 50F	#00BFFF
                    // Between 51F and 60F	#F08080
                    // Between 61F and 70F	#CD5C5C
                    // Between 71F and equal to 80F	#8B0000
                    // Between 81F and equal to 90F	#B22222
                    // Greater than 90F	#FF0000
                    var color = "#808080";
                    if(temperature <= 10){
                        color = "#6495ED";
                    }else if(temperature <= 20){
                        color = "#7FFFD4";
                    }else if(temperature <= 30){
                        color = "#0000FF";
                    }else if(temperature <= 40){
                        color = "#008B8B";
                    }else if(temperature <= 50){
                        color = "#00BFFF";
                    }else if(temperature <= 60){
                        color = "#F08080";
                    }else if(temperature <= 70){
                        color = "#CD5C5C";
                    }else if(temperature <= 80){
                        color = "#8B0000";
                    }else if(temperature <= 90){
                        color = "#B22222";
                    }else if(temperature > 90){
                        color = "#FF0000";
                    }
                    console.log(state_init);
                    var dirs = [`<svg class="bi bi-arrow-up" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"/>
                  </svg>`,
                    `<svg class="bi bi-arrow-up-right" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                  </svg>`,
                    `<svg class="bi bi-arrow-right" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"/>
                  </svg>`,
                `<svg class="bi bi-arrow-down-right" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12 7.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H7a.5.5 0 010-1h4.5V8a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M2.646 3.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z" clip-rule="evenodd"/>
              </svg>`,
            `<svg class="bi bi-arrow-down" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
          </svg>`,
        `<svg class="bi bi-arrow-down-left" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 7.5a.5.5 0 01.5.5v4.5H8a.5.5 0 010 1H3a.5.5 0 01-.5-.5V8a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z" clip-rule="evenodd"/>
      </svg>`,
    `<svg class="bi bi-arrow-left" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
  </svg>`,
`<svg class="bi bi-arrow-up-left" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2.5 4a.5.5 0 01.5-.5h5a.5.5 0 010 1H3.5V9a.5.5 0 01-1 0V4z" clip-rule="evenodd"/>
<path fill-rule="evenodd" d="M2.646 3.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z" clip-rule="evenodd"/>
</svg>`]

                    let arrow_svg = `<svg class="bi bi-arrows-move" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.5 8a.5.5 0 00-.5-.5H1.5a.5.5 0 000 1H6a.5.5 0 00.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M3.854 5.646a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L2.207 8l1.647-1.646a.5.5 0 000-.708zM9.5 8a.5.5 0 01.5-.5h4.5a.5.5 0 010 1H10a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M12.146 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L13.793 8l-1.647-1.646a.5.5 0 010-.708zM8 9.5a.5.5 0 00-.5.5v4.5a.5.5 0 001 0V10a.5.5 0 00-.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M5.646 12.146a.5.5 0 000 .708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 00-.708-.708L8 13.793l-1.646-1.647a.5.5 0 00-.708 0zM8 6.5a.5.5 0 01-.5-.5V1.5a.5.5 0 011 0V6a.5.5 0 01-.5.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M5.646 3.854a.5.5 0 010-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8 2.207 6.354 3.854a.5.5 0 01-.708 0z" clip-rule="evenodd"/>
                  </svg>`;

                    if(data.current.wind_dir == 'N'){
                        arrow_svg = dirs[0];
                    }else if(data.current.wind_dir.includes('NE')){
                        arrow_svg = dirs[1];
                    }else if(data.current.wind_dir == 'E'){
                        arrow_svg = dirs[2];
                    }else if(data.current.wind_dir.includes('SE')){
                        arrow_svg = dirs[3];
                    }else if(data.current.wind_dir == 'S'){
                        arrow_svg = dirs[4];
                    }else if(data.current.wind_dir.includes('SW')){
                        arrow_svg = dirs[5];
                    }else if(data.current.wind_dir == 'W'){
                        arrow_svg = dirs[6];
                    }
                    else if(data.current.wind_dir.includes('NW')){
                        arrow_svg = dirs[7];
                    }

                    $('#'+state_init).css('fill', color);
                    $('#'+state_init).attr('title', 
                    '<img src="'+data.current.weather_icons[0]+'"><br>'+
                    data.location.region+ `'s Weather<br>
                    Temperature: ${temperature.toFixed(2)} F<br>
                    Weather: ${data.current.weather_descriptions}
                    Cloud Cover: ${data.current.cloudcover}<br>
                    Humidity: ${data.current.humidity}% <br>
                    Precipitation: ${data.current.precip} mm<br>
                    Wind Direction: ${data.current.wind_dir} <br>
                    ${arrow_svg}
                    `);
                    $('#'+state_init).tooltip({
                        'html': true 
                    });

                    // Example on how to fill colors for your state.
        });})(state_initials);
    }
});
