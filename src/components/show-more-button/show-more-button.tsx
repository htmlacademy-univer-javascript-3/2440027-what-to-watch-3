type ShowMoreButtonProps = {
    onClick: () => void;
    isVisible: boolean;
  };

const ShowMoreButton = ({ onClick, isVisible }: ShowMoreButtonProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>
          Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;

