import movies from "@/features/play/movies/data/movies";

export const listMovies = async () => Promise.resolve(movies);
export const getMovie = async (id) =>
  Promise.resolve(movies.find(m => String(m.id) === String(id)));
