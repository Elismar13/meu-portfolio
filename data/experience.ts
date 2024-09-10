export interface ExperienceItem {
    type: 'work' | 'education';
    range: string;
    title: string;
    institution: string;
    description: string;
}

export const experiences: ExperienceItem[] = [
    {
        type: 'work',
        range: '2020 - Present',
        title: 'Full-Stack Developer',
        institution: 'Tech Company',
        description: 'Developing and maintaining web applications using React, Node.js, and other technologies.'
    },
    {
        type: 'education',
        range: '2016 - 2020',
        title: 'Bachelor of Computer Science',
        institution: 'University of Tech',
        description: 'Studied various aspects of computer science including algorithms, data structures, and web development.'
    },
    {
        type: 'education',
        range: '2016 - 2020',
        title: 'Bachelor of Computer Science',
        institution: 'University of Tech',
        description: 'Studied various aspects of computer science including algorithms, data structures, and web development.'
    }
];