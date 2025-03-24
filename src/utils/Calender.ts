import dayjs from "dayjs"


export interface Month{
    date : dayjs.Dayjs;
    currentMonth : boolean;
    today? : boolean
}

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().month(month).year(year).startOf('month')
    const lastDateOfMonth = dayjs().month(month).year(year).endOf('month')


const arrayOfDate : Month[] = []


//prefix days
for(let i = 0; i < firstDateOfMonth.day(); i++){
    arrayOfDate.push({date:firstDateOfMonth.day(i), currentMonth : false})
}

console.log(arrayOfDate.length);


//curent date
for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
    arrayOfDate.push({date:firstDateOfMonth.date(i), currentMonth : true, today : firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()})
}

console.log(arrayOfDate.length);

//suffic days
const remaining = 42 - arrayOfDate.length
for(let i = lastDateOfMonth.day(); i <= remaining; i++){
    arrayOfDate.push({date:lastDateOfMonth.day(i+1), currentMonth:false})


}
console.log(arrayOfDate.length);



    return arrayOfDate;
}   


export default  generateDate;


export const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "October", "December"]