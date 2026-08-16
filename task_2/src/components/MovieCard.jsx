function MovieCard({ image, title, description, className = '' }) {
  return (
    <article className={`movie-card ${className}`}>
      {/* Movie poster */}
      <img src={image} alt={`${title} movie poster`} />

      {/* Movie description and watch button */}
      <div className="movie-info">
        <p>{description}</p>
        <button>WATCH NOW</button>
      </div>
    </article>
  )
}

export default MovieCard