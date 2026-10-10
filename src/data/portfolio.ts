export type ArtifactType = 'assignment' | 'activity' | 'reading' | 'in-class-video'

export const artifactTypeLabels: Record<ArtifactType, string> = {
  assignment: 'Assignment',
  activity: 'Activity',
  reading: 'Reading',
  'in-class-video': 'In-Class Video',
}

export interface LearningOutcome {
  id: string
  number: number
  text: string
  imagePath?: string
  imageAlt?: string
}

export interface ArtifactImage {
  src: string
  alt: string
}

export interface Artifact {
  id: string
  title: string
  subtitle?: string
  type: ArtifactType
  outcomeIds: string[]
  images: ArtifactImage[]
  stackImages?: boolean
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
  imagePath?: string
  imageAlt?: string
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
  subtitle?: string
  type: ArtifactType
  outcomeIds: string[]
  images: ArtifactImage[]
  stackImages?: boolean
  caption?: Partial<Artifact['caption']>
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
    subtitle: input.subtitle,
    type: input.type,
    outcomeIds: input.outcomeIds,
    images: input.images,
    stackImages: input.stackImages,
    caption: {
      outcomeAddressed:
        input.caption?.outcomeAddressed ?? `This artifact addresses ${cloList}. ${outcomeStatements}`,
      whatILearned:
        input.caption?.whatILearned ??
        `[Replace this paragraph] Describe what you learned through “${input.title}” and why this is important in the teaching and learning of culturally and linguistically diverse students.`,
      citations: input.caption?.citations ?? [
        '[Replace] Author, A. (Year). Title. Source.',
        '[Replace] Course reading, video, or class activity title.',
      ],
      whatItShows:
        input.caption?.whatItShows ??
        `[Replace this paragraph] Explain what this artifact shows about your learning—e.g., a powerful moment of insight, growth in knowledge/skill/disposition, or a challenge that stretched your thinking.`,
    },
  }
}

export const artifacts: Artifact[] = [
  placeholderArtifact({
    id: 'starting-in-spanish',
    title: 'Los marcos de referencia/Frames of Reference',
    subtitle: 'Starting in Spanish Activity',
    type: 'activity',
    outcomeIds: ['clo-1'],
    caption: {
      outcomeAddressed: 'This artifact addresses CLO 1.',
      whatILearned: `This activity really opened my eyes to the struggles faced by MLL students. It occured before our first field week and it was the first time I considered the extent of unfamiliarity some students might have with the English language.

The first lesson of this course began with Dr. Von Esch talking to us all in Spanish. I remember a lot of us laughing because we thought this was an immersion exercise to introduce the idea of how MLL students might feel with an English speaking teacher in class. However, it didn't end. Instead, she continued speaking Spanish for an uncomfortably long time. I have been learning Spanish on Duolingo since 2024 and I was able to understand most of what Dr. Von Esch was saying but the cognitive load on my mind was exhausting!

When we finally got to the activity, I was frustrated because I was not fluent enough in Spanish to express myself the way I wanted to. I had to write some very rudimentary thoughts that was not a good representation of my knowledge or views. This was a good learning to take into my first field week and my interactions with MLL students. I was able to empathize with them and try my best to support their learning through translating questions and concepts through Google Translate or to the best of my Spanish speaking ability.

Coming back to the lesson, after 30 mins, Dr. Von Esch took pity on us and switched over to English. When we got to re-attempt the activity, I was able to answer thoughtfully and to the best of my ability in English (the language I am most comfortable in by far). I spoke to my mentor teacher during my field week and we agreed to give out quizzes and worksheets with Spanish alternatives and translate the slides we use in class as well. I still believe there is more we can do to support our MLL students but I'm happy with the start I've made towards being more inclusive.`,
      citations: [],
      whatItShows: '',
    },
    images: [
      {
        src: '/artifacts/frames-of-reference-4.png',
        alt: 'Spanish handout titled Los marcos de referencia explaining the purposes of the frames-of-reference exercise.',
      },
      {
        src: '/artifacts/frames-of-reference-1.png',
        alt: 'Spanish frames-of-reference worksheet with handwritten notes on religion, race and ethnicity, gender, and sexuality.',
      },
      {
        src: '/artifacts/frames-of-reference-3.png',
        alt: 'English Frames of Reference handout with handwritten notes on family and place.',
      },
      {
        src: '/artifacts/frames-of-reference-2.png',
        alt: 'English frames-of-reference worksheet with handwritten notes on social class and religion.',
      },
    ],
  }),
  placeholderArtifact({
    id: 'yosso-communities-of-cultural-wealth',
    title: 'Social Capital Lotería Card',
    subtitle: "Yosso's Communities of Cultural Wealth",
    type: 'assignment',
    outcomeIds: ['clo-2'],
    stackImages: true,
    images: [
      {
        src: '/artifacts/social-capital-indiana.png',
        alt: 'A lotería-style card of the state of Indiana in gray on a red background, with the Indian flag placed in the center.',
      },
      {
        src: '/artifacts/social-capital-notes.png',
        alt: 'Handwritten notes titled Social Capital describing Yosso’s cultural capital and a personal example of community support in Bloomington, Indiana.',
      },
    ],
  }),
  placeholderArtifact({
    id: 'monolingual-white-children-discourse',
    title: 'Flores (2015) Monolingual White Children',
    type: 'reading',
    outcomeIds: ['clo-3'],
    images: [
      {
        src: '/artifacts/flores-2015-monolingual-white-children.png',
        alt: 'Essay by Dr. Nelson Flores that describes monolingual White children using the same deficit language often applied to low-income children of color, including the Multilingual Talks project.',
      },
    ],
  }),
  placeholderArtifact({
    id: 'culturally-relevant-pedagogy',
    title: 'Culturally Relevant Pedagogy in Mathematics: A Critical Need',
    subtitle: 'Culturally Relevant Pedagogy',
    type: 'in-class-video',
    outcomeIds: ['clo-4'],
    images: [
      {
        src: '/artifacts/crp-math-1.png',
        alt: 'A speaker on stage with one index finger raised and the other hand open, from a talk on culturally relevant pedagogy in mathematics.',
      },
      {
        src: '/artifacts/crp-math-2.png',
        alt: 'A speaker on stage holding up one finger on one hand and five fingers on the other.',
      },
      {
        src: '/artifacts/crp-math-3.png',
        alt: 'A speaker on stage giving a thumbs-up with one hand and holding the other hand open.',
      },
      {
        src: '/artifacts/crp-math-4.png',
        alt: 'A speaker on stage holding up three fingers on each hand.',
      },
    ],
  }),
  placeholderArtifact({
    id: 'scaffolding-language-learning',
    title: 'Scaffolding Write-and-Pass Activity',
    subtitle: 'Scaffolding Language Learning',
    type: 'activity',
    outcomeIds: ['clo-5'],
    images: [
      {
        src: '/artifacts/scaffolding-write-and-pass.png',
        alt: 'Handwritten notes numbered 1 through 6 on scaffolding language learning, including multiculturalism, conversational versus academic language, context, student strengths, and English learners.',
      },
    ],
  }),
  placeholderArtifact({
    id: 'dialects-are-languages',
    title: 'Dr. Jamila Lyiscott: 3 Ways to Speak English',
    subtitle: 'Dialects are Languages',
    type: 'in-class-video',
    outcomeIds: ['clo-6'],
    images: [
      {
        src: '/artifacts/lyiscott-3-ways-to-speak-english.png',
        alt: 'Still from Jamila Lyiscott’s TEDSalon NY2014 talk, 3 ways to speak English, February 2014.',
      },
    ],
  }),
]

export const gradeReflection: GradeReflection = {
  proposedGrade: 'A',
  reflection:
    'I believe that my work in this course is deserving of an A grade. I have attended all of the classes, and have always come prepared by completing the readings/podcasts and having extensive notes to facilitate class discussions. I was extremely active in small group discussions, actively contributed to both Socratic Seminars, and believe that I contributed thoughtfully to large group discussions as well. My work demonstrates a strong and deep understanding of all concepts related to the teaching and learning of CLD students. Based on Dr. Von Esch\'s feedback for the Mid-Course Assessment, I "have a solid grasp of culturally responsive instruction, the concepts we have been learning in class, and importantly, how to use those concepts to recognize and analyze culturally responsive teaching and learning." My portfolio shows that I substantiated claims and understandings of CLD student learning and teaching rooted in research and principles of culturally and linguistically responsive teaching. I always brought a student and justice-oriented stance to all discussions and in-class activities. I completed all assignments and I have incorporated feedback to strengthen my profile as a CLD educator.',
  isPlaceholder: false,
  imagePath: '/images/calvin-grade-protest.png',
  imageAlt:
    'A Calvin and Hobbes comic where Calvin protests a C grade, arguing that getting 75% of answers correct should be considered outstanding.',
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

function getOutcomeById(id: string): LearningOutcome | undefined {
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
