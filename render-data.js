const { faker } = require('@faker-js/faker');
const fs = require('fs')

const randomClassList = (n) => {
  const classList = []
  if(n <= 0) return []

  Array.from(new Array(n)).forEach(() => {
    const _class = {
      id: faker.datatype.uuid(),
      totalStudent: faker.datatype.number(40),
      supervising_Teacher: `${faker.name.lastName()} ${faker.name.firstName()}`,
      avatar_Teacher: faker.image.avatar(400, 400)
    }
    classList.push(_class)
  })

  return classList
}

const randomStudentList = (classList, studentOfClass) => {
  const studentList = []
  if(studentOfClass <= 0) return []

  for(const e of classList) {
    Array.from(new Array(studentOfClass)).forEach(() => {
      const student = {
        class_id: e.id,
        id: faker.datatype.uuid(),
        sex: faker.name.gender(),
        medium_score: Number.parseFloat(faker.datatype.number(10)),
        avatar: faker.image.avatar(400, 400),
        name: faker.name.fullName()
      }
      studentList.push(student)
    })
  }

  return studentList
}

(() => {
  const classList = randomClassList(10)
  const studentList = randomStudentList(classList, 5)

  const db = {
    class: classList,
    students: studentList
  }

  fs.writeFile('./db.json', JSON.stringify(db), () => {
    console.log('Write successfully')
  })
})()
