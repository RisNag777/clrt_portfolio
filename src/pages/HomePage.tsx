import { Link } from 'react-router-dom'
import { RichText } from '../components/RichText'
import { course, learningOutcomes } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function HomePage() {
  const outcomesRef = useReveal<HTMLElement>()

  return (
    <>
      <section className="hero">
        <div className="container hero__layout">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              {course.courseCode} · {course.term}
            </p>
            <h1 className="hero__name">{course.studentName}</h1>
            <p className="hero__course">
              {course.courseTitle} ({course.shortTitle})
            </p>
            <div className="hero__intro">
              <p className="hero__lede">{course.intro}</p>
            </div>
            <div className="cta-row">
              <Link className="btn btn--primary" to="/artifacts">
                View portfolio artifacts
              </Link>
              <Link className="btn btn--ghost" to="/grade">
                Grade justification
              </Link>
            </div>
          </div>
          <img
            className="hero__image"
            src="/images/community-hands-tree.png"
            alt="A colorful illustration of a tree where the trunk is a wood-textured hand and the leaves are many diverse, multicolored handprints, symbolizing community and inclusive education."
          />
        </div>
      </section>

      <section className="section" ref={outcomesRef} aria-labelledby="outcomes-heading">
        <div className="container">
          <p className="section__label">Course learning outcomes</p>
          <h2 className="section__title" id="outcomes-heading">
            What this portfolio demonstrates
          </h2>
          <p className="section__intro">
            Six learning outcomes guide the work in this course.
          </p>
          <ol className="outcome-list">
            {learningOutcomes.map((outcome) => {
              const imageSide =
                outcome.imagePath && (outcome.number % 2 === 0 ? 'left' : 'right')

              return (
                <li
                  key={outcome.id}
                  className={[
                    'outcome-item',
                    outcome.imagePath ? 'outcome-item--with-image' : '',
                    imageSide ? `outcome-item--image-${imageSide}` : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  data-reveal
                >
                  <div className="outcome-item__copy">
                    <span className="outcome-item__num" aria-hidden="true">
                      {String(outcome.number)}
                    </span>
                    <p className="outcome-item__text">
                      <RichText text={outcome.text} />
                    </p>
                  </div>
                  {outcome.imagePath ? (
                    <img
                      className="outcome-item__image"
                      src={outcome.imagePath}
                      alt={outcome.imageAlt ?? ''}
                    />
                  ) : null}
                </li>
              )
            })}
          </ol>
        </div>
      </section>
    </>
  )
}
