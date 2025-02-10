import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';

interface VariationsInputProps {
  options: Record<string, number>;
  onChange: (options: Record<string, number>) => void;
}

const VariationsInput = ({ options, onChange }: VariationsInputProps) => {
  const [inputs, setInputs] = useState<{ grams: string; price: string }[]>([]);

  useEffect(() => {
    const initialInputs = Object.entries(options).map(([grams, price]) => ({
      grams,
      price: price.toString(),
    }));
    setInputs(initialInputs);
  }, [options]);

  const handleAddInput = () => {
    setInputs((prev) => [...prev, { grams: '', price: '' }]);
  };

  const handleInputChange = (
    index: number,
    field: 'grams' | 'price',
    value: string
  ) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][field] = value;
    setInputs(updatedInputs);
  };

  const handleRemoveInput = (index: number) => {
    setInputs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const updatedOptions = inputs.reduce<Record<string, number>>(
      (acc, curr) => {
        if (curr.grams && curr.price) {
          acc[curr.grams] = parseInt(curr.price, 10);
        }
        return acc;
      },
      {}
    );

    onChange(updatedOptions);
  };

  return (
    <div className="space-y-4">
      <label>Варіації (грамовка - ціна):</label>
      {inputs.map((input, index) => (
        <div key={index} className="flex gap-4 items-center">
          <input
            type="number"
            placeholder="Грами (наприклад, 250)"
            value={input.grams}
            onChange={(e) => handleInputChange(index, 'grams', e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Ціна (наприклад, 250)"
            value={input.price}
            onChange={(e) => handleInputChange(index, 'price', e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => handleRemoveInput(index)}
            className="text-black"
          >
            <AiFillDelete />
          </button>
        </div>
      ))}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleAddInput}
          className="p-2 text-white bg-blue-500 rounded"
        >
          Додати варіацію
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="p-2 text-white bg-green-500 rounded"
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default VariationsInput;
