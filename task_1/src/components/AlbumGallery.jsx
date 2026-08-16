import allEncores from '../assets/all-encores.jpg'
import articulation from '../assets/articulation.jpg'
import blurred from '../assets/blurred.jpg'
import encores2 from '../assets/encores-2.jpg'
import eulogyForEvolution from '../assets/eulogy-for-evolution.jpg'

function AlbumGallery() {
  return (
    <section className="album-gallery">
      {/* Large featured album */}
      <img
        className="featured-album"
        src={allEncores}
        alt="All Encores album cover"
      />

      {/* Four smaller album covers */}
      <div className="small-albums">
        <img src={articulation} alt="Articulation album cover" />
        <img src={blurred} alt="Blurred album cover" />
        <img src={encores2} alt="Encores 2 album cover" />
        <img
          src={eulogyForEvolution}
          alt="Eulogy for Evolution album cover"
        />
      </div>
    </section>
  )
}

export default AlbumGallery