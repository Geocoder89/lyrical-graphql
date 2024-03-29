import { Prisma } from '../../db.js';
const lyricsQueries = {
    lyric: async (_, { id }) => {
        try {
            const lyric = await Prisma.lyric.findUnique({
                where: {
                    id: id,
                },
                include: {
                    song: true,
                },
            });
            if (!lyric) {
                throw new Error(`Error finding lyric with id ${id}`);
            }
            return lyric;
        }
        catch (error) {
            console.error(error);
        }
    },
};
export default lyricsQueries;
