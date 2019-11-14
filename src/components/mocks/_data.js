// cspell:disable
export const userQuestionData = {
  unanswered: [
    {
      qid: 2,
      author: 'Melany Smith',
      avatar: 'avatar7.png',
      question: 'Go to a university to study web development'
    },
    {
      qid: 1,
      author: 'Irena Popova',
      avatar: 'avatar8.png',
      question: 'Visit a friend in a foreign country'
    },
    {
      qid: 5,
      author: 'Anna Stoll',
      avatar: 'avatar4.png',
      question: 'Go on a trip and visit my parents'
    }
  ],
  answered: [
    {
      qid: 4,
      author: 'Melany Smith',
      avatar: 'avatar7.png',
      question: 'Learn more about pare programming'
    },
    {
      qid: 3,
      author: 'Alex Black',
      avatar: 'avatar5.png',
      question: 'Build android applications'
    },
    {
      qid: 6,
      author: 'Tom Kovak',
      avatar: 'avatar6.png',
      question: 'Build an iOS app with Javascript and React'
    }
  ]
};

export const questionData = {
  qid: 2,
  author: 'Irena Popova',
  avatar: 'avatar1.png',
  optionOne: {
    votes: ['irenapopova', 'katrinhill'],
    text: 'Go to a holiday and music festival.'
  },
  optionTwo: {
    votes: ['annastoll'],
    text: 'Camping and chill.'
  }
};

export const leaderboardData = [
  {
    id: 'melanysmith',
    name: 'Melany Smith',
    avatar: 'avatar7.png',
    answerCount: 11,
    questionCount: 4
  },
  {
    id: 'Anna Stoll',
    name: 'Anna Stoll',
    avatar: 'avatar4.png',
    answerCount: 7,
    questionCount: 4
  },
  {
    id: 'alexblack',
    name: 'Alex Black',
    avatar: 'avatar5.png',
    answerCount: 4,
    questionCount: 3
  }
];

export const navUsers = {
  sarahedo: {
    id: 'sarah',
    name: 'Sarah',
    avatar: {
      name: 'avatar1',
      src: '/images/avatars/avatar1.png'
    }
  },
  tylermcginnis: {
    id: 'tyler',
    name: 'Tyler',
    avatar: {
      name: 'avatar2',
      src: '/images/avatars/avatar2.png'
    }
  },
  johndoe: {
    id: 'john',
    name: 'John',
    avatar: {
      name: 'avatar3',
      src: '/images/avatars/avatar3.png'
    }
  },
  anna: {
    id: 'anna',
    name: 'Anna',
    avatar: {
      name: 'avatar4',
      src: '/images/avatars/avatar4.png'
    }
  },
  alex: {
    id: 'alex',
    name: 'Alex',
    avatar: {
      name: 'avatar5',
      src: '/images/avatars/avatar5.png'
    }
  },
  tom: {
    id: 'tom',
    name: 'Tom',
    avatar: {
      name: 'avatar6',
      src: '/images/avatars/avatar6.png'
    }
  },
  melany: {
    id: 'melany',
    name: 'Melany',
    avatar: {
      name: 'avatar7',
      src: '/images/avatars/avatar7.png'
    }
  },
  irena: {
    id: 'irena',
    name: 'Irena',
    avatar: {
      name: 'avatar8',
      src: '/images/avatars/avatar8.png'
    }
  }
};

export const users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    // avatarURL: ,
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    // avatarURL: ,
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    // avatarURL: ,
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  }
};

// export default userQuestionData;
