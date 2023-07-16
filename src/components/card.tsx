interface CardData {
  number: number;
  title: string;
}

export const Card = ({ number, title }: CardData) => {
  return (
    <article className="card">
      <div className={`card__container`}>
        <p className="card__number">
          <span className="card__number-shadow"></span>
          {number}
        </p>
      </div>
      <p className="card__desc">{title.toUpperCase()}</p>
    </article>
  );
};
