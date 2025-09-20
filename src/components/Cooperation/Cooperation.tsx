'use client'

import React from 'react';
import { FaHandshake, FaPhone } from 'react-icons/fa';
import Container from '@components/components/Container/Container';
import { motion } from 'framer-motion';

const Cooperation = () => {
  return (
    <div
      id={'partnership'}
      className="conainer py-6 text-center mx-auto leading-5"
    >
      <Container>
        <motion.div initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }} className="flex flex-col items-center gap-4 px-6 py-7">
          <FaHandshake className="text-5xl " />
          <h2 className="text-2xl font-bold font-franklinGothicHeavy">
            СПІВПРАЦЯ
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
        </motion.div>
      </Container>
    </div>
  );
};

export default Cooperation;
