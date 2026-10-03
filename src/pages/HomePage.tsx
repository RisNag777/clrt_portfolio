import { Link } from 'react-router-dom'
import { artifacts, course, learningOutcomes, outcomesForArtifact } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function HomePage() {
  const outcomesRef = useReveal<HTMLElement>()

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">
            {course.courseCode} · {course.term}
          </p>
          <h1 className="hero__name">{course.studentName}</h1>
          <p className="hero__course">
            {course.courseTitle} ({course.shortTitle})
          </p>
          <p className="hero__lede">{course.intro}</p>
          <div className="cta-row">
            <Link className="btn btn--primary" to="/artifacts">
              View portfolio artifacts
            </Link>
            <Link className="btn btn--ghost" to="/grade">
              Grade justification
            </Link>
          </div>
        </div>
      </section>

      <section className="section" ref={outcomesRef} aria-labelledby="outcomes-heading">
        <div className="container">
          <p className="section__label">Course learning outcomes</p>
          <h2 className="section__title" id="outcomes-heading">
            What this portfolio demonstrates
          </h2>
          <p className="section__intro">
            Six learning outcomes guide the work in this course. Each artifact below is mapped to
            evidence of growth toward one or more of these outcomes.
          </p>
          <ol className="outcome-list">
            {learningOutcomes.map((outcome) => (
              <li key={outcome.id} className="outcome-item" data-reveal>
                <span className="outcome-item__num" aria-hidden="true">
                  {String(outcome.number).padStart(2, '0')}
                </span>
                <p className="outcome-item__text">{outcome.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="artifacts-heading">
        <div className="container">
          <p className="section__label">Portfolio artifacts</p>
          <h2 className="section__title" id="artifacts-heading">
            Evidence of learning
          </h2>
          <p className="section__intro">
            Five to seven artifacts—assignments, discussions, activities, and reflections—each with
            a caption that names the outcome, what was learned, and what the work shows.
          </p>
          <ul className="artifact-list">
            {artifacts.map((artifact) => {
              const outcomes = outcomesForArtifact(artifact)
              return (
                <li key={artifact.id}>
                  <Link className="artifact-row" to={`/artifacts/${artifact.id}`}>
                    <div className="artifact-row__meta">
                      <span className="tag">{artifact.type}</span>
                      {outcomes.map((o) => (
                        <span key={o.id} className="tag tag--outcome">
                          CLO {o.number}
                        </span>
                      ))}
                    </div>
                    <h3 className="artifact-row__title">{artifact.title}</h3>
                    <p className="artifact-row__summary">{artifact.summary}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="cta-row">
            <Link className="btn btn--ghost" to="/artifacts">
              Browse all artifacts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
