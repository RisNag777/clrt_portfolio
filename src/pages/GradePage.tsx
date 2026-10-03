import { course, gradeJustification } from '../data/portfolio'

export function GradePage() {
  return (
    <div className="container" style={{ paddingBottom: '3.5rem' }}>
      <header className="page-header">
        <h1 className="page-header__title">Grade justification</h1>
        <p className="page-header__lede">
          Proposed grade for {course.courseCode} {course.shortTitle} ({course.term}), with a
          rationale that addresses the descriptive criteria in the course rubric.
        </p>
      </header>

      <div className="grade-panel">
        {gradeJustification.isPlaceholder ? (
          <span className="placeholder-note">Placeholder — replace before submission</span>
        ) : null}
        <p className="section__label" style={{ marginBottom: '0.35rem' }}>
          Proposed grade
        </p>
        <p className="grade-panel__mark">{gradeJustification.proposedGrade}</p>
        <h2 className="sr-only">Rationale</h2>
        <p>{gradeJustification.rationale}</p>
      </div>
    </div>
  )
}
