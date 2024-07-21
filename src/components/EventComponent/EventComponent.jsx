import React, {useState,useEffect} from 'react'
import './EventComponent.css'
import img1 from '../../assets/image1.jpeg'
import img2 from '../../assets/image2.jpeg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'


const events = [
  { name: 'yukthi ctf', image: img1 },
  { name: 'Workshop on AI', image: img2 },
  { name: 'Hackthon', image: img3 },
  { name: 'Birynai Festival', image: img4 },
];

const EventComponent = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-page">
      <div className="event-box">
        <img src={events[currentEvent].image} alt={events[currentEvent].name} />
        <h2>{events[currentEvent].name}</h2>
      </div>
    </div>
  );
};

export default EventComponent;