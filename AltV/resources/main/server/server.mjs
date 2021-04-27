<reference types="@altv/types-server"></reference>
import * as alt from 'alt';
import * as chat from 'chat';

console.log('  ====> ~r~Main Resource was loaded.~r~');

//SpawnPosition
const spawnPos = {
    x: -2639.872,
    y: 1866.812,
    z: 160.135
}

// Bei PlayerConnect spieler Spawnen !
alt.on('playerConnect', player => {
    console.log(`          Spawn:   ===> ${player.name} hat sich verbunden!`);
    chat.broadcast(` ===> ${player.name} hat sich verbunden! `);
    player.model = 'mp_m_freemode_01';
    player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 5000);
})

//Bei PlayerDeath spieler neuspawnen!
alt.on('playerDeath', (player, target, killer, weapon) => {
    chat.broadcast(`${target.name} wurde von ${killer.name} umgebracht.`);
    player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 5000);
})



chat.registerCmd('pos', (player, arg) => {
    return chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);
});

chat.registerCmd('sethp', (player, arg) => {
    if (!arg || arg.length <= 0) {
        chat.send(player, '/sethp (amount)');
        return;
    }

    let amount = parseInt(arg[0]);
    if (amount < 100) {
        amount += 100;
    }

    if (isNaN(amount)){
        chat.send(player, 'Das ist keine Zahl');
    }
});

chat.registerCmd('test', (player, arg) => {
    chat.send(player, 'SERVER: ==> ~r~Hey~r~');
    //alt.emitClient(player, 'notifications:show', 'Wie gehts', false, 134);
});

chat.registerCmd('heal', (player, arg) => {
    player.health = 199;
    //alt.emitClient(player, 'notifications:show', 'Du wurdest geheilt', false, 134);
});

chat.registerCmd('veh', (player, arg) => {
    if (!arg || arg.length <= 0) {
        chat.send(player,'/veh (model)');
        return;
    }

    try {
        const newVehicle = new alt.Vehicle(
            arg[0], 
            player.pos.x,
            player.pos.y, 
            player.pos.z,
            0,
            0,
            0);
        alt.emitClient(player, 'vehicle:SetInto', newVehicle);
    } catch (err) {
        chat.send(player, 'Falscher Name!!');
    }
});

