import { course, courseRubric, gradeJustification } from '../data/portfolio'

export function GradePage() {
  return (
    <div className="container" style={{ paddingBottom: '3.5rem' }}>
      <header className="page-header">
        <h1 className="page-header__title">Course rubric & grade</h1>
        <p className="page-header__lede">
          The grading criteria for {course.courseCode} {course.shortTitle} ({course.term}), followed
          by my proposed grade and a rationale that addresses the categories below.
        </p>
      </header>

      <section className="rubric-section" aria-labelledby="rubric-heading">
        <h2 className="section__title" id="rubric-heading">
          Course rubric
        </h2>
        <div className="rubric-table-wrap">
          <table className="rubric-table">
            <thead>
              <tr>
                <th scope="col">Grade</th>
                <th scope="col">Category</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {courseRubric.map((level) =>
                level.criteria.map((criterion, index) => (
                  <tr key={`${level.grade}-${criterion.category}`}>
                    {index === 0 ? (
                      <th scope="rowgroup" rowSpan={level.criteria.length} className="rubric-table__grade">
                        {level.grade}
                      </th>
                    ) : null}
                    <td className="rubric-table__category">{criterion.category}</td>
                    <td className="rubric-table__details">
                      <ul>
                        {criterion.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="justification-section" aria-labelledby="justification-heading">
        <h2 className="section__title" id="justification-heading">
          Grade justification
        </h2>
        <div className="grade-panel">
          {gradeJustification.isPlaceholder ? (
            <span className="placeholder-note">Placeholder — replace before submission</span>
          ) : null}
          <p className="section__label" style={{ marginBottom: '0.35rem' }}>
            Proposed grade
          </p>
          <p className="grade-panel__mark">{gradeJustification.proposedGrade}</p>
          <p>{gradeJustification.rationale}</p>
        </div>
      </section>
    </div>
  )
}
