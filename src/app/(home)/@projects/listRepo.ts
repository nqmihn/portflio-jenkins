export type Repo = {
    name: string
    html_url: string
    description: string
    forks_count: number
    stargazers_count: number
    language: string
    size: number
}
const listRepo: Repo[] = [
    {

        name: 'doing-quiz-pj',
        html_url: 'https://github.com/nqmihn/doing-quiz-pj',
        description: "Doing quiz web application by reactjs + nestjs",
        size: 5154,
        stargazers_count: 1,
        language: 'JavaScript',
        forks_count: 0,
    },
    {
        name: 'nestjs-it-recruit-api',
        html_url: 'https://github.com/nqmihn/nestjs-it-recruit-api',
        description: "It Recruitment API by NestJS",
        size: 453,
        stargazers_count: 1,
        language: 'TypeScript',
        forks_count: 0,

    },
    {

        name: 'se104-backend',
        html_url: 'https://github.com/nqmihn/se104-backend',
        description: "Api for Se104",
        size: 184,
        stargazers_count: 2,
        language: 'TypeScript',
        forks_count: 0,
    },
    {

        name: "web_shopping_php",
        html_url: 'https://github.com/nqmihn/web_shopping_php',
        description: "Web shopping by php",
        size: 7655,
        stargazers_count: 0,
        language: 'CSS',
        forks_count: 0,
    }
]

export { listRepo }