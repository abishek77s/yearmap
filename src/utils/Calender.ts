import dayjs from "dayjs"


const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().month(month).year(year).startOf('month')
    const lastDateOfMonth = dayjs().month(month).year(year).endOf('month')


const arrayOfDate= []


//prefix days
for(let i = 0; i <= firstDateOfMonth.day(); i++){
    arrayOfDate.push(firstDateOfMonth.day(i))
}



//curent date
for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
    arrayOfDate.push(firstDateOfMonth.date(i))
}



//suffic days
const remaining = 42 - arrayOfDate.length
for(let i = lastDateOfMonth.day(); i <= remaining; i++){
    arrayOfDate.push(lastDateOfMonth.day(i))


}



    return arrayOfDate
}   


export default  generateDate;