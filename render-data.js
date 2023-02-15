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

(() => {
  const classList = randomClassList(2)
  const db = {
    class: classList
  }
  fs.writeFile('./db.json', JSON.stringify(db), () => {
    console.log('Write successfully')
  })
})()
