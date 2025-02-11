"use client";

import React, { useState } from 'react';

const ContactMePage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate a backend call
        setTimeout(() => {
            setIsSubmitting(false);
            setStatusMessage('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        }, 2000); // Simulating a delay of 2 seconds

        // You would typically send the form data to a server here, like:
        // await axios.post('/api/contact', formData);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-5xl font-bold text-center mb-10">
                Contact <span className="text-[#49d9d3]">Me</span>
            </h1>

            <div className="max-w-lg mx-auto">
                <form onSubmit={handleSubmit} className="bg-[#0a1d29] text-white p-8 rounded-lg shadow-xl">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-xl mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md bg-[#1c2a3d] text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md bg-[#1c2a3d] text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-xl mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md bg-[#1c2a3d] text-white"
                            rows={5}
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn bg-[#49d9d3] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#28b6b3] transition-all duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    {statusMessage && (
                        <div className="mt-4 text-center text-xl text-green-500">
                            {statusMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactMePage;
