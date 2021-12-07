let stationListsURL = "http://10.101.0.12:8080/stations"  //all the stations
let stationInfo= "http://10.101.0.12:8080/stations/10" //information for a given station id (10 in this case)
//http://10.101.0.12:8080/path/Sainte-Dorothée/Bois-Franc //path from first station name (Sainte-Dorothée) to the oher (Bois-Franc)
//http://10.101.0.12:8080/schedule/Sainte-Dorothée //all passage times by segment 
//http://10.101.0.12:8080/distance/Sainte-Dorothée/Bois-Franc //distance in km between first station name (Sainte-Dorothée) to the oher (Bois-Franc)
//http://10.101.0.12:8080/averageTrainSpeed // the average speed in km/s for all trains in the network

let stationLists = document.getElementById("stationsLists")

function GetStationLists (data)
{
    console.log(data)
}
Fetch(stationListsURL,GetStationLists) 

async function Fetch( url, doStuff){
    try {
        response= await fetch( url )
        response= await response.json()
        response=  doStuff(response)
    } catch (error) {
        console.log('Error:' , error);
    }
};