import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow:'5px 5px 30px gray'
    }
};

const AppointmentModal = ({ modalIsOpen, closeModal, title, bookingTime, appointmentData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.service = title;
        data.date = appointmentData.toDateString();
        data.time = bookingTime;
        data.created = new Date();

        fetch("http://localhost:5055/addAppointment",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then( result => {
            if(result){
                closeModal();
                alert("Appointment successful!");
            }
        })
    };

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center brand-text1">{title}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type='text' {...register("fullName", { required: true })} className="form-control mb-3" placeholder="Full Name"
                        select
                    />
                    {errors.fullName && <span>Name is required</span>}

                    <input type='number' {...register("phoneNumber", { required: true })} className="form-control mb-3" placeholder="Phone Number"/>
                    {errors.phoneNumber && <span>Phone Number is required</span>}

                    <input type='email' {...register("email", { required: false })} className="form-control mb-3" placeholder="Email Address if any"/>
                    {errors.email && <span>Email is Optional</span>}

                    <input type='date' {...register("date", { required: true })} className="mb-3 form-control"/>
                    {errors.date && <span>Date is required</span>}

                    <div className="row mb-3">
                        <div className="col-4" >
                            <select name="gender" className='form-control' id="" {...register("gender", { required: true })}>
                                <option disabled={true} value="set gender">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="not set">Other</option>
                            </select>
                            {errors.gender && <span>Date is required</span>}
                        </div>
                        <div className="col-4">
                            <input type='number' {...register("age", { required: true })} className="form-control" placeholder="Age"/>
                            {errors.age && <span>Age is required</span>}                            
                        </div>
                        <div className="col-4">
                            <input type='number' {...register("weight", { required: false })} className="form-control" placeholder="weight"/>
                            {errors.weight && <span>weight is Optional</span>} 
                        </div>
                    </div>

                    <input className="btn btn-info d-block ms-auto" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentModal;