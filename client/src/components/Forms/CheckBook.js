
export const CheckBook = () => {

  const handleCheckAvailability = () => {
    // Add your logic for checking availability here
    console.log("Checking availability...");
  };

  return (
 
    <section className="bg-yellow-100">
    <div className="mx-10 flex flex-col items-center md:flex-row md:justify-center bg-yellow-100">
      <div className="mb-4 md:mr-4 w-full md:w-auto">
        <label htmlFor="check-in" className="block text-gray-700 font-medium">Check-in</label>
        <input
          type="date"
          id="check-in"
          className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 md:mr-4 w-full md:w-auto">
        <label htmlFor="check-out" className="block text-gray-700 font-medium">Check-out</label>
        <input
          type="date"
          id="check-out"
          className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 md:mr-4 w-full md:w-auto">
        <label htmlFor="persons" className="block text-gray-700 font-medium">Persons</label>
        <input
          type="number"
          id="persons"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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


  );
};
