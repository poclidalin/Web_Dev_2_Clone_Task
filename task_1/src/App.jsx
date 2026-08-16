import Header from './components/Header'
import Article from './components/Article'
import AlbumGallery from './components/AlbumGallery'
import Author from './components/Author'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Page header and navigation */}
      <Header />

      {/* Main blog content */}
      <main>
        <Article />
        <AlbumGallery />
        <Author />
        <Comments />
      </main>

      {/* Page footer */}
      <Footer />
    </>
  )
}

export default App