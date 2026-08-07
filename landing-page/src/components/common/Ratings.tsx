import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
interface RatingProp {
  rating: number;
}
function Ratings({ rating }: RatingProp) {
  return (
    <div>
      <div className="flex gap-1 text-amber-300">
        {[1, 2, 3, 4, 5].map((star: number) => {
          if (rating >= star) {
            return <FaStar key={star} />;
          }
          if (rating >= star - 0.5) {
            return <FaStarHalfAlt key={star} />;
          }
          return <FaStarHalfAlt key={star} />;
        })}
      </div>
    </div>
  );
}

export default Ratings;
