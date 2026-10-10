import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { artifacts, outcomesForArtifact, type Artifact } from '../data/portfolio'
import { RichText } from './RichText'

function isImagePath(path: string) {
  return /\.(png|jpe?g|gif|webp|svg)$/i.test(path)
}

export function ArtifactView({
  artifact,
  showBackLink = false,
}: {
  artifact: Artifact
  showBackLink?: boolean
}) {
  const outcomes = outcomesForArtifact(artifact)
  const hasFile = Boolean(artifact.filePath)
  const hasImages = Boolean(artifact.images?.length)
  const number = artifacts.findIndex((item) => item.id === artifact.id) + 1
  const imageSide = hasImages && number > 0 ? (number % 2 === 0 ? 'left' : 'right') : null
  const TitleTag = showBackLink ? 'h1' : 'h2'
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!zoomed) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setZoomed(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoomed])

  function openZoom(src: string, alt: string) {
    setZoomed({ src, alt })
  }

  const media = hasImages ? (
    <div className={`artifact-gallery${artifact.stackImages ? ' artifact-gallery--stack' : ''}`}>
      {artifact.images?.map((image) => (
        <button
          key={image.src}
          type="button"
          className="artifact-zoom-trigger"
          onClick={() => openZoom(image.src, image.alt)}
        >
          <img src={image.src} alt={image.alt} />
        </button>
      ))}
    </div>
  ) : hasFile ? (
    <>
            {isImagePath(artifact.filePath) ? (
              <button
                type="button"
                className="artifact-zoom-trigger"
                onClick={() => openZoom(artifact.filePath, `Preview of ${artifact.title}`)}
              >
                <img src={artifact.filePath} alt={`Preview of ${artifact.title}`} />
              </button>
            ) : null}
      <p style={{ marginTop: isImagePath(artifact.filePath) ? '1rem' : 0 }}>
        <a href={artifact.filePath} target="_blank" rel="noreferrer">
          {artifact.fileLabel || 'Open artifact file'}
        </a>
      </p>
    </>
  ) : (
    <p className="artifact-panel__empty">
      {artifact.fileLabel} Set <code>filePath</code> in <code>src/data/portfolio.ts</code> once your
      file is ready (for example <code>/artifacts/my-assignment.pdf</code>).
    </p>
  )

  return (
    <article
      className={[
        showBackLink ? 'artifact-detail' : 'artifact-entry',
        imageSide ? `artifact-entry--image-${imageSide}` : '',
      ]
        .filter(Boolean)
        .join(' ')}
      id={artifact.id}
    >
      <div className="artifact-entry__copy">
        <header className={showBackLink ? 'page-header' : 'artifact-entry__header'}>
          {showBackLink ? (
            <Link className="back-link" to="/artifacts">
              ← All artifacts
            </Link>
          ) : null}
          <div className="artifact-detail__meta">
            <span className="tag">{artifact.type}</span>
            {outcomes.map((outcome) => (
              <span key={outcome.id} className="tag tag--outcome">
                CLO {outcome.number}
              </span>
            ))}
          </div>
          <TitleTag className={showBackLink ? 'page-header__title' : 'artifact-entry__title'}>
            {artifact.title}
          </TitleTag>
          {artifact.subtitle ? (
            <p className={showBackLink ? 'page-header__lede' : 'artifact-entry__subtitle'}>
              {artifact.subtitle}
            </p>
          ) : null}
        </header>

        <section className="caption-block" aria-labelledby={`${artifact.id}-caption`}>
          <h3 className="sr-only" id={`${artifact.id}-caption`}>
            Caption
          </h3>

          <div className="caption-section">
            <h3>Course learning outcome addressed</h3>
            <p>{artifact.caption.outcomeAddressed}</p>
            {outcomes.length > 0 ? (
              <ul>
                {outcomes.map((outcome) => (
                  <li key={outcome.id}>
                    <strong>CLO {outcome.number}:</strong> <RichText text={outcome.text} />
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
      </div>

      {imageSide ? <div className="artifact-entry__media">{media}</div> : (
        <section className="artifact-panel" aria-labelledby={`${artifact.id}-file`}>
          <h3 className="artifact-panel__label" id={`${artifact.id}-file`}>
            Artifact
          </h3>
          {media}
        </section>
      )}

      {zoomed
        ? createPortal(
            <div
              className="artifact-zoom"
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged artifact image"
              onClick={() => setZoomed(null)}
            >
              <button type="button" className="artifact-zoom__close" onClick={() => setZoomed(null)}>
                Close
              </button>
              <img src={zoomed.src} alt={zoomed.alt} onClick={(event) => event.stopPropagation()} />
            </div>,
            document.body,
          )
        : null}
    </article>
  )
}
