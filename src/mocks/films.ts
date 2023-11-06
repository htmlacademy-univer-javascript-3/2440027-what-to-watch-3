export interface BaseFilm {
    id: string;
    title: string;
    imageSrc: string;
    description: string;
    releaseDate: string;
    genre: string;
    trailer: string;
  }


export const films: BaseFilm[] = [
  {
    id: '1',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imageSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    description: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
    releaseDate: '2018-11-16',
    genre: 'Fantasy',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    imageSrc: 'img/bohemian-rhapsody.jpg',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid.',
    releaseDate: '2018-10-24',
    genre: 'Biography, Drama, Music',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
  },
  {
    id: '3',
    title: 'Macbeth',
    imageSrc: 'img/macbeth.jpg',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.',
    releaseDate: '2015-10-02',
    genre: 'Drama, History, War',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '4',
    title: 'Aviator',
    imageSrc: 'img/aviator.jpg',
    description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career.',
    releaseDate: '2004-12-25',
    genre: 'Biography, Drama',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
  },
  {
    id: '5',
    title: 'We need to talk about Kevin',
    imageSrc: 'img/we-need-to-talk-about-kevin.jpg',
    description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does.',
    releaseDate: '2011-09-28',
    genre: 'Drama, Thriller',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '6',
    title: 'What We Do in the Shadows',
    imageSrc: 'img/what-we-do-in-the-shadows.jpg',
    description: 'Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, and trying to get into nightclubs.',
    releaseDate: '2014-06-19',
    genre: 'Comedy, Horror',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
  },
  {
    id: '7',
    title: 'Revenant',
    imageSrc: 'img/revenant.jpg',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    releaseDate: '2015-12-25',
    genre: 'Action, Adventure, Drama',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },

  {
    id: '8',
    title: 'Johnny English',
    imageSrc: 'img/johnny-english.jpg',
    description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident, yet unintelligent spy, becomes Britain\'s only spy.',
    releaseDate: '2003-04-06',
    genre: 'Action, Adventure, Comedy',
    trailer: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
  }
];
