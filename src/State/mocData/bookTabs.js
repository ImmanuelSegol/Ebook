import moment from 'moment';
const bookTabs  = [
    {
        parentId:123,
        id: 1234,
        title:'קורס כל שהוא',
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
        type:'aframe',
        link:'http://localhost:3000/media_content/Aframe/index.html',
    },
    {
        parentId:123,
        id: 12345,
        title:'קורס כל שהוא שני', 
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
        type:'pdf',
        link:'http://localhost:3000/media_content/pdf/pdf.pdf',
    }
]

export default bookTabs;