const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const initModels = require("../models/initModels");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const db = require('../utils/database');
const {forEach} = require('p-iteration')

initModels();

const users = [
    {
        firstName: "Roberto",
        lastName: "Cuberos",
        email: "robertocuberos@gmail.com",
        password: "22953055"
    },
    {
        firstName: "Marcos",
        lastName: "Guntinas",
        email: "mauricio@gmail.com",
        password: "2345"
    },
    {
        firstName: "Jose",
        lastName: "Irizary",
        email: "joseramoniri@gmail.com",
        password: "4321"
    },
];

const categories = [
    {name: "Soporte IT"},
    {name: "Frontend"},
    {name: "Backend"},
    {name: "Seguridad Informatica"}
];

const courses = [
    {
        title: "Soporte IT",
        description: "Curso Practico de Soporte IT",
        instructor: "Roberto Cuberos",
        categoryId: 2,
    },
    {
        title: "Frontend",
        description: "Desarrollo de Aplicaciones con React",
        instructor: "Jose Gonzalez",
        categoryId: 1,
    },
    {
        title: "Backend",
        description: "Creacion de Bases de Datos con Postgres",
        instructor: "Hector de Gante",
        categoryId: 4,
    },
    {
        title: "Seguridad Informatica",
        description: "Elio Anderson",
        instructor: "Raymundo",
        categoryId: 3,
    }
];

const videos = [
    {
    title: "Como crear un tabla ",
    url: "www.sql.com",
    courseId: 3,
    },
    {
    title: "Que es npm",
    url: "www.node.com",
    courseId: 1,
    },
    {
    title: "Que es un componente",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Como crear un custome hook",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Bootstrap",
    url: "www.bootstrap.com",
    courseId: 4,
    },
];

const userCourses = [
    {user_id:1 , course_id:1},
    {user_id:3 , course_id:4},
    {user_id:3 , course_id:1},
    {user_id:2 , course_id:3},
    {user_id:1 , course_id:2}
  
];



async function seeding () {
    await db.sync({force: false})
   
    await forEach (users, (user)=> Users.create(user))
    await forEach (categories, (category)=>Categories.create(category))
    await forEach (courses, (course)=> Courses.create(course))
    await forEach (videos, (video)=> Videos.create(video))
    await forEach (userCourses, (userCourse)=> UserCourses.create(userCourse))
    
};


seeding();



