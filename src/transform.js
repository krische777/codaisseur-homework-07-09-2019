function groupAdultsByAgeRange(inputArr) {

   resultArr = inputArr.filter(person => person.age >= 18)
   let finalObject = {}
   const peopleUnder20 = resultArr.filter(person => person.age <= 20)
   const peopleBetween20And30 = resultArr.filter(person => person.age > 20 && person.age <= 30)
   const peopleBetween30And40 = resultArr.filter(person => person.age > 30 && person.age <= 40)
   const peopleBetween40And50 = resultArr.filter(person => person.age > 40 && person.age <= 50)
   const peopleOver50 = resultArr.filter(person => person.age > 50)

   if (!isEmpty(peopleUnder20)) {
      finalObject['20 and younger'] = peopleUnder20
   }
   if (!isEmpty(peopleBetween20And30)) {
      finalObject['21-30'] = peopleBetween20And30
   }
   if (!isEmpty(peopleBetween30And40)) {
      finalObject['31-40'] = peopleBetween30And40
   }
   if (!isEmpty(peopleBetween40And50)) {
      finalObject['41-50'] = peopleBetween40And50
   }
   if (!isEmpty(peopleOver50)) {
      finalObject['51 and older'] = peopleOver50
   }

   return finalObject

}

function isEmpty(arr) {
   return arr == undefined || arr.length == 0
}

module.exports = { groupAdultsByAgeRange }