// if i pass 'song' that means i want to get the selected song
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const addsong = (song) =>{
    return{
        type: 'ADD_SONG',
        payload: song
    }
}
//export default selectSong