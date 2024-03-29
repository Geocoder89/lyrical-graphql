import { Prisma } from '../../db.js';
const songMutations = {
    addSong: async (_, { title }) => {
        try {
            console.log(`creating song`);
            const newSong = await Prisma.song.create({
                data: {
                    title,
                },
                // eagerly load the associated lyrics
                include: {
                    lyrics: true,
                },
            });
            console.log(`new song created: ${newSong}`);
            return newSong;
        }
        catch (error) {
            console.error(`Error creating song`, error);
            throw new Error('Failed to create song');
        }
    },
    addLyricToSong: async (_parent, { songId, content }) => {
        try {
            const song = await Prisma.song.findUnique({
                where: {
                    id: songId,
                },
            });
            console.log(song, 'this is the found song');
            // if there is no song, throw an error
            if (!song) {
                throw new Error(`Song with ID ${songId} was not found`);
            }
            // create a new lyric and associate it to the song.
            // Create the lyric associated with the song
            const createdLyric = await Prisma.lyric.create({
                data: {
                    content,
                    likes: 0, // Set default likes to 0
                    song: { connect: { id: songId } }, // Associate with the song
                },
                include: {
                    song: true,
                },
            });
            console.log(createdLyric, 'this is the created lyric');
            return createdLyric;
        }
        catch (error) {
            console.error(`Error adding lyric to the song ${error}`);
            return null;
        }
    },
    deleteSong: async (_parent, { id }) => {
        try {
            // first find all the lyrics associated with the song, since they are many i will used findMany.
            const lyrics = await Prisma.lyric.findMany({
                where: {
                    songId: id
                }
            });
            console.log(lyrics, 'these are the lyrics');
            // Delete each associated lyric
            for (const lyric of lyrics) {
                await Prisma.lyric.delete({
                    where: {
                        id: lyric.id
                    }
                });
            }
            const song = await Prisma.song.delete({
                where: {
                    id: id,
                },
            });
            return song;
        }
        catch (error) {
            console.error(`Error occured while deleting song ${error}`);
            return null;
        }
    },
};
export default songMutations;
