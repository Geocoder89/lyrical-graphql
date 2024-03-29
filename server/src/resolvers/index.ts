import songMutations from "./songs/mutations.js";
import songQueries from "./songs/queries.js";
import lyricsMutations from "./lyrics/mutations.js";
import lyricsQueries from "./lyrics/queries.js";


const resolvers = {
  Query: {
    ...songQueries,
    ...lyricsQueries
  },
  Mutation: {
    ...songMutations,
    ...lyricsMutations
  }
}

export default resolvers

