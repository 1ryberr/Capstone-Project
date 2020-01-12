
const travelData = {};

const getDataFromApi = async (baseURL, apiKey) => {

  const res = await fetch(baseURL + apiKey)
  try {

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    alert("error", error);
    console.log("error", error);

  }

}

const postData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;

  } catch (error) {
    console.log("error", error);
  }

}

export const updateUI = async () => {

  const request = await fetch('http://localhost:4000/data');

  try {
    const data = await request.json();

    if (typeof data[0].destination === 'undefined') {

    } else {

      const wthr = document.querySelector('#lbl');
      wthr.innerHTML = data[0].typicalWeather;

      const status = document.querySelector('#lbl2');
      status.innerHTML = data[0].departureDate;

      const dest = document.querySelector('#lbl1');
      dest.innerHTML = data[0].destination;

      const summary = document.querySelector('#status');
      summary.textContent = data[0].summary;

      const img = document.getElementById('image');
      img.src = data[0].imageURL
      const a = document.querySelector('#ankor');
      a.href = data[0].wikiURL;
      a.innerHTML = data[0].wikiURL;

    }
  } catch (error) {
    console.log("error", error);
  }
}

function defaultValue() {

  let val = document.getElementById("in1");
  val.value = val.defaultValue;
  let val1 = document.getElementById("in");
  val1.value = val1.defaultValue;

}

export function geoFindMe() {

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


  const status = document.querySelector('#status');
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.textContent = '';


    const baseUrl = " http://api.geonames.org/findNearbyPlaceNameJSON";
    const api = `?lat=${latitude}&lng=${longitude}&username=${process.env.USER_ID}`;

    getDataFromApi(baseUrl, api)
      .then(function (data) {
        const place = data.geonames[0].name;
        const stat = document.querySelector('#status');
        stat.innerHTML = `${place}, ${typeof data.geonames[0].adminCode1 === 'undefined' ? data.geonames[0].countryName : data.geonames[0].adminCode1}`;
        const pbaseURL = "https://pixabay.com/api/";
        const papiKey = `?key=${process.env.PIXABY_API_KEY}&q=${data.geonames[0].adminName1}&image_type=photo&pretty=true`;
        getDataFromApi(pbaseURL, papiKey)
          .then(function (data) {
            const img = document.getElementById('image');
            img.src = data.hits[Math.floor((Math.random() * Object.keys(data.hits).length))].largeImageURL;
          });

      });
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        status.textContent = "User denied the request for Geolocation."
        break; ``
      case error.POSITION_UNAVAILABLE:
        status.textContent = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        status.textContent = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        status.textContent = "An unknown error occurred."
        break;
    }
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, showError, options);
  }

}

export function performAction(e) {
  document.getElementById('fmt').style.display = "none";
  const input = document.getElementById('in1').value;

  if (input.length != 0) {

    const baseURL = "http://api.geonames.org/wikipediaSearchJSON";
    const apiEndPoint = `?formatted=true&q=${input}&maxRows=10&username=${process.env.USER_ID}&style=full`;
    getDataFromApi(baseURL, apiEndPoint)
      .then(function (data) {
        const a = document.querySelector('#ankor');
        a.href = `https://${data.geonames[0].wikipediaUrl}`;
        a.innerHTML = `https://${data.geonames[0].wikipediaUrl}`;
        const latitude = data.geonames[0].lat;
        const longitude = data.geonames[0].lng;
        const city = data.geonames[0].title;
        const state = data.geonames[0].countryCode;
        const img = document.getElementById('image');
        img.src = data.geonames[0].thumbnailImg;
        const stat = document.querySelector('#status')
        stat.innerHTML = data.geonames[0].summary;
        const status = document.querySelector('#lbl1');
        status.innerHTML = `My trip to: ${city}, ${state.toUpperCase()}`;
        const place = data.geonames[0].title;
        travelData['destination'] = `My trip to: ${city}, ${state.toUpperCase()}`;
        travelData['summary'] = data.geonames[0].summary;
        travelData['wikiURL'] = `https://${data.geonames[0].wikipediaUrl}`;
        const pbaseURL = "https://pixabay.com/api/";
        const papiKey = `?key=${process.env.PIXABY_API_KEY}&q=${place}&image_type=photo&pretty=true`;
        getDataFromApi(pbaseURL, papiKey)
          .then(function (data) {
            const img = document.getElementById('image');
            img.src = data.hits[Math.floor((Math.random() * Object.keys(data.hits).length))].largeImageURL;
            travelData['imageURL'] = data.hits[Math.floor((Math.random() * Object.keys(data.hits).length))].largeImageURL;
          });


        const input = document.getElementById('in').value;
        travelData['departureDate'] = `Departing ${input}`;
        if (typeof input === 'undefined' || input.includes("20", 0) || input.includes(".", 4)) {
          const time = new Date(input).getTime() / 1000;

          const abaseURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
          const apiKey = `${process.env.DARKSKY_API_KEY}/${latitude},${longitude},${time}`;
          getDataFromApi(abaseURL, apiKey)
            .then(function (data) {
              const wthr = document.querySelector('#lbl');
              wthr.innerHTML = `Typical weather for this time of year is a temperature of 
            ${data.currently.temperature} and ${typeof data.currently.summary === 'undefined' ? "conditions may vary." : data.currently.summary}`;

              const dp = document.querySelector('#lbl2');
              dp.innerHTML = `Departing ${input}`

              travelData['typicalWeather'] = `Typical weather for this time of year is a temperature of ${data.currently.temperature} and ${typeof data.currently.summary === 'undefined' ? "conditions may vary." : data.currently.summary}`;

              defaultValue();
            });
        } else {
          alert("Please enter a date and format your date like this: 2012.08.10")
        }
      });
  }

}

export function postTravelData() {
  postData('http://localhost:4000', travelData);
}



