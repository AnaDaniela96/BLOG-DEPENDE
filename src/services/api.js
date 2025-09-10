import movies from "@/features/play/data/movies";

export const listMovies = async () => Promise.resolve(movies);
export const getMovie = async (id) =>
  Promise.resolve(movies.find(m => String(m.id) === String(id)));
