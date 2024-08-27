//destructuring in objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor    -> bhut bada lgta h ye to type

// const{}=nameOfTheObject    ->  syntax of destructuring

const{courseInstructor} = course

console.log(courseInstructor);

const{courseInstructor: instruct} = course;    // we can also simplify acc to ourself
console.log(instruct);


