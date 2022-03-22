import StarRating from '../StarRating'

const Description = ({name, tags, reviews}) => {
  return (
    <div className="description">
      <div>
        <span>{name} </span>

        {tags &&
          tags.map((tag, index) => (
            <span key={index} className="tag text-mute">
              {tag}
            </span>
          ))}
      </div>

      <div>
        <div className="description__rating">
          <StarRating initialRating={Number(reviews.rating)} readonly />
          <span className="text-orange">{reviews.rating}</span>
          <span className="text-mute">{reviews.count} Reviews</span>
          <span className="text-gray buyers">
            {reviews.total_buyers} buyers
          </span>
        </div>
      </div>
    </div>
  )
}

export default Description
