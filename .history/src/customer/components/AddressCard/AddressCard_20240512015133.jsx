import React from 'react'

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const AddressCard = ({address}) => {
  return (
    
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">{address?.firstName.toProperCase()+" "+address?.lastName.toProperCase()}</p>
        {/*`${address?.firstName} ${address?.lastName}`*/}
        <p>{address?.streetAddress.toProperCase()+", "+address?.state.toProperCase()+", "+address?.zipCode}
          {/*`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`
          */}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
