import moment from 'moment';
const books = [
    {
        creator:8380054,
        id: 123,
        title:'קורס כלשהוא א',
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
    },
    {
        creator:8380054,
        id: 567,
        title:'קורס כלשהוא ב',
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
    }
]

export default books;