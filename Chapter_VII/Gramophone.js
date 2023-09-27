// Ex. VI

function solve(bandName, albumName, songName){

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    // console.log(songDuration);
    let rotatingTime =Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotatingTime} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')