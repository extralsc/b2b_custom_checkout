"use client"

import { useEffect, useState } from 'react';
import { CreditCard, Building, X, ChevronRight } from 'lucide-react';

type CustomerType = "private" | "company";

export default function ApoteaCheckout() {
  const [customerType, setCustomerType] = useState<CustomerType>("company");
  const [isShipping, setIsShipping] = useState(true)
  const [hideDetails, setHideDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('direct');
  const [deliveryMethod, setDeliveryMethod] = useState('service-point');
  const [postcode, setPostcode] = useState('115 20');
  const [showPopup, setShowPopup] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    email: 'christophersalame@gmail.com',
    postnummer: '461 30',
    fornamn: 'Christopher',
    efternamn: 'Salame',
    co: '',
    adress: 'Föreningsgatan 16',
    ort: 'Trollhättan',
    mobilnummer: '073••••254'
  });

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    setCustomerType("company");
    setIsShipping(true);
  }, [])


  return (
    <div className='bg-white mx-auto'>
      <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Dina uppgifter</h1>
        </div>

        {!isEditing ? (
          /* Display Mode */
          <div className="mb-8 flex flex-row justify-between items-start">
            <div>
              <div className="text-gray-600 mb-2 font-medium">
                Christopher Salame
              </div>
              <div>
                <div className="text-gray-600">
                  Föreningsgatan 16, 461 30, Trollhättan
                </div>
                <div className="text-gray-600 mb-4">
                  christophersalame@gmail.com, 073••••254
                </div>
              </div>
              <div className="flex gap-4 text-xs">
                <a href="#" className="text-neutral-600 underline hover:underline">Kustoms villkor gäller</a>
                <span className="text-gray-400">•</span>
                <a href="#" className="text-neutral-600 underline hover:underline">Hantera autofyllningsinställningar</a>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-sky-600 hover:text-sky-700 font-medium underline"
            >
              {isEditing ? 'Avbryt' : 'Ändra'}
            </button>
          </div>
        ) : (
          /* Edit Mode */
          <div className='mb-3'>
            {/* Header */}
            <div className="mb-4">
              <p className="text-gray-600 text-base">Adressen ska vara i Sverige.</p>
            </div>

            {customerType == "private" && (
              <>
                {/* Form Container */}
                <div className="border border-gray-300 rounded-lg mb-6">

                  {/* Email */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Mejladress</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Postal Code */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Postnummer</label>
                    <input
                      type="text"
                      value={customerInfo.postnummer}
                      onChange={(e) => handleInputChange('postnummer', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* First and Last Name - side by side */}
                  <div className="flex">
                    <div className="flex-1 p-4 border-r border-gray-300">
                      <label className="block text-sm text-gray-500 mb-2">Förnamn</label>
                      <input
                        type="text"
                        value={customerInfo.fornamn}
                        onChange={(e) => handleInputChange('fornamn', e.target.value)}
                        className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <label className="block text-sm text-gray-500 mb-2">Efternamn</label>
                      <input
                        type="text"
                        value={customerInfo.efternamn}
                        onChange={(e) => handleInputChange('efternamn', e.target.value)}
                        className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* C/O */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">C/O (frivilligt)</label>
                    <input
                      type="text"
                      value={customerInfo.co}
                      onChange={(e) => handleInputChange('co', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Address */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Adress</label>
                    <input
                      type="text"
                      value={customerInfo.adress}
                      onChange={(e) => handleInputChange('adress', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* City */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Ort</label>
                    <input
                      type="text"
                      value={customerInfo.ort}
                      onChange={(e) => handleInputChange('ort', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Mobile Number with info icon */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Mobilnummer</label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={customerInfo.mobilnummer}
                        onChange={(e) => handleInputChange('mobilnummer', e.target.value)}
                        className="flex-1 text-black font-semibold bg-transparent border-none outline-none p-0"
                      />
                      <div className="relative">
                        <button
                          onClick={() => setShowPopup(!showPopup)}
                          className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center bg-white ml-4 hover:bg-gray-50"
                        >
                          <span className="text-xs text-gray-600">i</span>
                        </button>

                        {/* Popup */}
                        {showPopup && (
                          <div className="absolute right-0 top-6 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                            <div className="text-sm text-gray-700 space-y-2">
                              <div className="font-semibold text-black mb-2">Information om mobilnummer</div>
                              <p>Vi använder ditt mobilnummer för att:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>Skicka leveransnotifieringar via SMS</li>
                                <li>Kontakta dig vid leveransproblem</li>
                                <li>Bekräfta din beställning</li>
                                <li>Skicka viktig information om din order</li>
                              </ul>
                              <div className="mt-3 pt-2 border-t border-gray-200 text-xs text-gray-500">
                                Ditt mobilnummer delas aldrig med tredje part och används endast för orderrelaterad kommunikation.
                              </div>
                            </div>
                            <button
                              onClick={() => setShowPopup(false)}
                              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-2 mb-8 text-xs">
                  <button className="text-gray-600 underline">
                    Kustoms villkor gäller
                  </button>
                  <span className="text-gray-400">•</span>
                  <button className="text-gray-600 underline">
                    Hantera autofyllningsinställningar
                  </button>
                </div>
              </>
            )}

            {customerType == "company" && (
              <>


                {/* Form Container */}
                <div className="border border-gray-300 rounded-lg mb-6">

                  {/* Organization Number */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Organisationsnummer (xxxxxx-xxxx)</label>
                    <input
                      type="text"
                      value={customerInfo.organisationsnummer}
                      onChange={(e) => handleInputChange('organisationsnummer', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Company Name */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Företagsnamn</label>
                    <input
                      type="text"
                      value={customerInfo.foretagsnamn}
                      onChange={(e) => handleInputChange('foretagsnamn', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* First and Last Name - side by side */}
                  <div className="flex">
                    <div className="flex-1 p-4 border-r border-gray-300">
                      <label className="block text-sm text-gray-500 mb-2">Förnamn</label>
                      <input
                        type="text"
                        value={customerInfo.fornamn}
                        onChange={(e) => handleInputChange('fornamn', e.target.value)}
                        className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <label className="block text-sm text-gray-500 mb-2">Efternamn</label>
                      <input
                        type="text"
                        value={customerInfo.efternamn}
                        onChange={(e) => handleInputChange('efternamn', e.target.value)}
                        className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Reference */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Referens (frivilligt)</label>
                    <input
                      type="text"
                      value={customerInfo.referens}
                      onChange={(e) => handleInputChange('referens', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Postal Code */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Postnummer</label>
                    <input
                      type="text"
                      value={customerInfo.postnummer}
                      onChange={(e) => handleInputChange('postnummer', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* City */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Ort</label>
                    <input
                      type="text"
                      value={customerInfo.ort}
                      onChange={(e) => handleInputChange('ort', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Address */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Adress</label>
                    <input
                      type="text"
                      value={customerInfo.adress}
                      onChange={(e) => handleInputChange('adress', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Email */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Mejladress</label>
                    <input
                      type="email"
                      value={customerInfo.mejladress}
                      onChange={(e) => handleInputChange('mejladress', e.target.value)}
                      className="w-full text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-300"></div>

                  {/* Mobile Number with info icon */}
                  <div className="p-4">
                    <label className="block text-sm text-gray-500 mb-2">Mobilnummer</label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={customerInfo.mobilnummer}
                        onChange={(e) => handleInputChange('mobilnummer', e.target.value)}
                        className="flex-1 text-black font-semibold bg-transparent border-none outline-none p-0 text-base"
                      />
                      <div className="relative">
                        <button
                          onClick={() => setShowPopup(!showPopup)}
                          className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center bg-white ml-4 hover:bg-gray-50"
                        >
                          <span className="text-sm text-gray-600">i</span>
                        </button>

                        {/* Popup */}
                        {showPopup && (
                          <div className="absolute right-0 top-7 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                            <div className="text-sm text-gray-700 space-y-2">
                              <div className="font-semibold text-black mb-2">Information om mobilnummer</div>
                              <p>Vi använder ditt mobilnummer för att:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>Skicka leveransnotifieringar via SMS</li>
                                <li>Kontakta dig vid leveransproblem</li>
                                <li>Bekräfta din beställning</li>
                                <li>Skicka viktig information om din order</li>
                              </ul>
                              <div className="mt-3 pt-2 border-t border-gray-200 text-xs text-gray-500">
                                Ditt mobilnummer delas aldrig med tredje part och används endast för orderrelaterad kommunikation.
                              </div>
                            </div>
                            <button
                              onClick={() => setShowPopup(false)}
                              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-2 mb-8 text-sm">
                  <button className="text-gray-600 underline hover:no-underline">
                    Kustoms villkor gäller
                  </button>
                  <span className="text-gray-400">•</span>
                  <button className="text-gray-600 underline hover:no-underline">
                    Hantera autofyllningsinställningar
                  </button>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end">
              <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-black bg-white" onClick={() => setIsEditing(false)}>
                Avbryt
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800" onClick={() => setIsEditing(false)}>
                Fortsätt
              </button>
            </div>
          </div>
        )}

        {/* Delivery Options - Only show in display mode */}
        {!isEditing && isShipping && (
          <div className="mb-8 border-t border-gray-200 pt-5 mt-10">
            <h2 className="text-xl font-medium mb-6">Leveransalternativ</h2>

            {/* Postcode Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-3">Postkod</label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    placeholder="115 20"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <button className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Delivery Methods */}
            <div className="space-y-3">
              {/* Service Point */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${deliveryMethod === 'service-point' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setDeliveryMethod('service-point')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={deliveryMethod === 'service-point'}
                      onChange={() => setDeliveryMethod('service-point')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Service point</div>
                      <div className="text-sm text-gray-500">2-4 Business days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">29 kr</span>
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">on</span>
                    </div>
                  </div>
                </div>

                {deliveryMethod === 'service-point' && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-300 cursor-pointer hover:bg-gray-100">
                      <div>
                        <div className="font-medium text-gray-900">ICA Karlaplan</div>
                        <div className="text-sm text-gray-500">Karlaplan 10, 115 20 Stockholm</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Parcel Locker */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${deliveryMethod === 'parcel-locker' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setDeliveryMethod('parcel-locker')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={deliveryMethod === 'parcel-locker'}
                      onChange={() => setDeliveryMethod('parcel-locker')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Parcel locker</div>
                      <div className="text-sm text-gray-500">1-3 Business days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Free</span>
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Delivery */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${deliveryMethod === 'home-delivery' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setDeliveryMethod('home-delivery')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={deliveryMethod === 'home-delivery'}
                      onChange={() => setDeliveryMethod('home-delivery')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Home Delivery</div>
                      <div className="text-sm text-gray-500">2-3 Business days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">35 kr</span>
                    <div className="w-8 h-6 bg-yellow-400 rounded flex items-center justify-center">
                      <span className="text-black text-xs font-bold">DHL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pick-up in Store */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${deliveryMethod === 'pickup-store' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setDeliveryMethod('pickup-store')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={deliveryMethod === 'pickup-store'}
                      onChange={() => setDeliveryMethod('pickup-store')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Pick-up in store</div>
                      <div className="text-sm text-gray-500">Ready for pickup in 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Free</span>
                    <div className="px-2 py-1 bg-gray-200 rounded text-xs font-medium text-gray-700">
                      NAKD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Methods - Only show in display mode */}
        {!isEditing && (
          <div className="mb-8 border-t border-neutral-200 pt-5">
            <h2 className="text-xl font-medium mb-6">Betalningssätt</h2>

            <div className="space-y-4">
              {/* Direct Payment */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === 'direct' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setPaymentMethod('direct')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={paymentMethod === 'direct'}
                      onChange={() => setPaymentMethod('direct')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Direkt</div>
                      <div className="text-sm text-gray-600">Kort, Swish och bank</div>
                    </div>
                  </div>
                  <div className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-sm font-medium">
                    Klarna
                  </div>
                </div>

                {paymentMethod === 'direct' && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-3">
                      Ta del av Klarnas <button className="text-sky-600 hover:underline">köparskydd</button>. Se <button className="text-sky-600 hover:underline">betalningsalternativ</button>.
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        VISA
                      </div>
                      <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-orange-500 rounded-full -ml-2"></div>
                      </div>
                      <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Bankomat
                      </div>
                      <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                        swish
                      </div>
                      <Building className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Invoice */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === 'faktura' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setPaymentMethod('faktura')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={paymentMethod === 'faktura'}
                      onChange={() => setPaymentMethod('faktura')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Faktura</div>
                      <div className="text-sm text-gray-600">30 dagar, månadsfaktura, 0 kr</div>
                    </div>
                  </div>
                  <div className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-sm font-medium">
                    Klarna
                  </div>
                </div>
              </div>

              {/* Card Payment */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === 'kort' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                onClick={() => setPaymentMethod('kort')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={paymentMethod === 'kort'}
                      onChange={() => setPaymentMethod('kort')}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="font-medium">Betala med kort</div>
                      <div className="text-sm text-gray-600">Fyll i kortuppgifter</div>
                    </div>
                  </div>
                  <CreditCard className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className="border-t border-neutral-200 pt-10">
          <div className="flex justify-between items-center mb-0">
            <h2 className="text-xl font-medium">Totalbelopp</h2>
            <span className="text-xl font-medium">89 kr</span>
          </div>

          {!hideDetails &&
            (


              <div className={`space-y-3 mt-0 mb-2 border rounded-lg p-4 border-gray-200`}>
                <div className="flex justify-between text-gray-600">
                  <span>Köp hos apotea.se</span>
                  <span>89 kr</span>
                </div>
                <div className="flex justify-between text-gray-600 border-b border-neutral-200 pb-2">
                  <span>Frakt</span>
                  <span>29 kr</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Totalbelopp</span>
                  <span>89 kr</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Moms</span>
                  <span>9,54 kr</span>
                </div>
              </div>
            )}

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Inkl. moms & frakt</span>
            <button className="text-sky-600 hover:underline text-sm underline" onClick={() => setHideDetails((prev) => !prev)}>
              {hideDetails ? "Visa" : "Dölj"} detaljer
            </button>
          </div>
          {customerType == "company" && (
            <div className="flex justify-between items-center text-sm mt-2 border-t border-neutral-100 pt-2">
              <span className="text-gray-600">Totalbelopp exkl. moms</span>
              <span className="font-medium text-gray-600 text-sm">71,2 kr</span>
            </div>
          )}

          <div className='mb-6' />

          {/* Purchase Button */}
          <div className="max-w-md mx-auto mt-5 pt-3">
            <button
              className={
                `w-full py-3 rounded-lg text-white font-medium text-md mb-4 
                ${isEditing ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'}
                `}
              disabled={isEditing}
            >
              {isEditing ? 'Betala köp' : 'Betala köp'}
            </button>

            {/* Terms */}
            <div className="text-left mt-3 text-xs text-gray-600 mb-6">
              Genom att klicka på &quot;Betala köp&quot; godkänner jag{' '}
              <button className="text-neutral-600 hover:text-neutral-500 underline hover:underline">Kustoms villkor</button>
              , bekräftar{' '}
              <button className="text-neutral-600 hover:text-neutral-500 underline hover:underline">dataskyddsinformationen</button>
              {' '}och godkänner apotea.ses{' '}
              <button className="text-neutral-600 hover:text-neutral-500 underline hover:underline">allmänna villkor</button>.
            </div>

            {/* Payment Icons */}
            <div className="flex justify-center gap-3 mb-6">
              <div className="bg-pink-200 text-pink-800 px-3 py-1 rounded text-sm font-medium">
                Klarna
              </div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                VISA
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full -ml-2"></div>
              </div>
              <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                swish
              </div>
            </div>

            {/* Kustom Checkout Logo */}
            <div className="text-center">
              <div className="text-gray-900 font-bold text-lg">Kustom</div>
              <div className="text-gray-500 text-sm">Checkout</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}