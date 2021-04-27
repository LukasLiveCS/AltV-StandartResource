<reference types="@altv/types-client"></reference> //Für Autocomplete Clientseitig (Nur Visual Studio Code & Installiertem AltV IDE Plugin)

import * as alt from 'alt';
import * as native from 'natives';

const view = new alt.WebView("http://resources/main/client/html/index.html");

alt.onServer('vehicle:SetInto', newVehicle => {
    const localPlayer = alt.Player.local.scriptID;

    //Timeout weil es einen Delay gibt & dann erst ins Fahrzeug tpn ( Achtung, es gibt nur für Clientside den befehl "alt.setTimeout" )
    alt.setTimeout(() => {
        native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1);
    }, 150);
});

alt.on('keydown', (key) => {
    if (key == "J".charCodeAt(0)){
        view.emit('show');
    }
});

alt.on('keyup', (key) => {
    if (key == "J".charCodeAt(0)){
        view.emit('hide');
    }
});
