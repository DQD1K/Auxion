import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    id: null,
    username: '',
    email: '',
    password: '',
    fullName: '',
    avatar: '',
    bio: '',
    createdAt: '',
    updatedAt: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id: Math.floor(Math.random() * 1000) + 1, // Генерируем случайный ID
      createdAt: new Date().toISOString(), // Устанавливаем дату создания
      updatedAt: new Date().toISOString() // Устанавливаем дату обновления
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // Передаем данные в основной компонент
    setFormData({
      id: null,
      username: '',
      email: '',
      password: '',
      fullName: '',
      avatar: '',
      bio: '',
      createdAt: '',
      updatedAt: ''
    }); // Очищаем форму после отправки
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      <input type="text" name="avatar" placeholder="Avatar URL" value={formData.avatar} onChange={handleChange} />
      <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange}></textarea>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;