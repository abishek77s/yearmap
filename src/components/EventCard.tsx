
interface EventDetails {
  id: number;
  image: string;
  name: string;
  date: string;
  location: string;
  description: string;
  price: string;
  category: string;
}



const EventCard = ({eventDetails} : {eventDetails : EventDetails}) => {
  return (
<div className="-rotate-3 hover:rotate-0 transition w-40 h-52 border-8 rounded-xl border-white drop-shadow-2xl relative">
      <img
        className="object-cover w-full h-full rounded-lg"
        src={eventDetails.image}
        
      />
      <h1 className="-rotate-6 py-2 px-4 bg-white rounded-full absolute -top-2 -left-8 text-sm font-bold drop-shadow-lg">
        {eventDetails.date}
      </h1>
    </div>
  )
}

export default EventCard;