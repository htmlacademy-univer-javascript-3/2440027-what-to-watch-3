import MainPage from '../MainPage';


type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseDate: string;
};

function App(props: AppProps) {
  return (
    <div className="app">
      <
        MainPage
        promoFilmTitle={props.promoTitle}
        promoFilmGenre={props.promoGenre}
        promoFilmReleaseDate={props.promoReleaseDate}
      />
    </div>
  );
}

export default App;
