const users = [{
  id: 1,
  name: 'João',
  email: "joao@hotmail.com",
  age: 28,
  profile_id: 1
}, {
  id: 2,
  name: 'ana',
  email: "ana@hotmail.com",
  age: 27,
  profile_id: 2
}, {
  id: 3,
  name: 'Carla',
  email: "carla@hotmail.com",
  age: 22,
  profile_id: 1
},{
  id: 4,
  name: 'Carlos',
  email: "carlos@hotmail.com",
  age: 21,
  profile_id: 1
}]

const profiles = [
  {id: 1, type: 'Common'},
  {id: 2, type: 'Adm' }
]


module.exports = { users, profiles }