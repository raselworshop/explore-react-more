import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';
import { Audio, Circles } from 'react-loader-spinner';
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhone] = useState([]);
    const [loading, setLoading] = useState(true)

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
                setLoading(false)
            })
    })

    return (
        <div>
            {
                loading && <div className="flex">
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />
                    render(<Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />)
                </div>
            }
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