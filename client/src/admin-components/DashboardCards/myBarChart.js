import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const MyBarChart = () => {
  const [accounts, setAccounts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsResponse = await axios.get(
          "https://baylerview-api.onrender.com/api/logins"
        );
        setAccounts(accountsResponse.data.data);

        const contactsResponse = await axios.get(
          "https://baylerview-api.onrender.com/api/contacts"
        );
        setContacts(contactsResponse.data.data);

        const roomsResponse = await axios.get(
          "https://baylerview-api.onrender.com/api/rooms"
        );
        setRooms(roomsResponse.data.data);

        const newslettersResponse = await axios.get(
          "https://baylerview-api.onrender.com/api/newsletters"
        );
        setNewsletters(newslettersResponse.data.data);

        const testimonialsResponse = await axios.get(
          "https://baylerview-api.onrender.com/api/testimonials"
        );
        setTestimonials(testimonialsResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data = [
    { name: "Accounts", value: accounts.length },
    { name: "Contacts", value: contacts.length },
    { name: "Rooms", value: rooms.length },
    { name: "Newsletters", value: newsletters.length },
    { name: "Testimonials", value: testimonials.length },
  ];

  return (
    <>
      <BarChart width={1300} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  );
};
