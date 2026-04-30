export const getTiles = async() => {
    const res = await fetch('https://a8-tiles-gallery.vercel.app/tiles.json');
    const tiles = await res.json();
    console.log(tiles);
    
    return tiles;
};