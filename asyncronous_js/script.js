'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
  const html = `
  <article class="country ${className} ">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

///////////////////////////////////////
// Old version of making request
///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
// `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('poland');
// getCountryData('germany');
// getCountryData('usa');

///////////////////////////////////////
// Second call - first request, than second depending of first
///////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // here we destructure array cause of 'name' API
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // get Neighbour data
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       // if not name but alpha(code) then will not destructure into array!!!
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');

///////////////////////////////////////
// typical callback hell
///////////////////////////////////////

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////////////////
// Fetch
///////////////////////////////////////

// const request3 = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request3);

// helper function to simplify code (clean)
// const getJSON = function (url, errorMsg = 'Something went wrong! ') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);

//     return response.json();
//   });
// };

// // simplified fetch error handling
// const getCountryData = function (country) {
//   // Country 1

//   return (
//     getJSON(
//       `https://restcountries.eu/rest/v2/name/${country}`,
//       'Country not found'
//     )
//       .then(data => {
//         renderCountry(data[0]);
//         // const neighbour = data[0].borders[0];
//         const neighbour = 'afdgasdfasdf';
//         if (!neighbour) return;
//         throw new Error('No neighbour found!');

//         // Country 2
//         return getJSON(
//           `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//           'Country not found'
//         );
//       })

//       .then(data => {
//         renderCountry(data, 'neighbour');
//       })
//       // this method is catching all errors from the fetch and is only called when the promise is rejected
//       .catch(err => {
//         console.error(`${err} ∞ ∞ ∞`);
//         renderError(`Something went wrong!  ${err.message} Try again!`);
//       })
//       // this smethod is not always useful, but it will always be called regardless promises
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       })
//   );
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
//     console.log(response);

//     // throwing error for no response
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);

//     return response.json();
//     //       // handling error which could might appear caused of offline / no connection
//     //       // err => alert(err)
//   });
//   //     .then(data => {
//   //       renderCountry(data[0]);
//   //       // const neighbour = data[0].borders[0];
//   //       const neighbour = 'afdgasdfasdf';
//   //       if (!neighbour) return;

//   //       // Country 2
//   //       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//   //     })
//   //     // then method is only called when the promise is fullfilled
//   //     .then(response => {
//   //       if (!response.ok)
//   //         throw new Error(`Country not found (${response.status})`);
//   //       return response.json();
//   //     })

//   //     .then(data => {
//   //       renderCountry(data, 'neighbour');
//   //     })
//   //     // this method is catching all errors from the fetch and is only called when the promise is rejected
//   //     .catch(err => {
//   //       console.error(`${err} ∞ ∞ ∞`);
//   //       renderError(`Something went wrong ${err.message} Try again!`);
//   //     })
//   //     // this smethod is not always useful, but it will always be called regardless promises
//   //     .finally(() => {
//   //       countriesContainer.style.opacity = 1;
//   //     });
// };

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('austria');

//
// ////////////
//
// Challenge 1
//
// ////////////
//
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      console.log(response);

      // throwing error for no response
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
      // handling error which could might appear caused of offline / no connection
      err => alert(err);
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      const neighbour = 'afdgasdfasdf';
      if (!neighbour) return;

      //       // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    // then method is only called when the promise is fullfilled
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })

    .then(data => {
      renderCountry(data, 'neighbour');
    })
    // this method is catching all errors from the fetch and is only called when the promise is rejected
    .catch(err => {
      console.error(`${err} ∞ ∞ ∞`);
      renderError(`Something went wrong ${err.message} Try again!`);
    })
    // this smethod is not always useful, but it will always be called regardless promises
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const renderCoordinates = function (data, className) {};

const renderError = function (msg) {
  console.log('Catch error!');
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
    console.log(response);
    if (!response.ok)
      throw new Error(`No response from geocoding ${response.status}`);
    return response
      .json()

      .then(data => {
        renderCoordinates(data[0]);
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
          .then(response => {
            // throwing error for no response
            if (!response.ok)
              throw new Error(`Country not found (${response.status})`);

            return response.json();
            //       // handling error which could might appear caused of offline / no connection
            //       // err => alert(err)
          })
          .then(data => {
            renderCountry(data[0]);
          })
          .catch(err => {
            console.error('Something went wrong!');
            renderError(`Catched error!!! ${error.message}`);
          });
      });
  });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
