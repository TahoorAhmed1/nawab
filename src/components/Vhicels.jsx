
export default function VehicleForm() {
  return (
    <div style={{border:'1px solid lightgray'}} className="max-w-md mx-auto p-4  ">
    <div className='flex justify-between items-center'>
    <div>
    <span style={{fontSize:'14px', fontWeight:'100'}}>Market Place</span>
     <h1 className="text-2xl font-bold mb-4"> Vehicle for sale</h1>
     </div>
     <div>
     <button style={{backgroundColor:'lightgray', padding:'8px 16px',borderRadius:'6px',fontWeight:'600',color:'darkgray'}}>
        Save Draft
     </button>
     
     </div>
    </div>
    <hr />

      {/* User info with world icon */}
      <div className="flex items-center mb-4 mt-3">
      <img
  src="../assets/soni_auto_1 4.png"
  alt="User profile"
  className="w-10 h-10 rounded-full mr-3 object-cover"
/>

        <div>
          <p className="font-semibold">Soni Singh</p>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <p>Listing to Marketplace . <i className="fa-solid fa-earth-asia"></i> Public</p>
          </div>
        </div>
      </div>

      <select className="w-full border  rounded-md p-2 mb-4 ">
        <option>Vehicle type</option>
      </select>
      <div style={{marginTop:'-13px'}}> 
    <p style={{fontSize:'0.7rem'}}>Photos .0/20 Videos . 0/1</p>
      </div>

      {/* Add photos and video section */}
      <div className="flex justify-between mb-4">
        <div className="flex flex-col items-center w-1/2 p-4 border rounded-md mr-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xl font-bold">+</span>
          </div>
          <p className="text-sm mt-2 text-gray-700">Add photos</p>
          <p className="text-xs text-gray-500">(or drag and drop)</p>
        </div>
        <div className="flex flex-col items-center w-1/2 p-4 border rounded-md ml-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xl font-bold">+</span>
          </div>
          <p className="text-sm mt-2 text-gray-700">Add video</p>
          <p className="text-xs text-gray-500">(1 minute max)</p>
        </div>
      </div>

      {/* Upload photos section with mobile icon */}
      <div style={{borderBottom:'1px solid gray'}} className="flex items-center justify-between p-3 bg-gray-100 rounded-md mb-4">
        <div className='flex gap-2 items-center'>
        <i className="fa-solid fa-mobile-screen-button text-xl"></i>
        <p className="text-xs text-gray-600 " style={{fontSize:'0.8rem', color:'black', fontWeight:'400'}}>Upload photos directly from <br />your phone.  <span style={{color:'blue'}}>Learn more.</span></p>
        </div>
        <button style={{padding:'8px 10px',backgroundColor:'lightgray'}} className="text-black rounded font-semibold text-sm">Try it</button>
        
      </div>
    

      {/* About vehicle section with progress bar */}
      <div className="mb-4">
        <h2 className="font-bold mb-1 text-lg">About this vehicle</h2>
        <p className="text-sm text-gray-600 mb-2">Help buyers know more about the vehicle <br /> youre listing.</p>
        <div className="w-full border rounded-md flex items-center gap-3 p-2 ">
          <div>
          <i className="fa-solid fa-location-dot"></i>
          </div>
        <div>
        <p className="text-sm text-gray-700">Location</p>
        <p className=" text-sm font-semibold text-gray-700" style={{color:'black', fontSize:'1rem'}}>Moose Jaw</p>
        </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full flex h-2 mt-3">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          <div className="bg-gray-300 h-2 rounded-full" style={{ width: '50%' }}></div>

        </div>

      </div>

      {/* Next button */}
      <div className="flex justify-between items-center">
        <button className="w-full bg-gray-300 text-gray-600 font-semibold py-2 rounded-md" disabled>
          Next
        </button>
      </div>
    </div>
  );
}