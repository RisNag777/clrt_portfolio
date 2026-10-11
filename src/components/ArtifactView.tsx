import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { artifactTypeLabels, outcomesForArtifact, type Artifact } from '../data/portfolio'
import { RichText } from './RichText'

function CaptionParagraphs({ text }: { text: string }) {
  return text
    .split(/\n\n+/)
    .filter((paragraph) => paragraph.trim())
    .map((paragraph) => (
      <p key={paragraph}>
        <RichText text={paragraph} />
      </p>
    ))
}

export function ArtifactView({
  artifact,
  showBackLink = false,
}: {
  artifact: Artifact
  showBackLink?: boolean
}) {
  const outcomes = outcomesForArtifact(artifact)
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

  return (
    <article
      className={
        showBackLink
          ? 'artifact-detail artifact-entry--image-right'
          : 'artifact-entry artifact-entry--image-right'
      }
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
            <span className="tag">{artifactTypeLabels[artifact.type]}</span>
            {outcomes.map((outcome) => (
              <span key={outcome.id} className="clo-preview">
                <button type="button" className="tag tag--outcome clo-preview__trigger">
                  CLO {outcome.number}
                </button>
                <span className="clo-preview__card" role="tooltip">
                  {outcome.imagePath ? (
                    <img src={outcome.imagePath} alt={outcome.imageAlt ?? ''} />
                  ) : null}
                  <p>
                    <RichText text={outcome.text} />
                  </p>
                </span>
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
            <CaptionParagraphs text={artifact.caption.whatILearned} />
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

          {artifact.caption.whatItShows ? (
            <div className="caption-section">
              <h3>What this artifact shows about my learning</h3>
              <CaptionParagraphs text={artifact.caption.whatItShows} />
            </div>
          ) : null}
        </section>
      </div>

      <div className="artifact-entry__media">
        <div className={`artifact-gallery${artifact.stackImages ? ' artifact-gallery--stack' : ''}`}>
          {artifact.images.map((image) => (
            <button
              key={image.src}
              type="button"
              className="artifact-zoom-trigger"
              onClick={() => setZoomed({ src: image.src, alt: image.alt })}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>

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
