import  { useState } from 'react';

export default function VehicleForSell() {
  const [model, setModel] = useState('');
  const [mileage, setMileage] = useState('');
  const [modelFocused, setModelFocused] = useState(false);
  const [mileageFocused, setMileageFocused] = useState(false);

  return (
    <div style={{ border: '1px solid lightgray' }} className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center">
        <div>
          <span style={{ fontSize: '14px', fontWeight: '100' }}>MarketPlace</span>
          <h1 className="text-2xl font-bold mb-4"> Vehicle for sale</h1>
        </div>
        <div>
          <button style={{ padding: '8px 16px', borderRadius: '6px', fontWeight: '600', color: 'blue' }}>
            Save Draft
          </button>
        </div>
      </div>
      <hr />

      {/* Location section */}
      <div className="w-full border rounded-md mb-3 flex items-center gap-3 p-2">
        <div>
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div>
          <p className="text-sm text-gray-700">Location</p>
          <p className="text-sm font-semibold text-gray-700" style={{ color: 'black', fontSize: '1rem' }}>Moose Jaw</p>
        </div>
      </div>

      {/* Vehicle type dropdowns */}
      <select style={{padding: '15px 10px'}} className="w-full border rounded-md p-2 mb-3">
        <option>Vehicle type</option>
      </select>
      <select style={{padding: '15px 10px'}} className="w-full border rounded-md p-2 mb-3">
        <option>Vehicle type</option>
      </select>

      {/* Model and Mileage inputs with alert icons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom:'1px solid gray' }}>
        <div className="relative w-full">
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            onFocus={() => setModelFocused(true)}
            onBlur={() => setModelFocused(false)}
            placeholder="Model"
            style={{
              border: '1px solid gray',
              borderRadius: '6px',
              padding: '15px 10px',
              width: '100%',
              color: model ? 'black' : 'red',
            }}
          />
          {!model && !modelFocused && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">Model</span>
          )}
          {!model && (
            <i  className="fa-solid fa-exclamation-circle text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2"
               style={{ transform: 'translateY(-50%)' }}></i>
          )}
          {modelFocused && !model && (
            <p className="text-red-500 text-xs mt-1">Please enter the model of the vehicle</p>
          )}
        </div>

        <div className="relative w-full mt-2 mb-3">
          <input
            type="text"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            onFocus={() => setMileageFocused(true)}
            onBlur={() => setMileageFocused(false)}
            placeholder="Mileage"
            style={{
              border: '1px solid gray',
              borderRadius: '6px',
              padding: '15px 10px',
              width: '100%',
              color: mileage ? 'black' : 'red',
            }}
          />
          {!mileage && !mileageFocused && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">Mileage</span>
          )}
          {!mileage && (
            <i className="fa-solid fa-exclamation-circle text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2"
               style={{ transform: 'translateY(-50%)' }}></i>
          )}
          {mileageFocused && !mileage && (
            <p className="text-red-500 text-xs mt-1">Please enter the mileage of the vehicle</p>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'  }}>
        <div className="relative w-full mt-5">
            <h1>Price</h1>
            <p>Enter Your Price For This Vehicale</p>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            onFocus={() => setModelFocused(true)}
            onBlur={() => setModelFocused(false)}
            placeholder="Model"
            style={{
              border: '1px solid gray',
              borderRadius: '6px',
              padding: '15px 10px',
              width: '100%',
              color: model ? 'black' : 'red',
            }}
          />
          {!model && !modelFocused && (
            <span className="absolute left-3 top-3/4 transform -translate-y-2/3 text-red-500">Model</span>
          )}
          {!model && (
            <i  className="fa-solid fa-exclamation-circle text-red-500 absolute right-3 top-3/4 transform -translate-y-1/2"
               style={{ transform: 'translateY(-50%)' }}></i>
          )}
          {modelFocused && !model && (
            <p className="text-red-500 text-xs mt-1">Please enter the model of the vehicle</p>
          )}
        </div>

       
      </div>
      <div className="mb-2 mt-4">
       
        <div className="w-full bg-gray-200 rounded-full flex h-2 mt-5">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          <div className="bg-gray-300 h-2 rounded-full" style={{ width: '50%' }}></div>

        </div>

      </div>
     

     

     
    </div>
  );
}