import head1 from '../assets/head1.jpg'
import head2 from '../assets/head2.jpg'
import head3 from '../assets/head3.jpg'

 
function Home() {
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
     
      </>
    )
  }


  export default Home
  