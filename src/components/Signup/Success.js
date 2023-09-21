import React from 'react';

function Success({name}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Welcome {name}!</h2>
        <p>Your registration was successful.</p>
      </div>
    </div>
  );
}

export default Success;
