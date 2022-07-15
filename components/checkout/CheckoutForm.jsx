import Image from "next/image";
import { useState } from "react";

const CheckoutForm = ({ totalAmount }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const bankProviders = [
    {
      src_path: "/visa.svg",
      alt_tag: "visa card payment",
    },
    {
      src_path: "/mastercard.svg",
      alt_tag: "master card payment",
    },
    {
      src_path: "/jcb.svg",
      alt_tag: "jcb card payment",
    },
    {
      src_path: "/american-express.svg",
      alt_tag: "american express card payment",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center shadow-xl overflow-hidden rounded-lg">
      <div className="w-full p-10">
        <div className="w-full flex flex-col justify-center md:items-start items-center md:justify-start pb-10 gap-5">
          <h2 className="font-bold text-3xl">Payment</h2>
          <h3 className="font-bold text-2xl">
            Total Amount is: ${totalAmount}
          </h3>
        </div>
        <form className="w-full flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/2 space-y-4 md:p-10 md:shadow-xl rounded-lg">
            <h3 className="font-bold text-lg">Billing Address</h3>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="fullname">
                Full Name:
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full "
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="billing_address">
                Address:
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                type="text"
                id="billing_address"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="country">
                Country:
              </label>
              <input
                onChange={(e) => setCountry(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                type="text"
                id="country"
                placeholder="Enter your country"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="city">
                City:
              </label>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                type="text"
                id="city"
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="phone_number">
                Phone number:
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                type="text"
                id="phone_number"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:shadow-xl md:p-10 rounded-lg">
            <h3 className="font-bold text-lg">Pay with card</h3>

            <div className="flex flex-col items-center gap-2 py-5">
              <div className="flex items-center gap-2">
                {bankProviders.map((provider, idx) => (
                  <div key={idx} className="relative w-16 h-16">
                    <Image
                      layout="fill"
                      src={provider.src_path}
                      alt={provider.alt_tag}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full h-[2px] bg-secondary"></div>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="card_owner_name">
                Name of the card owner:
              </label>
              <input
                onChange={(e) => setCardOwnerName(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                type="text"
                id="card_owner_name"
                placeholder="Ex. Dogan Saglam"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="font-semibold" htmlFor="card_number">
                Card number:
              </label>
              <input
                onChange={(e) => setCardNumber(e.target.value)}
                className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                type="text"
                id="card_number"
                placeholder="1234 5678 9012 3456"
                required
                maxLength="16"
              />
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className="w-full flex flex-col items-start gap-2">
                <label className="font-semibold" htmlFor="expiration_date">
                  Expiration date:
                </label>
                <input
                  onChange={(e) => setExpirationDate(e.target.value)}
                  className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                  type="text"
                  id="expiration_date"
                  placeholder="18/26"
                  required
                  maxLength="5"
                />
              </div>
              <div className="w-full flex flex-col items-start gap-2">
                <label className="font-semibold" htmlFor="security_code">
                  Security code
                </label>
                <input
                  onChange={(e) => setSecurityCode(e.target.value)}
                  className="border-2 border-accent rounded-lg py-2 px-1 w-full"
                  type="password"
                  id="security_code"
                  placeholder="***"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            <button className="bg-secondary py-4 rounded-lg font-bold text-buttonText hover:opacity-90">
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
