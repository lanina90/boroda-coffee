'use client';

import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { MdDeleteOutline, MdModeEdit, MdCheck, MdClose } from 'react-icons/md';
import {
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  collection,
} from 'firebase/firestore';
import { db } from '@components/lib/firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IAnnouncement } from '@components/types/IAnnouncement';

const AnnouncementsList = ({
  announcements,
}: {
  announcements: IAnnouncement[];
}) => {
  const [filteredAnnouncements, setFilteredAnnouncements] =
    useState(announcements);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newAnnouncement, setNewAnnouncement] = useState<IAnnouncement | null>(
    null
  );
  const [editValues, setEditValues] = useState<IAnnouncement | null>(null);

  const onAddNewRow = () => {
    setNewAnnouncement({
      id: Date.now().toString(),
      announcement: '',
      dueDate: new Date().toISOString(),
      isActive: true,
    });
  };

  const onSaveNewAnnouncement = async () => {
    if (!newAnnouncement || !newAnnouncement.announcement.trim()) {
      alert('Текст оголошення не може бути порожнім!');
      return;
    }

    try {
      const newAnn = {
        ...newAnnouncement,
        dueDate: newAnnouncement.dueDate || new Date().toISOString(),
      };
      await addDoc(collection(db, 'announcements'), {
        announcement: newAnnouncement.announcement,
        isActive: newAnnouncement.isActive,
        dueDate: newAnnouncement.dueDate || new Date().toISOString(),
      });
      setFilteredAnnouncements([...filteredAnnouncements, newAnn]);
      setNewAnnouncement(null);
    } catch (error) {
      alert(
        `Помилка при додаванні: ${error instanceof Error ? error.message : error}`
      );
    }
  };

  const onAnnouncementDelete = async (id: string) => {
    if (window.confirm('Ти впевнена, що хочеш видалити це оголошення?')) {
      try {
        await deleteDoc(doc(db, 'announcements', id));
        setFilteredAnnouncements((prev) => prev.filter((a) => a.id !== id));
      } catch (error) {
        alert(`Помилка: ${error instanceof Error ? error.message : error}`);
      }
    }
  };

  const onEditAnnouncement = (announcement: IAnnouncement) => {
    setEditingId(announcement.id);
    setEditValues({ ...announcement });
  };

  const onEditChange = (
    field: keyof IAnnouncement,
    value: string | boolean | Date
  ) => {
    if (editValues) {
      setEditValues({
        ...editValues,
        [field]: value instanceof Date ? value.toISOString() : value,
      });
    }
  };

  const onSaveEdit = async () => {
    if (!editValues || !editValues.announcement.trim()) {
      alert('Текст оголошення не може бути порожнім!');
      return;
    }

    try {
      const { id, ...updateData } = editValues;
      const docRef = doc(db, 'announcements', id);
      await updateDoc(docRef, updateData);

      setFilteredAnnouncements((prev) =>
        prev.map((a) => (a.id === editValues.id ? editValues : a))
      );
      setEditingId(null);
      setEditValues(null);
    } catch (error) {
      alert(
        `Помилка при збереженні: ${error instanceof Error ? error.message : error}`
      );
    }
  };

  const onCancelEdit = () => {
    setEditingId(null);
    setEditValues(null);
  };

  const toggleStatus = async (id: string) => {
    const updatedAnnouncements = filteredAnnouncements.map((a) =>
      a.id === id ? { ...a, isActive: !a.isActive } : a
    );
    setFilteredAnnouncements(updatedAnnouncements);

    try {
      await updateDoc(doc(db, 'announcements', id), {
        isActive: !filteredAnnouncements.find((a) => a.id === id)?.isActive,
      });
    } catch (error) {
      alert(
        `Помилка при зміні статусу: ${error instanceof Error ? error.message : error}`
      );
    }
  };

  return (
    <div className="p-5 w-full mx-auto">
      <div className="flex justify-between items-center py-4">
        <button
          className="flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-2 text-white"
          onClick={onAddNewRow}
        >
          Додати оголошення <BiPlus />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">№</th>
              <th className="p-2 border">Текст оголошення</th>
              <th className="p-2 border">Дата закінчення</th>
              <th className="p-2 border">Статус</th>
              <th className="p-2 border">Дії</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnnouncements.map((announcement, index) => (
              <tr key={announcement.id} className="border">
                <td className="p-2 border">{index + 1}</td>

                <td className="p-2 border">
                  {editingId === announcement.id ? (
                    <input
                      type="text"
                      className="border p-1 w-full"
                      value={editValues?.announcement || ''}
                      onChange={(e) =>
                        onEditChange('announcement', e.target.value)
                      }
                    />
                  ) : (
                    announcement.announcement
                  )}
                </td>

                <td className="p-2">
                  {editingId === announcement.id ? (
                    <DatePicker
                      selected={
                        editValues ? new Date(editValues.dueDate) : new Date()
                      }
                      onChange={(date) => onEditChange('dueDate', date!)}
                      className="border p-1"
                    />
                  ) : (
                    new Date(announcement.dueDate).toLocaleDateString()
                  )}
                </td>

                <td className="p-2 border">
                  <button
                    className={`px-3 py-1 rounded ${
                      announcement.isActive ? 'bg-green-500' : 'bg-gray-400'
                    } text-white`}
                    onClick={() => toggleStatus(announcement.id)}
                  >
                    {announcement.isActive ? 'Активний' : 'Неактивний'}
                  </button>
                </td>

                <td className="p-2 flex gap-2 items-center h-full">
                  {editingId === announcement.id ? (
                    <>
                      <MdCheck
                        size={20}
                        className="cursor-pointer text-green-500"
                        onClick={onSaveEdit}
                      />
                      <MdClose
                        size={20}
                        className="cursor-pointer text-red-500"
                        onClick={onCancelEdit}
                      />
                    </>
                  ) : (
                    <>
                      <MdModeEdit
                        size={20}
                        className="cursor-pointer"
                        onClick={() => onEditAnnouncement(announcement)}
                      />
                      <MdDeleteOutline
                        size={20}
                        className="cursor-pointer text-red-500"
                        onClick={() => onAnnouncementDelete(announcement.id)}
                      />
                    </>
                  )}
                </td>
              </tr>
            ))}

            {newAnnouncement && (
              <tr className="border bg-yellow-100">
                <td className="p-2 border">
                  {filteredAnnouncements.length + 1}
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    className="border p-1 w-full"
                    value={newAnnouncement.announcement}
                    onChange={(e) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        announcement: e.target.value,
                      })
                    }
                  />
                </td>
                <td className="p-2 border">
                  <DatePicker
                    selected={new Date(newAnnouncement.dueDate)}
                    onChange={(date) =>
                      setNewAnnouncement({
                        ...newAnnouncement,
                        dueDate: date!.toISOString(),
                      })
                    }
                    className="border p-1"
                  />
                </td>
                <td className="p-2 flex gap-2">
                  <MdCheck
                    size={20}
                    className="cursor-pointer text-green-500"
                    onClick={onSaveNewAnnouncement}
                  />
                  <MdClose
                    size={20}
                    className="cursor-pointer text-red-500"
                    onClick={() => setNewAnnouncement(null)}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementsList;
