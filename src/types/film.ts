export type FilmShortDescription = {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
}

export type FilmFullDescription = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: string[];
    runTime: number;
    genre: string;
    released: number;
    isFavorite?: boolean;
}

export type PromoFilmDescription = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    videoLink: string;
    genre: string;
    released: number;
    isFavorite: boolean;
}
