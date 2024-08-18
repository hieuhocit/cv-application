const data = {
  name: 'Trần Trung Hiếu',
  email: 'chieubuonmuaroi@gmail.com',
  phoneNumber: '+84 123 456 789',
  address: 'Gia Lai, VN',
  custom: {
    font: 'serif',
    layout: 'top',
    color: '#0e374e',
    headerColor: '#ffffff',
    sectionBgc: '#0e374e12',
  },
  educations: [
    {
      school: 'Duy Tan University',
      degree: 'Degree of bachelor in software engineering',
      start: new Date('2021-08-21'),
      end: new Date('2024-08-21'),
      location: 'Da Nang, VN',
      show: true,
    },
    {
      school: 'Hidden University',
      degree: "Master's Degree in Math",
      start: new Date('2020-08-01'),
      end: new Date('2024-09-01'),
      location: 'New York City, US',
      show: false,
    },
  ],
  experiences: [
    {
      company: 'Umbrella Inc.',
      position: 'UX & UI Designer',
      start: new Date('2003-09-23'),
      end: new Date('2100-09-23'),
      location: 'New York City, US',
      desc: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
      show: false,
    },
    {
      company: 'Black Mesa Labs',
      position: 'UX Research Assistant',
      start: new Date('2018-08-01'),
      end: new Date('2019-09-01'),
      location: 'Berlin, Germany',
      desc: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
      show: true,
    },
  ],
};

export default data;