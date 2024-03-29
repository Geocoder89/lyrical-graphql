import { Lyric } from '@prisma/client';
import {
  MutationLikeLyricArgs,
  MutationResolvers,
} from '../../__generated__/resolvers-types.js';
import { Prisma } from '../../db.js';

const lyricMutation: MutationResolvers = {
  likeLyric: async (
    _parent: {},
    { lyricId }: MutationLikeLyricArgs
  ): Promise<Lyric> => {
    // find the lyric by ID

    const lyric = await Prisma.lyric.findUnique({
      where: {
        id: lyricId,
      },
    });

    // throw an error if the id entered does not match

    if (!lyric) {
      throw new Error(`Lyric with ID ${lyricId} not found`);
    }

    // increment the likes count

    const updatedLyric = await Prisma.lyric.update({
      where: {
        id: lyricId,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    return updatedLyric;
  },
};

export default lyricMutation;
