function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = Number(input[0]);
    let songsArray = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        let [typeList, name, time] = input[i].split('_');
        let song = new Song(typeList, name, time);
        songsArray.push(song);
    }

    let filterType = input[input.length - 1];

    if (filterType === 'all') {
        for (let song of songsArray) {
            console.log(song.name);
        }
    } else {
        for (let song of songsArray) {
            if (song.typeList === filterType) {
                console.log(song.name);
            }
        }
    }
}

songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);