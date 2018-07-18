import moment from 'moment';
const bookTabs  = [
    {
        parentId:123,
        id: 1234,
        title:'קורס כל שהוא',
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
        type:'video',
        link:'http://localhost:3000/media_content/Video/sample.mp4',
    },
    {
        parentId:123,
        id: 12345,
        title:'קורס כל שהוא שני', 
        date: moment().format('LL'),
        details:'כאן מופיע פירוט על המארז הלומדות והקורס',
        type:'vr',
        link:'http://localhost:3000/media_content/Aframe/index.html',
    }
]

export default bookTabs;