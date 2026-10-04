export type ArtifactType = 'assignment' | 'discussion' | 'activity' | 'reflection'

export interface LearningOutcome {
  id: string
  number: number
  text: string
}

export interface Artifact {
  id: string
  title: string
  type: ArtifactType
  outcomeIds: string[]
  summary: string
  /** Path under /public, e.g. /artifacts/my-file.pdf — leave empty until you add a file */
  filePath: string
  fileLabel: string
  caption: {
    outcomeAddressed: string
    whatILearned: string
    citations: string[]
    whatItShows: string
  }
}

export interface GradeJustification {
  proposedGrade: string
  rationale: string
  isPlaceholder: boolean
}

export const course = {
  studentName: 'Rishab Nagaraj',
  courseCode: 'TEED 5113-02',
  courseTitle: 'Culturally and Linguistically Responsive Teaching-I',
  shortTitle: 'CLRT-I',
  term: 'FQ26',
  intro:
    'A living record of my learning as I develop as a culturally and linguistically responsive educator—grounded in reflection, community, and justice-oriented practice.',
}

export const learningOutcomes: LearningOutcome[] = [
  {
    id: 'clo-1',
    number: 1,
    text: 'Explain the roles of culture, language, and social context in how students learn.',
  },
  {
    id: 'clo-2',
    number: 2,
    text: 'Define and explain teaching culturally and linguistically diverse students as political, multidimensional, and connecting to families and communities, and building community.',
  },
  {
    id: 'clo-3',
    number: 3,
    text: 'Reflect on and deepen understanding of yourself as a sociocultural being, engaged in the process of becoming a <em>transformational agent for justice</em> who aims to help change the <em>status quo</em> for the common good in education.',
  },
  {
    id: 'clo-4',
    number: 4,
    text: 'Explain and synthesize foundational principles of culturally sustaining and linguistically responsive pedagogy, and use them to analyze the teaching and learning of culturally and linguistically diverse students.',
  },
  {
    id: 'clo-5',
    number: 5,
    text: 'Explain basic principles of second language learning and how they are addressed in linguistically responsive teaching.',
  },
  {
    id: 'clo-6',
    number: 6,
    text: 'Explain language variation, language register, linguistic repertoires, relationships between language, culture, and learning, and how all of these concepts are central to the teaching and learning of culturally and linguistically diverse students.',
  },
]

export const artifacts: Artifact[] = [
  {
    id: 'culture-language-context',
    title: 'Culture, Language & Social Context in Learning',
    type: 'assignment',
    outcomeIds: ['clo-1'],
    summary:
      'Placeholder artifact exploring how culture, language, and social context shape student learning.',
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed:
        'This artifact addresses Course Learning Outcome 1: Explain the roles of culture, language, and social context in how students learn.',
      whatILearned:
        '[Replace this paragraph] Describe what you learned about culture, language, and social context—and why this matters for teaching and learning with culturally and linguistically diverse students.',
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading or video title.',
      ],
      whatItShows:
        '[Replace this paragraph] Explain what this artifact shows about your learning—e.g., a powerful moment of insight, growth in knowledge/skill/disposition, or a challenge that stretched your thinking.',
    },
  },
  {
    id: 'teaching-as-political',
    title: 'Teaching as Political & Community-Connected Work',
    type: 'discussion',
    outcomeIds: ['clo-2'],
    summary:
      'Placeholder artifact examining teaching CLD students as political, multidimensional, and rooted in families and communities.',
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed:
        'This artifact addresses Course Learning Outcome 2: Define and explain teaching culturally and linguistically diverse students as political, multidimensional, and connecting to families and communities, and building community.',
      whatILearned:
        '[Replace this paragraph] Describe what you learned about the political and multidimensional nature of teaching CLD students, and why connecting to families and communities matters.',
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading or video title.',
      ],
      whatItShows:
        '[Replace this paragraph] Explain what this artifact shows about your learning—growth in disposition toward community, a challenge to prior assumptions, or a powerful shift in how you see the work of teaching.',
    },
  },
  {
    id: 'sociocultural-self',
    title: 'Myself as a Sociocultural Being',
    type: 'reflection',
    outcomeIds: ['clo-3'],
    summary:
      'Placeholder reflection on identity, positionality, and becoming a transformational agent for justice in education.',
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed:
        'This artifact addresses Course Learning Outcome 3: Reflect on and deepen understanding of yourself as a sociocultural being, engaged in the process of becoming a transformational agent for justice who aims to help change the status quo for the common good in education.',
      whatILearned:
        '[Replace this paragraph] Describe what you learned about yourself as a sociocultural being and how this shapes your path toward justice-oriented educational practice.',
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading or video title.',
      ],
      whatItShows:
        '[Replace this paragraph] Explain what this artifact shows about your learning—especially points of powerful self-reflection, dispositional growth, or moments that challenged you.',
    },
  },
  {
    id: 'culturally-sustaining-pedagogy',
    title: 'Culturally Sustaining & Linguistically Responsive Pedagogy',
    type: 'assignment',
    outcomeIds: ['clo-4'],
    summary:
      'Placeholder artifact synthesizing principles of culturally sustaining and linguistically responsive pedagogy.',
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed:
        'This artifact addresses Course Learning Outcome 4: Explain and synthesize foundational principles of culturally sustaining and linguistically responsive pedagogy, and use them to analyze the teaching and learning of culturally and linguistically diverse students.',
      whatILearned:
        '[Replace this paragraph] Describe the foundational principles you synthesized and how you used them to analyze teaching and learning with CLD students.',
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading or video title.',
      ],
      whatItShows:
        '[Replace this paragraph] Explain what this artifact shows about your learning—growth in analytical skill, deeper pedagogical knowledge, or a challenge in applying theory to practice.',
    },
  },
  {
    id: 'second-language-learning',
    title: 'Principles of Second Language Learning',
    type: 'activity',
    outcomeIds: ['clo-5'],
    summary:
      'Placeholder artifact on basic principles of second language learning in linguistically responsive teaching.',
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed:
        'This artifact addresses Course Learning Outcome 5: Explain basic principles of second language learning and how they are addressed in linguistically responsive teaching.',
      whatILearned:
        '[Replace this paragraph] Describe what you learned about second language learning principles and how linguistically responsive teaching addresses them—and why this matters for CLD students.',
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading or video title.',
      ],
      whatItShows:
        '[Replace this paragraph] Explain what this artifact shows about your learning—growth in knowledge of L2 principles, skill in designing responsive supports, or a concept that challenged you.',
    },
  },
  {
    id: 'language-variation-repertoires',
    title: 'Language Variation, Register & Linguistic Repertoires',
    type: 'assignment',
    outcomeIds: ['clo-6'],
    summary:
      'Placeholder artifact on language variation, register, repertoires, and their centrality to teaching CLD students.',
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed:
        'This artifact addresses Course Learning Outcome 6: Explain language variation, language register, linguistic repertoires, relationships between language, culture, and learning, and how all of these concepts are central to the teaching and learning of culturally and linguistically diverse students.',
      whatILearned:
        '[Replace this paragraph] Describe what you learned about language variation, register, and linguistic repertoires—and why these concepts are central to teaching and learning with CLD students.',
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading or video title.',
      ],
      whatItShows:
        '[Replace this paragraph] Explain what this artifact shows about your learning—a powerful shift in how you view language, growth in knowledge, or a challenge that deepened your understanding.',
    },
  },
]

export const gradeJustification: GradeJustification = {
  proposedGrade: 'A',
  rationale:
    '[Replace this paragraph with your grade justification.] Write one paragraph proposing your grade for the course and justifying it against all descriptive criteria in the course rubric. You may reference this CLRT-I Portfolio as part of your rationale, but not as the only justification. Address the full set of rubric criteria with concrete evidence from your work across the quarter.',
  isPlaceholder: true,
}

export function getOutcomeById(id: string): LearningOutcome | undefined {
  return learningOutcomes.find((o) => o.id === id)
}

export function getArtifactById(id: string): Artifact | undefined {
  return artifacts.find((a) => a.id === id)
}

export function outcomesForArtifact(artifact: Artifact): LearningOutcome[] {
  return artifact.outcomeIds
    .map((id) => getOutcomeById(id))
    .filter((o): o is LearningOutcome => Boolean(o))
}
