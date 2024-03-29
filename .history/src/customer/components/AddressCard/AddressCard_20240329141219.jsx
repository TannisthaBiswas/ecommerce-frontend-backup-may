import React from 'react'

const AddressCard = () => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Emma Robinson</p>
        {/*`${address?.firstName} ${address?.lastName}`*/}
        <p>15, Silver Oak Street, California City
          {/*`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`*/}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>123456789</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
