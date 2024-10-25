import React, { useState } from "react";

const KYC = () => {
    const [formData, setFormData] = useState({
        addre: "",
        name: "",
        age: "",
        city: "",
        addr: "",
        bank_account: "",
        adhar_num: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submit logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-black min-w-screen flex justify-center items-center overflow-hidden">
            <div className="relative z-10 p-8 bg-white rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Complete Your KYC</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="addre"
                        placeholder="Address"
                        value={formData.addre}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="addr"
                        placeholder="Address Line"
                        value={formData.addr}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="bank_account"
                        placeholder="Bank Account"
                        value={formData.bank_account}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="adhar_num"
                        placeholder="Aadhar Number"
                        value={formData.adhar_num}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border rounded-lg"
                        accept="image/*"
                        required
                    />
                    <button type="submit" className="w-full py-3 bg-black text-white rounded-lg hover:bg-purple-500 transition-all">
                        Submit KYC
                    </button>
                </form>
            </div>
            <div className="absolute w-40 h-40 rounded-full bg-gray-400 -top-5 -left-5 hidden md:block"></div>
            <div className="absolute w-48 h-48 rounded-full bg-gray-400 -bottom-5 -right-5 hidden md:block"></div>
        </div>
    );
};

export default KYC;
