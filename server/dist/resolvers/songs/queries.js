import { Prisma } from '../../db.js';
const songQueries = {
    songs: async () => {
        try {
            const allSongs = await Prisma.song.findMany({
                include: {
                    lyrics: true,
                },
            });
            console.log('this is the parent');
            console.log(allSongs, 'all the songs o');
            return allSongs;
        }
        catch (error) {
            console.error(`Error fetching songs: ${error}`);
            return [];
        }
    },
    song: async (_, { id }) => {
        try {
            const song = await Prisma.song.findUnique({
                where: {
                    id: id,
                },
                include: {
                    lyrics: true,
                },
            });
            if (!song) {
                throw new Error(`Song with id ${id} not found`);
            }
            return song;
        }
        catch (error) {
            console.log(`this is the error: ${error}`);
        }
    },
};
export default songQueries;
