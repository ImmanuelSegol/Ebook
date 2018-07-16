import moment from 'moment';
const bookTabs  = [
    {
        parentId:123,
        id: 1234,
        title:'קורס כל שהוא',
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
    },
    {
        parentId:123,
        id: 12345,
        title:'קורס כל שהוא שני', 
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
    }
]

export default bookTabs;