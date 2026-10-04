export type ArtifactType = 'assignment' | 'discussion' | 'activity' | 'reflection'

export interface LearningOutcome {
  id: string
  number: number
  text: string
  imagePath?: string
  imageAlt?: string
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
    'A record of my learning as I develop as a culturally and linguistically responsive educator who is grounded in reflection, community, and justice-oriented practice.',
}

export const learningOutcomes: LearningOutcome[] = [
  {
    id: 'clo-1',
    number: 1,
    text: 'Explain the roles of culture, language, and social context in how students learn.',
    imagePath: '/images/culture-dimensions.png',
    imageAlt:
      'An overhead chalkboard diagram of Culture connected to Ethnicity, Nation, Diversity, Tradition, Belief, and People, with diverse hands collaborating around the board.',
  },
  {
    id: 'clo-2',
    number: 2,
    text: 'Define and explain teaching culturally and linguistically diverse students as political, multidimensional, and connecting to families and communities, and building community.',
    imagePath: '/images/school-community.png',
    imageAlt:
      'A colorful illustration of a diverse school community gathered in front of a red brick school building in a city, with families, students, a school bus, and a skyline in the background.',
  },
  {
    id: 'clo-3',
    number: 3,
    text: 'Reflect on and deepen understanding of yourself as a sociocultural being, engaged in the process of becoming a <em>transformational agent for justice</em> who aims to help change the <em>status quo</em> for the common good in education.',
    imagePath: '/images/global-learning-network.png',
    imageAlt:
      'A stylized illustration of diverse people reading, teaching, and connecting through a network of lines linking books, technology, and global symbols.',
  },
  {
    id: 'clo-4',
    number: 4,
    text: 'Explain and synthesize foundational principles of culturally sustaining and linguistically responsive pedagogy, and use them to analyze the teaching and learning of culturally and linguistically diverse students.',
    imagePath: '/images/representation-in-curriculum.png',
    imageAlt:
      'A cartoon of diverse children looking skeptically at a large red book titled The Big Book of White Men, with a speech bubble asking How are we supposed to relate to this?',
  },
  {
    id: 'clo-5',
    number: 5,
    text: 'Explain basic principles of second language learning and how they are addressed in linguistically responsive teaching.',
    imagePath: '/images/itchy-feet-language-learning.png',
    imageAlt:
      "A comic strip titled Itchy Feet showing the progression of language learning from an easy Beginner's Hill to a steep Conversation Ridge, ending with a massive, intimidating Mt. Fluency looming in the background. © 2013 Malachi Rempen, www.itchyfeetcomic.com.",
  },
  {
    id: 'clo-6',
    number: 6,
    text: 'Explain language variation, language register, linguistic repertoires, relationships between language, culture, and learning, and how all of these concepts are central to the teaching and learning of culturally and linguistically diverse students.',
    imagePath: '/images/soda-pop-coke-debate.png',
    imageAlt:
      'A four-panel comic strip depicting a debate over the regional terms Soda, Pop, and Coke at the Inter-Regional Generic Soft-Drink Name Debate. © 2012 internet-webcomic.com.',
  },
]

function plainOutcomeText(text: string) {
  return text.replace(/<\/?em>/g, '')
}

function placeholderArtifact(input: {
  id: string
  title: string
  type: ArtifactType
  outcomeIds: string[]
  summary?: string
}): Artifact {
  const outcomes = input.outcomeIds
    .map((id) => learningOutcomes.find((o) => o.id === id))
    .filter((o): o is LearningOutcome => Boolean(o))

  const cloList = outcomes.map((o) => `CLO ${o.number}`).join(' and ')
  const outcomeStatements = outcomes
    .map((o) => `CLO ${o.number}: ${plainOutcomeText(o.text)}`)
    .join(' ')

  return {
    id: input.id,
    title: input.title,
    type: input.type,
    outcomeIds: input.outcomeIds,
    summary:
      input.summary ??
      `Placeholder artifact for “${input.title}.” Replace this summary and add your file and caption before submitting.`,
    filePath: '',
    fileLabel: 'Add your artifact file to /public/artifacts/',
    caption: {
      outcomeAddressed: `This artifact addresses ${cloList}. ${outcomeStatements}`,
      whatILearned: `[Replace this paragraph] Describe what you learned through “${input.title}” and why this is important in the teaching and learning of culturally and linguistically diverse students.`,
      citations: [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading, video, or class activity title.',
      ],
      whatItShows: `[Replace this paragraph] Explain what this artifact shows about your learning—e.g., a powerful moment of insight, growth in knowledge/skill/disposition, or a challenge that stretched your thinking.`,
    },
  }
}

export const artifacts: Artifact[] = [
  placeholderArtifact({
    id: 'starting-in-spanish',
    title: 'Starting in Spanish activity',
    type: 'activity',
    outcomeIds: ['clo-1', 'clo-5'],
  }),
  placeholderArtifact({
    id: 'nice-white-parents',
    title: 'Nice White Parents',
    type: 'discussion',
    outcomeIds: ['clo-2', 'clo-3'],
  }),
  placeholderArtifact({
    id: 'nieto-principles-of-learning',
    title: "Nieto's Principles of Learning",
    type: 'assignment',
    outcomeIds: ['clo-1', 'clo-4'],
  }),
  placeholderArtifact({
    id: 'diversity-toss',
    title: 'Diversity Toss',
    type: 'activity',
    outcomeIds: ['clo-1', 'clo-2'],
  }),
  placeholderArtifact({
    id: 'socratic-seminar-culture',
    title: 'Socratic Seminar about culture',
    type: 'discussion',
    outcomeIds: ['clo-1', 'clo-3'],
  }),
  placeholderArtifact({
    id: 'monolingual-white-children-discourse',
    title:
      'Talking about Monolingual white children the way we talk about low-income children of color',
    type: 'discussion',
    outcomeIds: ['clo-2', 'clo-3'],
  }),
  placeholderArtifact({
    id: 'bronfenbrenner-model',
    title: "Bronfenbrenner's Model",
    type: 'assignment',
    outcomeIds: ['clo-1'],
  }),
  placeholderArtifact({
    id: 'yosso-communities-of-cultural-wealth',
    title: "Yosso's Communities of Cultural Wealth (Kamehameha Schools)",
    type: 'assignment',
    outcomeIds: ['clo-2', 'clo-4'],
  }),
  placeholderArtifact({
    id: 'culturally-responsive-pedagogy',
    title: 'Culturally Responsive Pedagogy',
    type: 'assignment',
    outcomeIds: ['clo-4'],
  }),
  placeholderArtifact({
    id: 'culturally-relevant-pedagogy',
    title: 'Culturally Relevant Pedagogy',
    type: 'assignment',
    outcomeIds: ['clo-4'],
  }),
  placeholderArtifact({
    id: 'culturally-responsive-caring',
    title: 'Culturally Responsive Caring (Every kid needs a champion)',
    type: 'reflection',
    outcomeIds: ['clo-2', 'clo-4'],
  }),
  placeholderArtifact({
    id: 'child-of-immigrants',
    title: 'Child of immigrants',
    type: 'reflection',
    outcomeIds: ['clo-1', 'clo-3'],
  }),
  placeholderArtifact({
    id: 'socratic-seminar-hidden-brain',
    title: 'Socratic Seminar about Hidden Brain Podcast',
    type: 'discussion',
    outcomeIds: ['clo-1', 'clo-3'],
  }),
  placeholderArtifact({
    id: 'fact-or-fallacy',
    title: 'Fact or Fallacy',
    type: 'activity',
    outcomeIds: ['clo-5', 'clo-6'],
  }),
  placeholderArtifact({
    id: 'second-language-acquisition',
    title: 'Second Language Acquisition',
    type: 'assignment',
    outcomeIds: ['clo-5'],
  }),
  placeholderArtifact({
    id: 'translanguaging',
    title: 'Translanguaging',
    type: 'assignment',
    outcomeIds: ['clo-5', 'clo-6'],
  }),
  placeholderArtifact({
    id: 'dialects-are-languages',
    title: 'Dialects are Languages',
    type: 'discussion',
    outcomeIds: ['clo-6'],
  }),
  placeholderArtifact({
    id: 'scaffolding-language-learning',
    title: 'Scaffolding language Learning',
    type: 'activity',
    outcomeIds: ['clo-5'],
  }),
  placeholderArtifact({
    id: 'key-principles-bilingual-students',
    title: 'Key Principles for instructing bilingual students',
    type: 'assignment',
    outcomeIds: ['clo-5'],
  }),
  placeholderArtifact({
    id: 'loteria-cards',
    title: 'Loteria Cards',
    type: 'activity',
    outcomeIds: ['clo-1', 'clo-4'],
  }),
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
