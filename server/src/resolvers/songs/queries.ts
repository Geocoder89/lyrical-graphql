import { Prisma } from '../../db.js';
import {
  QuerySongArgs,
  ResolversParentTypes,
  SongResolvers,
} from '../../__generated__/resolvers-types.js';

const songQueries: SongResolvers = {
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
    } catch (error) {
      console.error(`Error fetching songs: ${error}`);
      return [];
    }
  },

  song: async (_, { id }: QuerySongArgs) => {
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
    } catch (error) {
      console.log(`this is the error: ${error}`);
    }
  },
};

export default songQueries;
