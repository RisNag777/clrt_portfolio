import { Link } from 'react-router-dom'
import { artifacts, outcomesForArtifact } from '../data/portfolio'

export function ArtifactsPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-header__title">Portfolio artifacts</h1>
        <p className="page-header__lede">
          Each artifact includes a caption that explains the course learning outcome addressed, what
          was learned (with citations), and what the work shows about growth as a culturally and
          linguistically responsive educator.
        </p>
      </header>

      <ul className="artifact-list" style={{ paddingBottom: '3rem' }}>
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
                <h2 className="artifact-row__title">{artifact.title}</h2>
                <p className="artifact-row__summary">{artifact.summary}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
