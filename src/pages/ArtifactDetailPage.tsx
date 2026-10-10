import { Link, Navigate, useParams } from 'react-router-dom'
import { RichText } from '../components/RichText'
import { getArtifactById, outcomesForArtifact } from '../data/portfolio'

function isImagePath(path: string) {
  return /\.(png|jpe?g|gif|webp|svg)$/i.test(path)
}

export function ArtifactDetailPage() {
  const { id } = useParams()
  const artifact = id ? getArtifactById(id) : undefined

  if (!artifact) {
    return <Navigate to="/artifacts" replace />
  }

  const outcomes = outcomesForArtifact(artifact)
  const hasFile = Boolean(artifact.filePath)

  return (
    <article className="container artifact-detail">
      <header className="page-header">
        <Link className="back-link" to="/artifacts">
          ← All artifacts
        </Link>
        <div className="artifact-detail__meta">
          <span className="tag">{artifact.type}</span>
          {outcomes.map((o) => (
            <span key={o.id} className="tag tag--outcome">
              CLO {o.number}
            </span>
          ))}
        </div>
        <h1 className="page-header__title">{artifact.title}</h1>
        <p className="page-header__lede">{artifact.summary}</p>
      </header>

      <section className="artifact-panel" aria-labelledby="artifact-file-heading">
        <h2 className="artifact-panel__label" id="artifact-file-heading">
          Artifact
        </h2>
        {artifact.images?.length ? (
          <div className="artifact-gallery">
            {artifact.images.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        ) : hasFile ? (
          <>
            {isImagePath(artifact.filePath) ? (
              <img src={artifact.filePath} alt={`Preview of ${artifact.title}`} />
            ) : null}
            <p style={{ marginTop: isImagePath(artifact.filePath) ? '1rem' : 0 }}>
              <a href={artifact.filePath} target="_blank" rel="noreferrer">
                {artifact.fileLabel || 'Open artifact file'}
              </a>
            </p>
          </>
        ) : (
          <p className="artifact-panel__empty">
            {artifact.fileLabel} Set <code>filePath</code> in{' '}
            <code>src/data/portfolio.ts</code> once your file is ready (for example{' '}
            <code>/artifacts/my-assignment.pdf</code>).
          </p>
        )}
      </section>

      <section className="caption-block" aria-labelledby="caption-heading">
        <h2 className="sr-only" id="caption-heading">
          Caption
        </h2>

        <div className="caption-section">
          <h3>Course learning outcome addressed</h3>
          <p>{artifact.caption.outcomeAddressed}</p>
          {outcomes.length > 0 ? (
            <ul>
              {outcomes.map((o) => (
                <li key={o.id}>
                  <strong>CLO {o.number}:</strong> <RichText text={o.text} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="caption-section">
          <h3>What I learned and why it matters</h3>
          <p>{artifact.caption.whatILearned}</p>
          {artifact.caption.citations.length > 0 ? (
            <>
              <h3 style={{ marginTop: '1.25rem' }}>Sources cited</h3>
              <ul>
                {artifact.caption.citations.map((citation) => (
                  <li key={citation}>{citation}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>

        <div className="caption-section">
          <h3>What this artifact shows about my learning</h3>
          <p>{artifact.caption.whatItShows}</p>
        </div>
      </section>
    </article>
  )
}
