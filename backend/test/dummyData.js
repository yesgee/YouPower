var mongoose = require('mongoose');
var newId = mongoose.Types.ObjectId;

exports.ids = [
  '5575283f4858ecc51b292d93',
  '5562c1d46b1083a13e5b7843'
];

exports.users = [
  {
    _id: newId(),
    email: 'testUser@foo.com',
    password: 'foobar1',
    profile: {
      name: 'my nick',
      dob: new Date(42),
      photo: 'http://dummy'
    }
  },
  {
    _id: newId(),
    email: 'testUser2@foo.com',
    password: 'foobar2',
    profile: {
      name: 'my nick2',
      dob: new Date(43),
      photo: 'http://dummy2'
    }
  }
];

exports.ratings = {};
exports.ratings[exports.users[0]._id] = {
  rating: 4,
  comment: 'dummy rating comment'
};
exports.ratings[exports.users[1]._id] = {
  rating: 3,
  comment: 'another dummy rating comment'
};

exports.actions = [
  {
    _id: newId(),
    name: 'dummy name',
    category: 'repeating',
    activation: {
      configurable: true,
      repeat: 42,
      delay: 43
    },
    ratings: exports.ratings,
    description: 'dummy description',
    impact: 4,
    effort: 5
  },
  {
    _id: newId(),
    name: 'dummy name 2',
    category: 'oneshot',
    activation: {
      configurable: false
    },
    description: 'dummy description 2',
    impact: 2,
    effort: 1
  },
  {
    _id: newId(),
    name: 'dummy name 3',
    category: 'oneshot',
    activation: {
      configurable: false
    },
    description: 'dummy description 3',
    impact: 5,
    effort: 5
  }
];

exports.challenges = [
  {
    _id: newId(),
    name: 'dummy challenge name 1',
    description: 'dummy challenge description 1',
    actions: [exports.actions[0]._id],
    ratings: exports.ratings
  },
  {
    _id: newId(),
    name: 'dummy challenge name 2',
    description: 'dummy challenge description 2',
    actions: [exports.actions[1]._id]
  },
  {
    _id: newId(),
    name: 'dummy challenge name 3',
    description: 'dummy challenge description 3',
    actions: [exports.actions[0]._id, exports.actions[1]._id]
  }
];

exports.communities = [
  {
    name: 'dummy community 1',
    challenges: [
      exports.challenges[0]._id,
      exports.challenges[1]._id,
      exports.challenges[2]._id
    ],
    actions: [
      exports.actions[0]._id,
      exports.actions[1]._id
    ]
  },
  {
    name: 'dummy community 2',
    challenges: [
      exports.challenges[2]._id
    ],
    actions: [
      exports.actions[1]._id
    ]
  }
];

exports.households = [
  {
    _id: newId(),
    apartmentId: 1234,
    address: 'my address',
    energyVal: '42',
    members: [
      exports.users[0]._id
    ]
  },
  {
    _id: newId(),
    apartmentId: 1235,
    address: 'my address 2',
    energyVal: '43',
    members: [
      exports.users[1]._id
    ]
  }
];

exports.appliances = [
  {
    _id: newId(),
    appliance: 'dish washer',
    quantity: 1
  },
  {
    _id: newId(),
    appliance: 'tv',
    quantity: 2
  }
];