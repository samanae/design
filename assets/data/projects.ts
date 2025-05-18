export interface ProjectsType {
    title: string,
    date: string,
    description: string,
    disciplines: string[],
    link?: string,
    imgUrl: string,
}

export const PROJECTS = [
    {
    title: 'Heart disease in Germany',
    date: '12/2020',
    description: 'An interactive infographic on heart disease, designed to communicate complex health data in an accessible and engaging format. The design process involved rigorous data sourcing, including leveraging open data portals, and was informed by direct engagement with the German Heart Foundation (Deutsche Herzstiftung) to align with its goals of spreading awareness in the right tone. The technical execution involved developing proficiency in Python for data processing and visualization, coupled with front-end web development using HTML, CSS, and strategic SVG integration for design and scalability. The resulting "artery-mimicking" design delivers a unique visual narrative.',
    disciplines: ['Python', 'Data-Visualization & Science', 'Research', 'Storytelling', 'Information Design'],
    link: 'https://www.behance.net/gallery/176585059/Heart-Disease-in-Germany-Scrollable-Infographic#',
    imgUrl: 'assets/images/heartdisease.png',
    },
    {
    title: 'Eye Care Maintenance Kit',
    date: '01/2021',
    description: 'With the rise in screen-based work—accelerated by the COVID-19 pandemic and increasing digitalization—eye strain and vision-related issues have become widespread. This project explores the growing prevalence of Computer Vision Syndrome (CVS), its impact on productivity, and the misconception that glasses are a long-term solution. The goal is to raise awareness about effective prevention and treatment strategies that support long-term eye health, especially in the context of modern digital work environments. I developed this kit that contains excersizes to relieve eyes from their strain that is executed during work.',
    disciplines: ['Product Design', 'Brand Design', 'Manufacturing', 'UX Research'],
    link: '',
    imgUrl: 'assets/images/product-design.png',
    },
    {
    title: 'Eye Pocket Maintenance',
    date: '07/2023',
    description: 'The number of people suffering from myopia is steadily increasing. It is estimated that by 2050, around 50% of the world\'s population will be affected. It is a slowly evolving pandemic that needs much more attention than currently given. One phenomenon caused by screen work, that can lead to myopia, is called the computer-vision-syndrome. The eyes tend to evolve into a stiff state, which lengthens the eyeball overtime, further leading to myopia. Many who suffer from it do not know how to deal with it or how to prevent it. With my work, I am trying to develop animations that are meant to relieve the eyes through a feeling of relaxation, which is created by watching the animations. The animations are then integrated into a concept, which should ensure immediate accessibility for those affected. Designed for my intermediate project.',
    disciplines: ['UI/UX Design', 'App Development', 'App Design'],
    link: 'https://www.behance.net/gallery/176585893/App-Design-Eye-Pocket-Maintenance',
    imgUrl: 'assets/images/epm.png',
    },
    {
    title: 'NUCO',
    date: '2024 – today',
    description: 'A casual mobile and web-friendly number puzzle game. Designed and developed for a university course. The production is maintained outside of the projects lifespan due to enjoyment of creating games with web-frameworks. Designed by Samia Rachid.',
    disciplines: ['Game Design', 'App Design', 'App Development', 'Angular'],
    link: 'https://samanae.github.io/nuco-game/home',
    imgUrl: 'assets/images/nuco.png',
    },
    {
    title: 'Digital Illustration',
    date: '2016 – today',
    description: 'An online portfolio on Artstation.com where I share my creative and personal work. I have been using a drawing tablet since 2012 and have over 10 years experience creating digital illustrations for clients, game studios and other projects.',
    disciplines: ['Illustration', 'Art Direction', 'Concept Design'],
    link: 'https://www.artstation.com/samanae',
    imgUrl: 'assets/images/samia-rachid-illustration.jpg',
    },
    
]