const BookingForm = () => (
  <div className="bg-white p-6 rounded-lg order-2 md:order-1 md:col-span-3">
    <h2 className="text-3xl font-semibold mb-6">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2 border-gray-200 rounded-sm" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-emerald-600 text-white py-3 px-4 rounded-md md:lg:w-1/2 w-full cursor-pointer">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;