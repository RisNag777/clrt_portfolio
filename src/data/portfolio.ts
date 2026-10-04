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

export interface GradeReflection {
  proposedGrade: string
  reflection: string
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

export const gradeReflection: GradeReflection = {
  proposedGrade: 'A',
  reflection:
    'I believe that my work in this course is deserving of an A grade. I have attended all of the classes, and have always come prepared by completing the readings/podcasts and having extensive notes to facilitate class discussions. I was extremely active in small group discussions, actively contributed to both Socratic Seminars, and believe that I contributed thoughtfully to large group discussions as well. My work demonstrates a strong and deep understanding of all concepts related to the teaching and learning of CLD students. Based on Dr. Von Esch\'s feedback for the Mid-Course Assessment, I "have a solid grasp of culturally responsive instruction, the concepts we have been learning in class, and importantly, how to use those concepts to recognize and analyze culturally responsive teaching and learning." My portfolio shows that I substantiated claims and understandings of CLD student learning and teaching rooted in research and principles of culturally and linguistically responsive teaching. I always brought a student and justice-oriented stance to all discussions and in-class activities. I completed all assignments and I have incorporated feedback to strengthen my profile as a CLD educator.',
  isPlaceholder: false,
}

export interface RubricCriterion {
  category: string
  details: string[]
}

export interface RubricLevel {
  grade: string
  criteria: RubricCriterion[]
}

export const courseRubric: RubricLevel[] = [
  {
    grade: 'A',
    criteria: [
      {
        category: 'Attendance/Engagement',
        details: [
          'Attends all classes except in the case of extreme health or family emergencies. Communicates clearly about absences and took responsibility by making up any missed work.',
          'Contributes actively, productively and respectfully to the learning community, including being timely, present, engaged, and prepared.',
          'Makes consistently thoughtful and substantive contributions to small and large group discussions in class rooted in principles of culturally and linguistically responsive teaching and learning.',
        ],
      },
      {
        category: 'Quality/Learning',
        details: [
          'Demonstrates a strong and deep understanding of all concepts related to the teaching and learning of culturally and linguistically diverse (CLD) students through discussions, in-class activities, and written assignments.',
          'Successfully substantiates claims and understandings of CLD student learning and teaching rooted in research and principles of culturally and linguistically responsive teaching.',
          'Shows consistent evidence of growth, applying feedback to strengthen work.',
          'Brings a student- and justice-oriented stance, creativity and insight into the teaching and learning of CLD students to discussions, in-class activities, and written assignments.',
          'Completes all assignments with thoughtfulness and care.',
        ],
      },
    ],
  },
  {
    grade: 'B',
    criteria: [
      {
        category: 'Attendance/Engagement',
        details: [
          'Attended 4/6 (or 80% of) classes, took initiative to schedule a meeting with the instructor about your absence, and made-up work.',
          'Contributes productively to the learning community, with some issues being timely, present, engaged, respectful, and/or prepared.',
          'Makes contributions to small and large group discussions in class mostly rooted in principles of culturally and linguistically responsive teaching and learning.',
        ],
      },
      {
        category: 'Quality/Learning',
        details: [
          'Demonstrates an adequate, yet inconsistent level of understanding of concepts related to the teaching and learning of culturally and linguistically diverse (CLD) students through discussions, in-class activities, and written assignments.',
          'Mostly supports claims and understandings of CLD student learning and teaching with research and principles of culturally and linguistically responsive teaching. These supported claims and understandings may not show a full or deep understanding of some of research or principles covered in the course.',
          'Shows evidence of growth, but inconsistently applies feedback to work.',
          'Shows some evidence of bringing a justice-oriented stance, creativity and insight into the teaching and learning of CLD students to discussions, in-class activities, and written assignments.',
          'Completes most assignments with thoughtfulness and/or care.',
        ],
      },
    ],
  },
  {
    grade: 'Not ready to move forward',
    criteria: [
      {
        category: 'Attendance/Engagement',
        details: [
          'Attended 3/5 or less classes (or 60% of) classes, took initiative to schedule a meeting with the instructor about your absence, and made-up work.',
          'Does not contribute productively to the learning community, having issues with timeliness, presence, engagement, respect, and preparedness.',
          'Makes little to no contributions to small and large group discussions in class. Contributions are often not related to principles of culturally and linguistically responsive teaching.',
        ],
      },
      {
        category: 'Quality/Learning',
        details: [
          'Shows an unsatisfactory level of understanding of concepts related to the teaching and learning of culturally and linguistically diverse (CLD) students through discussions, in-class activities, and written assignments.',
          'Unsuccessfully defends claims and understandings of CLD student learning and teaching with little to no reference to research and principles of culturally and linguistically responsive teaching.',
          'Shows no evidence of growth, is not receptive to, nor applies feedback to strengthen work.',
        ],
      },
    ],
  },
]

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
