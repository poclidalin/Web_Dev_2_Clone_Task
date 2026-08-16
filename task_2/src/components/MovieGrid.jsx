import MovieCard from './MovieCard'

import rogerRabbit from '../assets/who-framed-roger-rabbit.jpg'
import hook from '../assets/hook.jpg'
import laLaLand from '../assets/la-la-land.jpg'
import hiddenFigures from '../assets/hidden-figures.jpg'
import palmSprings from '../assets/palm-springs.jpg'
import barbie from '../assets/barbie.jpg'

function MovieGrid() {
  return (
    <section className="movie-grid">
      {/* Featured movie */}
      <MovieCard
        className="featured"
        image={rogerRabbit}
        title="Who Framed Roger Rabbit"
        description="In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!"
      />

      {/* Standard movie cards */}
      <MovieCard
        image={hook}
        title="Hook"
        description="Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic."
      />

      <MovieCard
        image={laLaLand}
        title="La La Land"
        description="Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!"
      />

      {/* Wide desktop movie cards */}
      <MovieCard
        className="wide"
        image={hiddenFigures}
        title="Hidden Figures"
        description="Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers."
      />

      <MovieCard
        className="wide"
        image={palmSprings}
        title="Palm Springs"
        description="A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways."
      />

      <MovieCard
        className="wide"
        image={barbie}
        title="Barbie"
        description="Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!"
      />
    </section>
  )
}

export default MovieGrid