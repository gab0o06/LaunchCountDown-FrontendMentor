interface CardData {
  number: number;
  title: string;
}

export const Card = ({ number, title }: CardData) => {
  return (
    <div className="flip__card flip">
      <div className="top">4</div>
      <div className="bottom">4</div>
    </div>
  );
};
