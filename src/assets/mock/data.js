import Project01 from '../images/works/01-Fullstack/(01) sociopedia/screenshot (03).png'
import Project02 from '../images/works/01-Fullstack/(02) crud_auth/screenshot (04).png'
import Project03 from '../images/works/02-Backend/(01) crud_auth/screenshot (10).png'
import Project04 from '../images/works/01-Fullstack/(03) blog/screenshot (01).png'
import Project05 from '../images/works/02-Backend/(02) blog/screenshot (05).png'
import Project06 from '../images/works/01-Fullstack/(04) booking_app/screenshot (06).png'
import Project07 from '../images/works/02-Backend/(03) booking_app/screenshot (14).png'
import Project08 from '../images/works/01-Fullstack/(05) to_do_list/screenshot (01).png'
import Project09 from '../images/works/02-Backend/(04) to_do_list/screenshot (05).png'
import Project10 from '../images/works/01-Fullstack/(06) django_to_do_list/screenshot (01).png'
import Project11 from '../images/works/02-Backend/(05) django_to_do_list/screenshot (04).png'
import Project12 from '../images/works/02-Backend/(06) send_emails/screenshot (01).png'
import Project13 from '../images/works/03-Frontend/(01) calculator/screenshot (01).png'
import Project14 from '../images/works/03-Frontend/(02) multilanguage_app/screenshot (01).png'
import Project15 from '../images/works/03-Frontend/(03) tic_tac_toe/screenshot (02).png'
import Project16 from '../images/works/03-Frontend/(04) movie_search_app/screenshot (01).png'
import Project17 from '../images/works/03-Frontend/(05) shopping_app/screenshot (01).png'
import Project18 from '../images/works/03-Frontend/(06) annielvalle96_v1.0/screenshot (02).png'
import Project19 from '../images/works/04-Design/(01) annielvalle96_v1.0_design/screenshot (01).png'


const jsonData = [
  {
    id: 0,
    type: 'full-stack',
    image: [{ id: 0, url: Project01, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/sociopedia',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'ExpressJS' }, { id: 2, name: 'ReactJS' }, { id: 3, name: 'NodeJS' }]
  },
  {
    id: 1,
    type: 'full-stack',
    image: [{ id: 0, url: Project02, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/crud_auth',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'ExpressJS' }, { id: 2, name: 'ReactJS' }, { id: 3, name: 'NodeJS' }]
  },
  {
    id: 2,
    type: 'backend',
    image: [{ id: 0, url: Project03, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/crud_auth/tree/main/api',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'NodeJS' }, { id: 2, name: 'ExpressJS' }]
  },
  {
    // Blog.
    id: 3,
    type: 'full-stack',
    image: [{ id: 0, url: Project04, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/blog',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'ExpressJS' }, { id: 2, name: 'ReactJS' }, { id: 3, name: 'NodeJS' }]
  },
  {
    // Blog.
    id: 4,
    type: 'backend',
    image: [{ id: 0, url: Project05, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/blog/tree/main/api',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'NodeJS' }, { id: 2, name: 'ExpressJS' }]
  },
  {
    // Booking App.
    id: 5,
    type: 'full-stack',
    image: [{ id: 0, url: Project06, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/booking_app',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'ExpressJS' }, { id: 2, name: 'ReactJS' }, { id: 3, name: 'NodeJS' }]
  },
  {
    // Booking App.
    id: 6,
    type: 'backend',
    image: [{ id: 0, url: Project07, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/booking_app/tree/main/api',
    builtWith: [{ id: 0, name: 'MongoDB' }, { id: 1, name: 'NodeJS' }, { id: 2, name: 'ExpressJS' }]
  },
  {
    // To Do List.
    id: 7,
    type: 'full-stack',
    image: [{ id: 0, url: Project08, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/to_do_list',
    builtWith: [{ id: 0, name: 'PostgreSQL' }, { id: 1, name: 'ExpressJS' }, { id: 2, name: 'ReactJS' }, { id: 3, name: 'NodeJS' }]
  },
  {
    // To Do List.
    id: 8,
    type: 'backend',
    image: [{ id: 0, url: Project09, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/to_do_list/tree/main/api',
    builtWith: [{ id: 0, name: 'PosgreSQL' }, { id: 1, name: 'ExpressJS'}, { id: 2, name: 'NodeJS' }]
  },
  {
    // To Do List.
    id: 9,
    type: 'full-stack',
    image: [{ id: 0, url: Project10, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/django_to_do_list',
    builtWith: [{ id: 0, name: 'Sqlite3' }, { id: 1, name: 'DjangoPY' }, { id: 2, name: 'ReactJS' }]
  },
  {
    // To Do List.
    id: 10,
    type: 'backend',
    image: [{ id: 0, url: Project11, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/django_to_do_list/tree/main/api',
    builtWith: [{ id: 0, name: 'SQLite3' }, { id: 1, name: 'DjangoPY' }]
  },
  {
    // Send Emails.
    id: 11,
    type: 'backend',
    image: [{ id: 0, url: Project12, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/send_emails',
    builtWith: [{ id: 0, name: 'ExpressJS'}, { id: 1, name: 'NodeJS' }]
  },
  {
    // Calculator.
    id: 12,
    type: 'frontend',
    image: [{ id: 0, url: Project13, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/calculator',
    builtWith: [{ id: 0, name: 'ReactJS' }]
  },
  {
    // Multi-language App
    id: 13,
    type: 'frontend',
    image: [{ id: 0, url: Project14, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/multilanguage_app',
    builtWith: [{ id: 0, name: 'ReactJS' }]
  },
  {
    // Tic Tac Toe.
    id: 14,
    type: 'frontend',
    image: [{ id: 0, url: Project15, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/tic_tac_toe',
    builtWith: [{ id: 0, name: 'ReactJS' }]
  },
  {
    // Movie Search App.
    id: 15,
    type: 'frontend',
    image: [{ id: 0, url: Project16, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/movie_search_app',
    builtWith: [{ id: 0, name: 'ReactJS' }]
  },
  {
    // Shopping App.
    id: 16,
    type: 'frontend',
    image: [{ id: 0, url: Project17, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/shopping_app',
    builtWith: [{ id: 0, name: 'ReactJS' }]
  },
  {
    // annielvalle96_v1.0
    id: 17,
    type: 'frontend',
    image: [{ id: 0, url: Project18, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/annielvalle96_v1.0',
    builtWith: [{ id: 0, name: 'ReactJS' }]
  },
  {
    // annielvalle96_v1.0 Design.
    id: 18,
    type: 'design',
    image: [{ id: 0, url: Project19, cover: true }],
    name: 'Wo_Name',
    description: 'Wo_Description',
    role: 'Wo_Role',
    link: '',
    github: 'https://github.com/annielvalle96/annielvalle96_v1.0_design',
    builtWith: [{ id: 0, name: 'Figma' }]
  }
]

export default jsonData
