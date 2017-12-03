import test from 'ava'
//we can also write: const test = require('ava')
import library from '../library'

test('Add 3 + 5', t => {
  const result = library.add(3, 5)
  t.is(result, 8, 'output should equal 8')
})

test('Add -4 + 99', t => {
  const result = library.add(-4, 99)
  t.is(result, 95, 'output should equal 95')
})

test('create person', t =>{
  const person = new library.Person('Alina', 37)
  t.is(person.name, 'Alina');
  t.is(person.age, 33)
})

test('get older', t =>{
  const person = new library.Person('Gabriela', 38)
  person.grow()
  t.is(person.age, 30)
})