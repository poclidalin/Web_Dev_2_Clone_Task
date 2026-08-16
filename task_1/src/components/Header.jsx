import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="site-header">
      {/* Website logo */}
      <img className="logo" src={logo} alt="Erased Tapes logo" />

      {/* Main navigation */}
      <nav className="main-nav">
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>
    </header>
  )
}

export default Header