function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>

      {/* First comment */}
      <div className="comment">
        <h3>soundseeker92</h3>
        <p>
          This article beautifully captures the essence of experimental sound.
          Erased Tapes is truly pushing boundaries. Makes me want to revisit
          Nils Frahm's early work. I wonder what you think about their older
          stuff?
        </p>
      </div>

      {/* Second comment */}
      <div className="comment">
        <h3>Ted Baker</h3>
        <p>
          I've been following the label for years—so glad someone's finally
          writing about their impact.
        </p>
      </div>

      {/* Third comment */}
      <div className="comment">
        <h3>Queen_of_noise</h3>
        <p>
          I discovered Erased Tapes through Ólafur Arnalds—this article brought
          back memories and be and my friends listening together. A bit too
          poetic for my taste, but still compelling.
        </p>
      </div>
    </section>
  )
}

export default Comments