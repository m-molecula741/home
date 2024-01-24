// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Магомедали",
  middleName: "",
  lastName: "Магомедов",
  message: " Я middle python backend developer. Приветствую на своей онлайн-визитке! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/m-molecula741",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/m_molecula?igsh=OXBscWtlbnA0YnQ5&utm_source=qr",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/m_molecula",
    },
  ],
};

// ABOUT SECTION


const about = {
  show: true,
  heading: "About me",
  imageLink: require("../editable-stuff/maga.jpg"),
  imageSize: 375,
  message:
    "Меня зовут Магомедали Магомедов. Я выпускник МАИ 2022 года по специальности 'Программная инженерия'. Также в настоящее время я обучаюсь на направлении highload в МАИ. Я имею более 2,5 лет опыта работы в качестве python backend разработчика. За это время я участвовал в проектах различной сложности, занимаясь разработкой серверной части приложений с использованием Python и других связанных технологий. Мне нравится решать сложные задачи и применять передовые технологии для создания эффективных и надежных решений. ",
  resume: "https://docs.google.com/document/d/1ojTLWStgRUsgrAFO2hoVqsUoHLfBsc5m683b3Id0UPQ/edit?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "m-molecula741",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/maga.jpg"), 
      label: "First slide label", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/maga.jpg"), 
      label: "Second slide label", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "FastAPI", value: 90 },
    { name: "SQL", value: 85 },
    { name: "SQLAlchemy", value: 85 },
    { name: "Redis", value: 98 },
    { name: "RabbitMQ", value: 75 },
    { name: "Docker | Docker-compose", value: 85 },
    { name: "Unix", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Сommunication", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Контакты",
  message:
    "Если вы хотите связаться со мной по деловому предложению можете написать на почту, либо перейти по ссылке из главной секции на одну из социальных сетей",
  email: "magaali.741@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'January 2024 – Present',
    },
    {
      role: 'Backend Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
