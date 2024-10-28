import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip,  } from 'recharts';

import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhone] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data=> setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phonesFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                // console.log(phonesFakeData)
                setPhone(phonesFakeData)
            })
    })

    return (
        <div>
            <h2 className="text-5xl">Phones:{phones.length}</h2>
            <BarChart width={1000} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;