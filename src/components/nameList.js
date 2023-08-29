import React from 'react'
import Person from './person'

function nameList() {
    // const names = ['bruce', 'clack', 'Diana']
    const names = [
        {
        id:1,
        name:'bruce',
        age: 30,
        skills:'Angular'
    },
    {
        id:2,
        name:'clack',
        age: 20,
        skills:'React'
    },
    {
        id:3,
        name:'Diana',
        age: 35,
        skills:'Vue'
    }
]
const personList =   names.map(person => <Person key={person.id} person={person}/>)
return <div>{personList}</div>
}

export default nameList