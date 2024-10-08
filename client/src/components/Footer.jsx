// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

// function Footer() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();

//     return (
//         <>
//             <footer className='fixed left-0 right-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20 w-full'>
//                 <section className='text-lg'>
//                     Copyright {year} | All rights reserved
//                 </section>
//                 <section className='flex items-center justify-center gap-5 text-2xl text-white'>
//                     <a href='#' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsFacebook />
//                     </a>
//                     <a href='#' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsInstagram />
//                     </a>
//                     <a href='#' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsLinkedin />
//                     </a>
//                     <a href='#' className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsTwitter />
//                     </a>
//                 </section>
//             </footer>
//         </>
//     );
// }

// export default Footer;



import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className='fixed left-0 right-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20 w-full'>
                {/* Copyright Section */}
                <section className='text-lg'>
                    Copyright {year} | All rights reserved
                </section>
                
                {/* Social Media Icons */}
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    {/* Facebook */}
                    <a 
                        href='https://www.facebook.com/profile.php?id=100041578942780' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook />
                    </a>
                    
                    {/* Instagram */}
                    <a 
                        href='https://www.instagram.com/your-instagram-id' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram />
                    </a>
                    
                    {/* LinkedIn */}
                    <a 
                        href='https://www.linkedin.com/in/rakesh-kumar-506b70246/' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin />
                    </a>
                    
                    {/* Twitter */}
                    <a 
                        href='https://x.com/RakeshK99529429' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    );
}

export default Footer;













// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
// function Footer() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();

//     return (
//         <>
//             <footer className='relative left-0 bottom-0 h-[10vh] py-5  flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
//                 <section className='text-lg text-red'>
//                     Copyright {year} | All rights reserved
//                 </section>
//                 <section className='flex items-center justify-center gap-5 text-2xl text-white'>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsFacebook />
//                     </a>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsInstagram />
//                     </a>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsLinkedin />
//                     </a>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsTwitter />
//                     </a>
//                 </section>
//             </footer>
//         </>
//     );

// }

// export default Footer;





