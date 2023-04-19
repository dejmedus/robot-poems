
const split = `In the depths of space, where light can't reach
There's a world unlike any we could teach
A planet with skies that shimmer and shine
Where creatures dance and call it divine

The colors are brighter, the air is sweet
As life thrives in every shape and fleet
The beings there sing a melody so pure
That it echoes through the universe, for sure

Their bodies are made of stardust and light
Their eyes shine like diamonds in the night
And though they're far away, in a distant land
We're connected by a bond that's grand

For we share the same stars, the same sky
And though we'll never meet eye to eye
I take comfort in knowing they exist
In a world of wonder and bliss.`.split('\n')

split.map(line => {
    console.log(`<span>${line}</span>`)
})