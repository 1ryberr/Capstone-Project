

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


function defaultValue() {

  let val = document.getElementById("in1");
  val.value = val.defaultValue;

}

export function geoFindMe() {
  const status = document.querySelector('#lbl1');
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    const baseUrl = "http://api.geonames.org/addressJSON";
    const api = `?lat=${latitude}&lng=${longitude}&username=${process.env.USER_ID}`;

    getDataFromApi(baseUrl, api).then(function (data) {
      const place = data.address.adminName2;
      const stat = document.querySelector('#status')
      stat.innerHTML = `${place}, ${data.address.adminName1}`
      const pbaseURL = "https://pixabay.com/api/";
      const papiKey = `?key=${process.env.PIXABY_API_KEY}&q=${place}&image_type=photo&pretty=true`;
      getDataFromApi(pbaseURL, papiKey).then(function (data) {
        const img = document.getElementById('image');
        img.src = data.hits[0].largeImageURL;

      });
    });

  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        status.textContent = "User denied the request for Geolocation."
        break;
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
    navigator.geolocation.getCurrentPosition(success, showError);
  }

}

export function performAction(e) {

  const input = document.getElementById('in1').value;

  if (input.length != 0) {

    const baseURL = "http://api.geonames.org/wikipediaSearchJSON";
    const apiEndPoint = `?formatted=true&q=${input}&maxRows=10&username=${process.env.USER_ID}&style=full`;
    getDataFromApi(baseURL, apiEndPoint)
      .then(function (data) {

        const latitude = data.geonames[0].lat;
        const longitude = data.geonames[0].lng;
        const city = data.geonames[0].title;
        const state = data.geonames[0].countryCode;
        const img = document.getElementById('image');
        img.src = data.geonames[0].thumbnailImg;
        const stat = document.querySelector('#status')
        stat.innerHTML = data.geonames[0].summary;
        const status = document.querySelector('#lbl1');
        status.innerHTML = `My trip to: ${city}, ${state.toUpperCase()}`

        const place = city;
        const pbaseURL = "https://pixabay.com/api/";
        const papiKey = `?key=${process.env.PIXABY_API_KEY}&q=${place}&image_type=photo&pretty=true`;
        getDataFromApi(pbaseURL, papiKey).then(function (data) {
          const img = document.getElementById('image');
          img.src = data.hits[0].largeImageURL;
        });

        const abaseURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
        const apiKey = `${process.env.DARKSKY_API_KEY}/${latitude},${longitude}`;
        getDataFromApi(abaseURL, apiKey);


      });
  }
  defaultValue();
}








