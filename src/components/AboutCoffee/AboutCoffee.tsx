'use client';

import React from 'react';
import Image from 'next/image';

const AboutCoffee = () => {
  return (
    <div
      className="container mx-auto p-6 left leading-5 rounded-2xl shadow-lg mb-10"
      id="coffee"
    >
      <h2 className="font-franklinGothicHeavy text-2xl font-bold mb-6">
        Як вибрати найсмачнішу каву?{' '}
      </h2>
      <p className="text-gray-600 mb-6">
        Погодьтеся, важко вибрати найкращу каву. Спробуйте кілька видів
        свіжозмеленої кави у найменшому форматі та обирайте для себе улюблений
        сорт кави з різних куточків світу. Швидше за все він буде не один.
      </p>

      <div className={'flex flex-col gap-16'}>
        <div className="flex gap-7 flex-wrap min-w-0">
          <div className="w-full h-auto min-h-6 aspect-[2/1] relative max-w-[500px] flex-shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/arabica-coffee.jpg"
              alt="arabica"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-left flex flex-col gap-2 leading-5 flex-1 min-w-[500px]">
            <h3 className="font-franklinGothicHeavy text-xl font-semibold mb-2">
              Арабіка
            </h3>
            <p className="text-gray-600">
              Батьківщиною арабіки є Ефіопія. Ботанічна назва – кавове дерево
              Аравійське. Це примхлива рослина, виростає на гірських плато,
              схилах, де спекотні дні і холодні ночі, але не витримує морозів.
              Після кожного сезону дощів кавові дерева зацвітають, а потім
              потрібно ще 9 місяців для дозрівання плодів. Одне деревце арабіки
              здатне дати лише 5 кг сировини, з якої отримують близько 1 кг
              готових до вживання кавових зерен. Саме кава різних сортів арабіки
              несе в собі ту смакову різноманітність, яку ми так любимо в цьому
              напої.
            </p>
            <p className="text-gray-600">Основні характеристики:</p>
            <ul className="text-gray-600 list-disc pl-5">
              <li>крупні зерна видовженої форми;</li>
              <li>ніжний, тонкий аромат з незначною кислинкою;</li>
              <li>невисокий вміст кофеїну (не більше 1,5%);</li>
              <li>на 18% складається з ароматичних масел.</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-7 flex-wrap min-w-0">
          <div className="text-left flex flex-col gap-2 leading-5 flex-1 min-w-[500px]">
            <h3 className="font-franklinGothicHeavy text-xl font-semibold mb-2">
              Робуста
            </h3>
            <p className="text-gray-600">
              Ботанічна назва робусти – кавове дерево Канефора Робуста.
              Батьківщиною цього виду кави вважається Африка, воно вперше було
              виявлено в басейні річки Конго. Цей вид кави містить більшу
              кількість кофеїну в зернах, тому має досить високу міцність, хоча
              не така ароматна й вишукана, як арабіка. Її частіше використовують
              у сумішах.
            </p>
            <p className="text-gray-600">Основні характеристики:</p>
            <ul className="text-gray-600 list-disc pl-5">
              <li>невеликі зерна округлої форми;</li>
              <li>високий вміст кофеїну (близько 3% від загальної маси);</li>
              <li>має сильний, насичений аромат.</li>
            </ul>
          </div>
          <div className="w-full h-auto min-h-6 aspect-[2/1] relative max-w-[500px] flex-shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/robusta-coffee.jpg"
              alt="arabica"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoffee;
