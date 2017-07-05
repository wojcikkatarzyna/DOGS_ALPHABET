let dogInfo = [
                {letter: 'A', breed: 'AKITA', country: 'Japan', size: 'large', lifeSpan: "9-11 years", temperament: 'Calm, faithful', train: 'hard to train', kidsFiendly: 'no', dogFriendly: 'no', fur: 'short', activity: 'high', garden: 'required', src: '../images2/A.jpg' },
                {letter: 'B', breed: 'BOXER', country: 'Germany', size: 'large', lifeSpan: "9-11 years", temperament: 'Faithful, sociable ', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'short', activity: 'high', garden: 'required', src: '../images2/B.jpg'  },
                {letter: 'C', breed: 'CHOW CHOW', country: 'Mongolia', size: 'medium', lifeSpan: "12-15 years", temperament: 'Calm, good guard', train: 'no', kidsFiendly: 'no', dogFriendly: 'no', fur: 'short', activity: 'low', garden: 'no required', src: '../images2/C.jpg'  },
                {letter: 'D', breed: 'DALMATIAN', country: 'Croatia', size: 'large', lifeSpan: "11-16 years", temperament: 'High-energy, friendly, sociable', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'short', activity: 'high', garden: 'required', src: '../images2/D.jpg'  },
                {letter: 'E', breed: 'ENGLISH COCKER SPANIEL', country: 'England', size: 'medium', lifeSpan: "12-14 years", temperament: 'Playful, trainable, and friendly toward people', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'high', garden: 'no required', src: '../images2/E.jpg'  },
                {letter: 'F', breed: 'FRENCH BULDOG', country: 'France', size: 'small', lifeSpan: "10-12 years", temperament: 'Sociable, playful, friendly', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'short', activity: 'medium', garden: 'no required', src: '../images2/F.jpg'  },
                {letter: 'G', breed: 'GOLDEN RETRIEVER', country: 'Great Britain', size: 'large', lifeSpan: "10-13 years", temperament: 'Friendly, calm, sociable', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'required', src: '../images2/G.jpg'  },
                {letter: 'H', breed: 'HUSKY', country: 'Russia', size: 'large', lifeSpan: "12-15 years", temperament: 'Playful, strong, need an owner as a leader, ', train: 'hard to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'high', garden: 'required', src: '../images2/H.jpg'  },
                {letter: 'I', breed: 'IRISH WATER SPANIEL', country: 'Irland', size: 'large', lifeSpan: "10-12 years", temperament: 'Recommended for allergy sufferers, reserved toward strangers', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'high', garden: 'required', src: '../images2/I.jpg'  },
                {letter: 'J', breed: 'JACK RUSSEL TERRIER', country: 'England', size: 'medium', lifeSpan: "15-17 years", temperament: 'Playful, inteligent, energetic, sociable ', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'short', activity: 'high', garden: 'no required', src: '../images2/J.jpg'  },
                {letter: 'K', breed: 'KOMONDOR', country: 'Hungary', size: 'large', lifeSpan: "10-12 years", temperament: 'Intelligent, protective, wary of strangers, can be aggressive to other dogs ', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'no', fur: 'long', activity: 'low', garden: 'required', src: '../images2/K.jpg'  },
                {letter: 'L', breed: 'LEONBERGER', country: 'Germany', size: 'large', lifeSpan: "10-12 years", temperament: 'Faithful, calm, intelligent, sociable, lazy', train: 'hard to train', kidsFiendly: 'yes', dogFriendly: 'no', fur: 'long', activity: 'low', garden: 'required', src: '../images2/L.jpg'  },
                {letter: 'M', breed: 'MALTESE', country: 'Meditteranean region', size: 'small', lifeSpan: '12-14 years', temperament: 'Recommended for allergy sufferers, playful, faithful', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'high', garden: 'no required', src: '../images2/M.jpg'  },
                {letter: 'N', breed: 'NEWFOUNDLAND', country: 'Canada', size: 'large', lifeSpan: '8-10 years', temperament: 'Freindly, gentle, sociable', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'required', src: '../images2/N.jpg'  },
                {letter: 'O', breed: 'OLD ENGLISH SHEEPDOG', country: 'England', size: 'large', lifeSpan: '10-12 years', temperament: 'Sociable, calm, protective', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'required', src: '../images2/O.jpg'  },
                {letter: 'P', breed: 'PUG', country: 'China', size: 'small', lifeSpan: '12-14 years', temperament: 'Sensitive to the moods of their owners', train: 'hard to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'no required', src: '../images2/P.jpg'  },
                {letter: 'R', breed: 'ROTTWEILER', country: 'Germany', size: 'large', lifeSpan: '10-12 years', temperament: 'Calm, confident, and courageous', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'no', fur: 'short', activity: 'medium', garden: 'required', src: '../images2/R.jpg'  },
                {letter: 'S', breed: 'SAINT BENARD DOG', country: 'Switzerland', size: 'large', lifeSpan: '8-10 years', temperament: 'Friendly, sociable, careful for children', train: 'hard to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'required', src: '../images2/S.jpg'  },
                {letter: 'T', breed: 'TIBETAN TERRIER', country: 'Tibet', size: 'small', lifeSpan: '15-17 years', temperament: 'Playful, gentle, friendly', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'no required', src: '../images2/T.jpg'  },
                {letter: 'W', breed: 'WEST HIGHLAND TERRIER', country: 'Great Britain', size: 'small', lifeSpan: '12-14 years', temperament: 'Friendly, confident, fun-loving, intelligent', train: 'easy to train', kidsFiendly: 'yes', dogFriendly: 'yes', fur: 'long', activity: 'medium', garden: 'no required', src: '../images2/W.jpg'  },
                {letter: 'Y', breed: 'YORKSHIRE TERRIER', country: 'Great Britain', size: 'small', lifeSpan: '12-15 years', temperament: 'Recommended for allergy sufferers, easy to spoil it', train: 'hard to train', kidsFiendly: 'no', dogFriendly: 'no', fur: 'long', activity: 'medium', garden: 'no required', src: '../images2/Y.jpg'  },
];

module.exports = dogInfo;