import { Prisma } from "../db";
export const addLyricToSong = async (_parent, { songId, content }) => {
    try {
        const song = await Prisma.song.findUnique({
            where: {
                id: songId
            }
        });
        // if there is no song, throw an error
        if (!song) {
            throw new Error(`Song with ID ${songId} was not found`);
        }
        // create a new lyric and associate it to the song.
        const createdLyric = await Prisma.lyric.create({
            data: {
                content,
                Song: {
                    connect: {
                        id: songId
                    }
                },
                likes: 0
            },
            include: {
                song
            }
        });
        console.log(createdLyric, 'this is the created lyric');
        return song;
    }
    catch (error) {
        console.error(`Error adding lyric to the song ${error}`);
        return null;
    }
};
