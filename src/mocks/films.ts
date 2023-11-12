export interface BaseFilm {
  director?: string;
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  releaseDate: string;
  genre: string;
  trailer: string;
  rating?: number;
  ratingLevel?: string;
  ratingCount?: number;
  starring?: string[];
  runTime?: number;
  reviews: Review[];
}


export interface Review {
  text: string;
  author: string;
  date: string;
  formattedDate: string;
  rating: number;
}

const mockReviews: Review[] = [
  {
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    author: 'Kate Muir',
    date: '2016-12-24',
    formattedDate: 'December 24, 2016',
    rating: 8.9
  },
  {
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. \'The Grand Budapest Hotel\' is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: '2015-11-18',
    formattedDate: 'November 18, 2015',
    rating: 8.0
  },
  {
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    author: 'Amanda Greever',
    date: '2015-11-18',
    formattedDate: 'November 18, 2015',
    rating: 8.0
  },
  {
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    author: 'Matthew Lickona',
    date: '2016-12-20',
    formattedDate: 'December 20, 2016',
    rating: 7.2
  },
  {
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: '2016-12-20',
    formattedDate: 'December 20, 2016',
    rating: 7.6
  },
  {
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: '2016-12-20',
    formattedDate: 'December 20, 2016',
    rating: 7.0
  }
];


export const films: BaseFilm[] = [
  {
    id: '1',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imageSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    description: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
    releaseDate: '2018-11-16',
    genre: 'Fantasy',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 8.8,
    ratingLevel: 'Very good',
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    director: 'David Yates',
    runTime: 134,
    reviews: mockReviews,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    imageSrc: 'img/bohemian-rhapsody.jpg',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid.',
    releaseDate: '2018-10-24',
    genre: 'Biography, Drama, Music',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    rating: 8.8,
    ratingLevel: 'Very good',
    ratingCount: 240,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    director: 'David Yates',
    runTime: 123,
    reviews: mockReviews,
  },
  {
    id: '3',
    title: 'Macbeth',
    imageSrc: 'img/macbeth.jpg',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.',
    releaseDate: '2015-10-02',
    genre: 'Drama, History, War',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 8.8,
    runTime: 123,
    reviews: mockReviews,
  },
  {
    id: '4',
    title: 'Aviator',
    imageSrc: 'img/aviator.jpg',
    description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career.',
    releaseDate: '2004-12-25',
    genre: 'Biography, Drama',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    rating: 8.8,
    reviews: mockReviews,
  },
  {
    id: '5',
    title: 'We need to talk about Kevin',
    imageSrc: 'img/we-need-to-talk-about-kevin.jpg',
    description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does.',
    releaseDate: '2011-09-28',
    genre: 'Drama, Thriller',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 8.8,
    reviews: mockReviews,
  },
  {
    id: '6',
    title: 'What We Do in the Shadows',
    imageSrc: 'img/what-we-do-in-the-shadows.jpg',
    description: 'Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, and trying to get into nightclubs.',
    releaseDate: '2014-06-19',
    genre: 'Comedy, Horror',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    rating: 8.8,
    reviews: mockReviews,
  },
  {
    id: '7',
    title: 'Revenant',
    imageSrc: 'img/revenant.jpg',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    releaseDate: '2015-12-25',
    genre: 'Action, Adventure, Drama',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    rating: 8.8,
    reviews: mockReviews,
  },

  {
    id: '8',
    title: 'Johnny English',
    imageSrc: 'img/johnny-english.jpg',
    description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident, yet unintelligent spy, becomes Britain\'s only spy.',
    releaseDate: '2003-04-06',
    genre: 'Action, Adventure, Comedy',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    rating: 8.8,
    reviews: mockReviews,
  }
];


// export const films: BaseFilm[] = [
//   {
//     id: '1',
//     title: 'Fantastic Beasts: The Crimes of Grindelwald',
//     imageSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
//     description: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
//     releaseDate: '2018-11-16',
//     genre: 'Fantasy',
//     trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
//   },
//   {
//     id: '2',
//     title: 'Bohemian Rhapsody',
//     imageSrc: 'img/bohemian-rhapsody.jpg',
//     description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid.',
//     releaseDate: '2018-10-24',
//     genre: 'Biography, Drama, Music',
//     trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
//   },
//   {
//     id: '3',
//     title: 'Macbeth',
//     imageSrc: 'img/macbeth.jpg',
//     description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.',
//     releaseDate: '2015-10-02',
//     genre: 'Drama, History, War',
//     trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id: '4',
//     title: 'Aviator',
//     imageSrc: 'img/aviator.jpg',
//     description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career.',
//     releaseDate: '2004-12-25',
//     genre: 'Biography, Drama',
//     trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
//   },
//   {
//     id: '5',
//     title: 'We need to talk about Kevin',
//     imageSrc: 'img/we-need-to-talk-about-kevin.jpg',
//     description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does.',
//     releaseDate: '2011-09-28',
//     genre: 'Drama, Thriller',
//     trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id: '6',
//     title: 'What We Do in the Shadows',
//     imageSrc: 'img/what-we-do-in-the-shadows.jpg',
//     description: 'Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, and trying to get into nightclubs.',
//     releaseDate: '2014-06-19',
//     genre: 'Comedy, Horror',
//     trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
//   },
//   {
//     id: '7',
//     title: 'Revenant',
//     imageSrc: 'img/revenant.jpg',
//     description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
//     releaseDate: '2015-12-25',
//     genre: 'Action, Adventure, Drama',
//     trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },

//   {
//     id: '8',
//     title: 'Johnny English',
//     imageSrc: 'img/johnny-english.jpg',
//     description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident, yet unintelligent spy, becomes Britain\'s only spy.',
//     releaseDate: '2003-04-06',
//     genre: 'Action, Adventure, Comedy',
//     trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
//   }
// ];
