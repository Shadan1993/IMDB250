import "../../../styles/card.css";
const Card = ({
  id,
  title,
  poster,
  year,
  country,
  imdb_ranting,
  genres,
  images,
}) => {
  return (
    <>
      <div class="col-lg-3 col-md-4 col-sm-12 mb-3 ">
        <div class="card">
          <img src={poster} alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{id} - {title}</h5>
            <p class="card-text">
              تولید : {year}
              <br />
              کشور : {country}
              <br />
              ژانر : {genres[0]} , {genres[1]}
              <br />
              رنکینگ : {imdb_ranting}
            </p>
            <a href="" class="btn btn-outline-success btn-md">
              ادامه مطلب
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
