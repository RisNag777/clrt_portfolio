import { ArtifactView } from '../components/ArtifactView'
import { artifacts } from '../data/portfolio'

export function ArtifactsPage() {
  return (
    <div className="container" style={{ paddingBottom: '3.5rem' }}>
      <header className="page-header">
        <h1 className="page-header__title">Portfolio artifacts</h1>
        <p className="page-header__lede">
          Each artifact includes an explanation of the course learning outcome addressed, what was learned, and what the work shows about my growth as a culturally and
          linguistically responsive educator.
        </p>
      </header>

      <div className="artifact-entries">
        {artifacts.map((artifact) => (
          <ArtifactView key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </div>
  )
}
