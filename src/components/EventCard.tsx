
interface EventDetails {
  id :number,
  image: string,
  name : string,
  date :string
}



const EventCard = (eventDetails : EventDetails) => {
  return (
    <div key={evenDetails.id}>
        <div className="-rotate-3 hover:rotate-0 transition w-40 h-52 border-8 rounded-xl border-white drop-shadow-2xl relative">
            <img className=" object-cover w-full h-full rounded-l  " src={evenDetails.image}></img>
            </div>
            <h1 className="-rotate-6 py-2 px-4 bg-white rounded-full absolute top-8 left-8 text-sm font-bold drop-shadow-lg ">{evenDetails.date}</h1>
    </div>
  )
}

export default EventCard;