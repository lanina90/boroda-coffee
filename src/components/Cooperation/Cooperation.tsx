import React from 'react';
import { FaHandshake, FaPhone } from 'react-icons/fa';

const Cooperation = () => {
  return (
    <div
      id={'partnership'}
      className="conainer py-6 bg-black text-white text-center rounded-2xl shadow-lg mx-auto my-10 leading-5"
    >
      <div className="flex flex-col items-center gap-4 px-6">
        <FaHandshake className="text-5xl text-white" />
        <h2 className="text-2xl font-bold font-franklinGothicHeavy">
          Співпраця
        </h2>
        <p className="font-franklinGothicHeavy text-lg max-w-2xl">
          Ми готові до співпраці з магазинами та кав’ярнями за індивідуальними
          гуртовими прайсами. Усі деталі за телефоном:
        </p>
        <a
          href="tel:+380673860038"
          className="text-lg text-black bg-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition flex gap-3 items-center leading-5"
        >
          <FaPhone /> 067 386 0038
        </a>
      </div>
    </div>
  );
};

export default Cooperation;
