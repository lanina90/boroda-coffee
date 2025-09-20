'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/components/Container/Container';

const AboutCoffee = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-neutral-900 mb-6">
      <Container>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
              ПРО НАС
            </h2>
            <p className="text-lg leading-relaxed text-neutral-300 mb-4">
              Ми — BORODA DRINK, ветеранський бізнес з багаторічним досвідом у кавовій сфері. Ми починали зі створення власних кав’ярень у Львові, тож чудово знаємо всі процеси: від вибору зерна й роботи з обладнанням до стабільно смачної кави у вашій чашці.           </p>
            <p className="text-lg leading-relaxed text-neutral-300 mb-6">
              Сьогодні ми рухаємося далі та зосереджені на свіжій каві для дому, офісів і партнерів.
            </p>
            <p className="text-lg leading-relaxed text-neutral-300 mb-6">
              BORODA DRINK — це історія про досвід, натхнення та любов до кави.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-amber-400 text-2xl font-semibold mb-4 uppercase">Що ми пропонуємо:</h3>
            <ul className={'list-disc list-inside text-lg leading-relaxed text-neutral-300'}>
              <li>Оберемо разом з вами найкращій варіант кави, враховуючи ваші смаки і вподобання</li>
              <li>Пропонуємо зернову й мелену каву, авторські суміші</li>
              <li>Постачаємо як у роздріб, так і оптом, пропонуємо підписку, відкриті до співпраці </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCoffee;
