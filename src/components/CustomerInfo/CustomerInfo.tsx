'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/components/Container/Container';


const CustomerInfo = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-neutral-900 to-black ">
      <Container>
        <div className="max-w-5xl mx-auto text-center text-md leading-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-500 uppercase">Способи доставки і оплати</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left ">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Нова пошта та Укрпошта</h3>
              <p className="text-neutral-300">
                Відправляємо щодня у відділення, поштомати або за адресою. Вартість доставки оплачує одержувач (згідно з тарифами перевізника).
                <br/>При замовленні від 4 кг кави доставка «Новою поштою» — безкоштовна.
              </p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Адресна доставка по Львову</h3>
              <p className="text-neutral-300">
                Безкоштовна доставка при замовленні від 3000 грн.
                Якщо сума замовлення менша за 3000 грн — вартість доставки 200 грн.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center mt-8 text-md leading-5">
          {[
            {
              title: "Готівковий розрахунок",
              desc: "При отриманні замовлення у кур’єра (м. Львів).",
            },
            {
              title: "Безготівковий розрахунок",
              desc: "Онлайн оплата на сайті та/або оплата на рахунок ФОП.",
            },
            {
              title: "Накладений платіж",
              desc: "При доставці Новою Поштою.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-neutral-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-amber-400">{item.title}</h3>
              <p className="text-neutral-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
      </section>
    // <div
    //   className="py-12 bg-gray-50 text-black mb-10 leading-5 font-franklinGothicBook"
    //   id={'delivery'}
    // >
    //   <h2 className="text-3xl font-bold text-center mb-10 font-franklinGothicHeavy">
    //     Що ми пропонуємо?
    //   </h2>
    //   <div className="flex justify-center gap-12 items-start flex-wrap mx-auto">
    //     {steps.map((step, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col items-center text-center max-w-xs"
    //       >
    //         <motion.div
    //           initial={{ scale: 0, rotate: -90 }}
    //           animate={{ scale: 1, rotate: 0 }}
    //           transition={{ delay: index * 0.2, duration: 0.5 }}
    //         >
    //           {step.icon}
    //         </motion.div>
    //
    //         <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
    //         <p className="text-gray-600 mt-2">{step.description}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <Support />
    // </div>
  );
};

export default CustomerInfo;
