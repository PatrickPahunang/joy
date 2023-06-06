import head1 from '../assets/head1.jpg'
import head2 from '../assets/head2.jpg'
import head3 from '../assets/head3.jpg'


import necklace1 from '../assets/necklace1.jpg';
import necklace2 from '../assets/necklace2.jpg';
import necklace3 from '../assets/necklace3.jpg';
import necklace4 from '../assets/necklace4.jpg';

import ring1 from '../assets/ring1.jpg';
import ring2 from '../assets/ring2.jpg';
import ring3 from '../assets/ring3.jpg';
import ring4 from '../assets/ring4.jpg';

import earrings1 from '../assets/earrings1.jpg';
import earrings2 from '../assets/earrings2.jpg';
import earrings3 from '../assets/earrings3.jpg';
import earrings4 from '../assets/earrings4.jpg';

import package1 from '../assets/package1.jpg';
import package2 from '../assets/package2.jpg';
import package3 from '../assets/package3.jpg';
import package4 from '../assets/package4.jpg';

import { useState } from 'react';
import Modal from 'react-modal';


 
function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

 
      
    return (
      
      
      <> 
      <h1 className='xl:mt-20 mt-10 text-center xl:text-6xl text-4xl -z-1 font-bold' data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">Discover the Beauty of Handcrafted Jewelry</h1>
      <p  className='w-screen h-max text-center xl:text-lg xl:px-60 px-8 text-md mt-4 mb-20' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Indulge in the allure of our exquisite bead and wire jewelry creations. Each piece is meticulously crafted to embody elegance and creativity. From delicate necklaces to stunning earrings, our collection offers something for every occasion.
      Visit our website or store today to explore our latest designs and find the perfect accessory that reflects your unique style.
      .</p>
      <div className="w-screen h-max flex flex-col justify-center items-center text-center">
     
        <div className="flex xl:flex-row flex-col w-screen h-max ">
          <div className="xl:w-1/3 w-screen" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100"><img src={head1} alt="head1" /></div>
          <div className="xl:w-1/3 w-screen" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"><img src={head2} alt="head2" /></div>
          <div className="xl:w-1/3 w-screen" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300"><img src={head3} alt="head3" /></div>
        </div>
        
      
      </div>

 
    
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay scale-150"
      >
        {/* Content for the modal */}
        <div className="modal-inner">
          <img src={necklace1} alt="Necklace" className="object-cover" />
          <button className="border-2 border-red-500 rounded-lg mt-4 px-8 py-2 text-white bg-red-500" onClick={closeModal}>Close</button>
        </div>
      </Modal>


      <p className=" xl:text-2xl text-base text-center xl:mt-20 mt-5 xl:px-80 px-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Introducing our exquisite Bead and Wire Jewelry Collection, where elegance meets craftsmanship. Explore our stunning earrings, rings, necklaces, and bracelets, meticulously handcrafted to elevate your style. Discover the perfect piece to accentuate your beauty and express your unique personality.</p>
      <div className="mt-10 w-screen h-max flex flex-col items-center text-center ">
      
        <p className="xl:my-10 xl:text-5xl text-2xl my-10" data-aos="zoom-in" data-aos-duration="1000" >Necklaces</p>
        <div className="xl:space-y-0 space-y-5 h-max w-screen  flex xl:flex-row flex-col justify-center xl:space-x-12 items-center">
        <img src={necklace1} onClick={openModal} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" />
        <img src={necklace2} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" />
        <img src={necklace3} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" />
        <img src={necklace4} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" />
        </div>

        <p className="xl:my-10 xl:text-5xl text-2xl  my-10" data-aos="zoom-in" data-aos-duration="1000" >Earrings</p>
        <div className="xl:space-y-0 space-y-5 h-max w-screen  flex xl:flex-row flex-col justify-center xl:space-x-12 items-center">
        <img src={earrings1} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" />
        <img src={earrings2} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" />
        <img src={earrings3} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" />
        <img src={earrings4} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" />
        </div>

        <p className="xl:my-10 xl:text-5xl text-2xl  my-10" data-aos="zoom-in" data-aos-duration="1000" >Rings</p>
        <div className="xl:space-y-0 space-y-5 h-max w-screen  flex xl:flex-row flex-col justify-center xl:space-x-12 items-center">
        <img src={ring1} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" />
        <img src={ring2} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" />
        <img src={ring3} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" />
        <img src={ring4} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" />
        </div>


        <p className="xl:my-10 xl:text-5xl text-2xl  my-10" data-aos="zoom-in" data-aos-duration="1000" >Set Packages</p>
        <div className="xl:space-y-0 space-y-5 h-max w-screen  flex xl:flex-row flex-col justify-center xl:space-x-12 items-center">
        <img src={package1} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" />
        <img src={package2} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" />
        <img src={package3} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" />
        <img src={package4} className="object-cover w-80 rounded-md shadow-2xl hover:scale-110 transition duration-500" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" />
        </div>
        
        
    


      </div>
    
  




<footer>
  <p className='text-center text-sm xl:text-base mt-20 mb-5'>Copyright All Rights Reserved MsJoy Collections ©</p>
</footer>






     
      </>
    )
  }


  export default Home
  