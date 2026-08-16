import Header from './components/Header'
import MovieGrid from './components/MovieGrid'

function App() {
  return (
    <>
      {/* Website header */}
      <Header />

      {/* Main movie content */}
      <main>
        <MovieGrid />
      </main>
    </>
  )
}

export default App