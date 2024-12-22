import  { useState } from 'react';

export default function VehicleDetails() {
//   const [model, setModel] = useState('');
//   const [mileage, setMileage] = useState('');
//   const [transmissionType, setTransmissionType] = useState('');
//   const [modelFocused, setModelFocused] = useState(false);
//   const [mileageFocused, setMileageFocused] = useState(false);
//   const [transmissionFocused, setTransmissionFocused] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <div style={{ border: '1px solid lightgray' }} className="max-w-md mx-auto p-4">
      
      {/* Vehicle type dropdowns */}
      <select style={{ padding: '15px 10px' }} className="w-full border rounded-md p-2 mb-3">
        <option>Body Style</option>
      </select>
      <select style={{ padding: '15px 10px' }} className="w-full border rounded-md p-2 mb-3">
        <option>Exterior Color</option>
      </select>
      <select style={{ padding: '15px 10px' }} className="w-full border rounded-md p-2 mb-3">
        <option>Interior Color</option>
      </select>
      <hr />

      <div style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>Vehicle Details</p>
        <p>Include more details to help connect interested buyers to your vehicle.</p>
      </div>

      <div style={{ marginTop: '10px' }} className='flex items-center justify-between'>
       <div>  
       <p style={{ fontWeight: '600', fontSize: '1rem' }}>The vehicle has a clean title</p>
       <p>This vehicle has no significant damage or persistent problems.</p>
       </div>
       <div>
       <input type="checkbox" style={{ transform: 'scale(1.5)', margin: '10px' }} />

       </div>
      </div>
     
      <select style={{ padding: '15px 10px' }} className="w-full border rounded-md p-2 mb-3 mt-5">
        <option>Vehicle Condition</option>
      </select>
   
      <select style={{ padding: '15px 10px' }} className="w-full border rounded-md p-2 mb-3">
        <option>Fuel type</option>
      </select>
     
      <select style={{ padding: '20px 10px' }} className="w-full border rounded-md p-2 mb-3">
        <option className='flex bg-black '>Transmission </option>
        
        
      </select>
      <p style={{
            position:'absolute',
            bottom:'0',
            top: '580px',
            paddingLeft:'15px',
            fontWeight:'400'

            
        }}>Automatic Transmission</p>

        <hr />

<div className="max-w-md mx-auto ">
      {/* Description Section */}
      <div style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>Description</p>
        <p>Tell buyer to anything that you have not had the <br />  chance to include yet about your device</p>
      </div>

      {/* Text Area for Description */}
      <textarea
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  rows={3} // Set to 3 lines
  cols={3} // Set to 3 columns
  style={{
    width: '100%',
    padding: '10px',
    border: '1px solid lightgray',
    borderBottom: 'none',
    borderRadius: '4px',
    marginTop: '10px', // Spacing from the above text
    resize: 'none', // Optional: Disable resizing for a fixed size
  }}
  placeholder="Enter your description here..."
/>

    </div>
    <div className="">
       
        <div className="w-full bg-gray-200 rounded-full flex h-2 mt-1">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          <div className="bg-gray-300 h-2 rounded-full" style={{ width: '50%' }}></div>

        </div>
        <hr />

      </div>
    </div>
  );
}