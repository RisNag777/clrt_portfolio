import { ArtifactView } from '../components/ArtifactView'
import { artifacts } from '../data/portfolio'

export function ArtifactsPage() {
  return (
    <div className="container" style={{ paddingBottom: '3.5rem' }}>
      <header className="page-header">
        <h1 className="page-header__title">Portfolio artifacts</h1>
        <p className="page-header__lede">
          Each artifact includes a caption that explains the course learning outcome addressed, what
          was learned (with citations), and what the work shows about growth as a culturally and
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
