import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import Header from '../components/Layout/Header';
import { FaHome } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import Footer from '../components/Layout/Footer';
const Contact = () => {
  return (
    <>
     <Header> 
            </Header>
      <Breadcrumb title="Contact Us"/>
      <div className='contact-wrapper py-0 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12 mt-2'>
                    <div className='contact-inner-wrapper d-flex justify-content-between'>
                        <div><h3 className='contact-title mb-4'>Contact </h3>
                        <form action='' className='d-flex flex-column gap-2'>
                            <div>
                                <input type='text' className='form-control' placeholder='Name'/>
                            </div>
                            <div>
                                <input type='text' className='form-control' placeholder='Email'/>
                            </div>
                            <div>
                                <input type='text' className='form-control' placeholder='Mobile Number'/>
                            </div>
                            <div>
                                <textarea name='' id='' className='w-120 form-control' cols='30' rows='4' placeholder='Comments'/>
                            </div>
                            <div>
                                <button className='btn btn-outline-success border-0' style={{fontSize:'13px'}}>Submit</button>
                            </div>
                        </form>
                        </div> 
                        <div>
                            <h3 className='contact-title mb-4'>Get in touch with us</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li className='mb-4 d-flex gap-4 align-items-center'><FaHome className='fs-5'/>
                                    <address className='mb-0'>LuxeMART-Hapugala,Galle</address>
                                    </li>
                                    <li className='mb-4 d-flex gap-4 align-items-center'><LuPhoneCall className='fs-5'/>
                                    <a href='tel:+94 775425896' className='no-underline'>+94 775425896</a>
                                    </li>
                                    <li className='mb-4 d-flex gap-4 align-items-center'><IoMail className='fs-5'/>
                                    <a href='mailto:luxemart@gmail.com' className='no-underline'>mailto:luxemart@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-5'>
                <h3 className='contact-title mb-4 d-flex'>Location</h3>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3801575517105!2d80.19196460000002!3d6.079368400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1714b88f66a7b%3A0x8a7feea89839a01a!2sFaculty%20of%20Engineering%2C%20University%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1709366894058!5m2!1sen!2slk"
    width="600"
    height="450"
    className="border-0 w-100"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ zIndex: 0, boxShadow: '0 0 10px rgba(0.5, 0.5, 0.5, 0.5)', borderRadius:'20px'}}
  ></iframe>
</div>

            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
