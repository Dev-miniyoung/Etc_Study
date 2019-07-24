const API_KEY = "29aea8d3ac1ab59c44a6ab34b9f5742e";
const COORDS = "coords";


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    } else{

    }
}

function init(){
    loadCoords();
}

init();