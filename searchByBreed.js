const apiKey = 'bhngUQZ7DnqzGnsBHsyXV5C5vCUqVjSSgSr2AujQA7DSoO2Dos';
const apiSecret = 'szxGW3R4VbYQpYJ1h9eo5tvfbIgpQALaCKk3iQ4c';
const searchDogBtn = document.getElementById('dog-search-btn');
searchDogBtn.addEventListener('click', handleSearchByBread);


function handleSearchByBread(event) {
    event.preventDefault();
    return requestToken().then(fetchDogsByBreed).then(displayDogs);
}

function requestToken(){
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(response => response.json())
}

function fetchDogsByBreed(tokenObject){
    const breedQuery = document.getElementById('dog-search-input').value;
    const token = tokenObject.access_token;
    return fetch(`https://api.petfinder.com/v2/animals?breed=${breedQuery}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        if (!response.ok) {
            //TODO: replace with a modal
            alert(`The breed you entered: ${breedQuery} is not recognized, sorry try something else!`)
            return;
        }
        return response.json()
    })
}

function displayDogs(animalsData){
    const dogs = animalsData.animals;
    const dogSearchResultsEl = document.getElementById('dogSearchResults');
    dogSearchResultsEl.classList.remove('hide');
    const dogsUl = document.getElementById('dogList');
    dogsUl.innerHTML = ''; 
    dogs.forEach(function(dog){
        // See this console log for details of what info we get from API!!!!
        console.log('each dog is: ', dog);

        const dogNameEl = document.createElement('h1');
        dogNameEl.textContent = dog.name;
        let dogImgUrl = 'https://www.rit.edu/nsfadvance/sites/rit.edu.nsfadvance/files/default_images/photo-unavailable.png'
        if(dog.photos.length && dog.photos[0].medium){
            dogImgUrl = dog.photos[0].medium;
        }
        const dogImg = document.createElement('img');
        dogImg.setAttribute('src', dogImgUrl)

        const dogLi = document.createElement('li');
        dogLi.textContent = dog.url;
        dogLi.appendChild(dogNameEl);
        dogLi.appendChild(dogImg);
        dogsUl.appendChild(dogLi);              
    })
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {lat: 42.2129072281, lng: -122.712327641};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }