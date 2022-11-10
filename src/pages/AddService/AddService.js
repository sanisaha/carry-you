import React from 'react';

const AddService = () => {
    const handleService = (event) => {
        event.preventDefault();
        const title = event.target.name.value;
        const img = event.target.photoURL.value;
        const price = event.target.price.value;
        const message = event.target.message.value;
        const service = {
            title: title,
            details: message,
            img: img,
            price: price,
            date: new Date()
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.error(e))

    }
    return (
        <div className='py-5'>
            <div className='text-center py-4'>
                <h2 className='font-semibold text-2xl'>Add a service here</h2>
            </div>
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleService}>
                    <div className="mb-5">
                        <label

                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Service Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="enter your service name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            photoURL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="your service image"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            price in $
                        </label>
                        <input
                            type="text"
                            name="price"
                            placeholder="price for service"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            details
                        </label>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Type your details"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                        ></textarea>
                    </div>
                    <div>
                        <input type="submit" value='Add Service' className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddService;