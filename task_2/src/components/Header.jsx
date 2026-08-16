function Header() {
  return (
    <header className="site-header">
      {/* Website logo */}
      <h1 className="logo">watch.it</h1>

      {/* Movie category navigation */}
      <nav className="main-nav">
        <a href="#">Action</a>
        <a href="#">Comedy</a>
        <a href="#">Romance</a>
        <a href="#">Drama</a>
      </nav>

      {/* Search button */}
      <button className="search-button">SEARCH</button>
    </header>
  )
}

export default Header