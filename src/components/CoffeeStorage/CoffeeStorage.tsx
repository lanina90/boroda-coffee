'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/components/Container/Container';

const CoffeeStorage = () => {
  return (
    <section className="py-20 px-6 md:px-16 rounded-2xl">
      <Container>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 ">Як зберігати каву в зернах</h2>
            <ul className="list-disc list-inside space-y-2 ">
              <li>Зберігайте каву в зіп-пакеті.</li>
              <li>Тримайте подалі від вологи, тепла та сонця.</li>
              <li>Ідеальна температура — 18–22 °C.</li>
              <li>Подрібнюйте безпосередньо перед приготуванням.</li>
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl shadow-xl h-full"
          >
            <h2 className="text-3xl font-bold mb-6 ">Як зберігати мелену каву</h2>
            <ul className="list-disc list-inside space-y-2 ">
              <li>Тримайте у щільно закритому зіп-пакеті.</li>
              <li>Використовуйте протягом 1–2 тижнів після відкриття.</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-3 p-3 rounded-2xl text-neutral-500 text-md "
        >
          <p className="italic text-left">
            Порада: не купуйте каву «на рік вперед». Свіжість = найкращий смак, правильне зберігання гарантує насолоду від кожної чашки...
          </p>
        </motion.div>
      </Container>
    </section>
    // <div className="container p-6 bg-white rounded-2xl shadow-lg mx-auto mb-10 flex gap-7 flex-wrap min-w-0 leading-5">
    //   <div className="text-left flex flex-col gap-2 leading-5 flex-1 min-w-[500px]">
    //     <h2 className="font-franklinGothicHeavy text-2xl font-semibold mb-4 text-center">
    //       Як зберігати каву?
    //     </h2>
    //     <div className="flex flex-col gap-4">
    //       {storageTips.map((tip, index) => (
    //         <div
    //           key={index}
    //           className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl"
    //         >
    //           <div>{tip.icon}</div>
    //           <div>
    //             <h3 className="text-lg font-medium">{tip.title}</h3>
    //             <p className="text-gray-600">{tip.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="w-full h-auto min-h-6 aspect-[2/1] relative max-w-[500px] flex-shrink-0 rounded-2xl overflow-hidden">
    //     <Image
    //       src="/coffee-storage.jpg"
    //       alt="coffee storage"
    //       fill
    //       className="object-cover"
    //     />
    //   </div>
    // </div>
  );
};

export default CoffeeStorage;
