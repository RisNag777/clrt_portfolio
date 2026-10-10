import { Navigate, useParams } from 'react-router-dom'
import { ArtifactView } from '../components/ArtifactView'
import { getArtifactById } from '../data/portfolio'

export function ArtifactDetailPage() {
  const { id } = useParams()
  const artifact = id ? getArtifactById(id) : undefined

  if (!artifact) {
    return <Navigate to="/artifacts" replace />
  }

  return (
    <div className="container">
      <ArtifactView artifact={artifact} showBackLink />
    </div>
  )
}
