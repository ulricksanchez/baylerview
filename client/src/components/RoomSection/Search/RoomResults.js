import { useEffect, useState } from 'react';
import axios from 'axios';
import Room1 from '../../../assets/room-images/room-3.png';

export const RoomResults = () => {
  const [rooms, setRooms] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [persons, setPersons] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
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

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.post(
        'https://baylerview-api.onrender.com/api/rooms/available',
        { checkIn, checkOut, persons }
      );
      const data = await response.data;

      setRooms(data.data);
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  const handleReservationSubmit = async (roomNumber) => {
    try {
      const response = await axios.post(
        'https://baylerview-api.onrender.com/api/reservations',
        {
          roomNumber,
          checkIn,
          checkOut,
          persons,
          name,
          email,
        }
      );

      const data = await response.data;
      console.log(data);
      alert('Room Successfully Booked');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  const roomCards = rooms.map((room) => (
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
            onClick={() => handleReservationSubmit(room.roomNumber)}
          >
            Reserve The Room
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="bg-yellow-100">
        <div className="mx-10 flex flex-col items-center md:flex-row md:justify-center bg-yellow-100">
          <div className="mb-4 md:mr-4 w-full md:w-auto">
            <label
              htmlFor="check-in"
              className="block text-gray-700 font-medium"
            >
              Check-in
            </label>
            <input
              type="date"
              id="check-in"
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="mb-4 md:mr-4 w-full md:w-auto">
            <label
              htmlFor="check-out"
              className="block text-gray-700 font-medium"
            >
              Check-out
            </label>
            <input
              type="date"
              id="check-out"
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="mb-4 md:mr-4 w-full md:w-auto">
            <label htmlFor="adults" className="block text-gray-700 font-medium">
              Persons
            </label>
            <input
              type="number"
              id="capacity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="m-3 py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white"
            onClick={handleCheckAvailability}
          >
            Check Availability
          </button>
        </div>
      </section>
      <div className="mx-10 flex flex-col items-center md:flex-row md:justify-center">
        <div className="mb-4 w-full md:w-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white"
              onClick={handleReservationSubmit}
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </div>
      <section id="testimonials">
        <div className="max-w-screen-xl mx-auto my-12 px-6">
          <div className="flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
              Available Rooms
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <h5 className="poppins text-gray-500 pb-4 text-center">
            Rooms available for reservation
          </h5>
          {roomCards}
        </div>
      </section>
    </>
  );
};

export default RoomResults;
