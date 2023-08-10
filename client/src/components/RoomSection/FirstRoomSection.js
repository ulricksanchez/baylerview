import { useEffect, useState } from 'react';
import axios from 'axios';
import Room1 from '../../assets/room-images/room-3.png';

export const FirstRoomSection = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // const url = `https://baylerview-api.onrender.com/api/rooms`;
        const response = await axios.get(
          'https://baylerview-api.onrender.com/api/rooms'
        );
        const data = await response.data;
        const roomsArray = Object.values(data);

        setRooms(roomsArray[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRooms();
  }, []);

  // Loop through the room data and generate the cards dynamically
  const roomCards = rooms
    .filter((room) => room.room_type === 'standard') //####### change room type here #######
    .map((room) => (
      <div className="items-center mx-auto flex px-5 py-3" key={room._id}>
        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Room1} alt="standard-room" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">{room.name}</div>
            {/* Pull records from database to show stars */}
            <div className="rate flex">
              {Array.from({ length: room.stars }).map((_, index) => (
                <i className="fa fa-star text-yellow-600" key={index}></i>
              ))}
            </div>
            <p className="text-gray-700 text-base pt-3">
              <span className="font-semibold">Description : </span>
              {room.description}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Amenities : </span>
              {`${room.amenities}`}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Capacity : </span>
              {`${room.capacity}`}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Rate : </span>
              {`P${room.rate}.00`}
            </p>
          </div>
          <div className="px-6 pt-2 pb-2 mb-2">
            <button
              type="button"
              className="py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="testimonials" className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto pt-10 px-6">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              Standard Bay-Ler's Rooms
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-md leading-7 text-gray-500 font-light">
              Effortless Comfort for Every Guest: Enjoy Tranquility in Our
              Standard Room
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3">{roomCards}</div>
        </div>
      </div>
    </section>
  );
};
