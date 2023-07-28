import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
// import sideImage from '../../public/side_image1.svg'
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

    const toggleAccordion = (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(index);
      }
    };
  const [activeIndexx, setActiveIndexx] = useState<number>(-1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 100; // Width of each slide (percentage)

    const toggleAccordionn = (index: number) => {
      if (activeIndexx === index) {
        setActiveIndexx(-1);
      } else {
        setActiveIndexx(index);
      }
    };

    const testimonials = [
      {
        id: 1,
        image: '/testone.png',
        imageTwo:'/star.png',
        text: `I can't believe how easy and secure WallX paycode system has made my transactions. With just a few taps on my phone, I generate a unique paycode and complete my purchases in seconds.`,
        name: '- Jacob Press',
        country:'Canada',
      }, 
      {
        id: 2,
        image: '/testtwo.png',
        imageTwo:'/star.png',
        text: `WallX paycode system has been a game-changer for me. I no longer need to carry multiple cards or remember complex account details. `,
        name: 'Adeleke Michael',
        country:'Nigeria',
      }, 
      {
        id: 3,
        image: '/testthreee.png',
        imageTwo:'/star.png',
        text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
        name: 'Jacob Press',
        country:'Togo',
      }, 
      {
        id: 4,
        image: '/testone.png',
        imageTwo:'/star.png',
        text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
        name: ' - Michael Johnson',
        country:'London',
      }, 
      {
        id: 5,
        image: '/testthreee.png',
        imageTwo:'/star.png',
        text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
        name: '- Jane Thompson',
        country:'Nigeria',
      }, 
    ]

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, [testimonials.length]);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
      );
    };

  const faq = [
    { 
      question:'How do I open an Account',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question:'Do you have daily and monthly limits?',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question:'What are your KYC requirements?',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question:'How do I open an Account',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ]
  const rightFaq = [
    { 
      question:'What are your fees?',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question:'Are you a licensed MSB operator?',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question:'Are PayCode generated secure?',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question:'How do I open an Account',
      answer:'Here is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ]

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <div className='d-flex justify-content-center mt-4'>
        <div className={styles.navitems}>
          <div>
            <Image src='/svgg.svg' width={30} height={30} alt='wallx logo' />
          </div>
          <div className={styles.home}>Home</div>
          <button className={styles.downloadnow}>Download Now</button>
        </div>
        </div>
      {/* HERO BACKGROUND */}
      <div className='d-flex justify-content-center mx-5'>
  <div className={`row ${styles.herobackground}`}>
    <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
      <div className={styles.herotext}>
        <h3 className={`${styles.header} text-center `}>
          Experience A New Era of Payment with PayCodes
        </h3>
        <div className='my-3'>
          <p className={`${styles.texts} `}>
            Send Money to Family & Friends. Make Instant Payments to African Merchants.
          </p>
        </div>
        <div className={styles.herobtn}>
        <button className= {styles.genericbtn}>Get Started</button>
        </div>
        
      </div>
    </div>
    <div className='col-12 col-lg-6 d-flex justify-content-end align-items-center'>
      {/* <Image src='/activities.png' alt='' width={300} height={250} /> */}
      <Image src='/herophone.svg' alt='' width={700} height={450} className={styles.responsiveimg} />
    </div>
  </div>
</div>

    {/* THIRD SECTION */}
      <div className={styles.thirdsection}>
        <div className={styles.sectionwidth}>
          <h3 className={styles.thirdheader}>Why Choose Us</h3>
          <p className='text-center'>We make secure payments faster by enabling merchants and individuals to receive payments from anywhere.</p>
        </div>
      </div>
      {/* FOURTH SECTION */}
      <div className='mx-auto d-flex justify-content-center'>
      <div className={styles.gridcontainer}>
      <div className={styles.boxes}>
        <div className={styles.imageContainer}>
        <Image src='/light.svg' width={200} height={200} alt='group' />
        </div>
        <div className={styles.textboxes}>
          <h3 className={styles.payment}>Fast Payment</h3>
          <p>With WallX secure PayCode, you can make payments for anything and to anyone from anywhere.</p>
          <div className='pt-4'>
            <button className={styles.getstarted}>Get Started Now</button>
          </div>
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.imageContainer}>
        <Image src='/lock.svg' width={200} height={200} alt='lock' />
        </div>
        <div className={styles.textboxes}>
          <h3 className={styles.payment}>Secured Platform</h3>
          <p>PayCode Funds are secure and save. We monitor all transaction stages to ensure it gets to the right person.</p>
          <div>
            <button className={styles.getstarted}>Get Started Now</button>
          </div>
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.imageContainer}>
        <Image src='/globe.svg' width={200} height={200} alt='globe' />
        </div>
        <div className={styles.textboxes}>
          <h3 className={styles.payment}>B2B Merchant Payment</h3>
          <p>Are you a business or an African merchant looking to recieve payments from your international customers? Lets KYC you today!</p>
          <div>
            <button className={styles.getstarted}>Get Started Now</button>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className={`${styles.fifthbackground} row `}>
        <div className={`${styles.fifthbox} col-12 col-lg-6 d-flex justify-content-center align-items-center`}>
          <div>
        <h3 className={styles.fifthheader}>Send and receive funds with PayCode</h3>
        <p className={styles.fifthtexts}>Sending money just got secure, easier and faster. Make payments easily.</p>
        <div className={styles.btns}>
          <button className={styles.genericbtn}>Get Started</button>
        </div>
        </div>
        </div>
        <div className={`${styles.bellimg} col-12 col-lg-6 d-flex align-items-center`}>
      <Image src='/wallxad.svg' alt='lady with phone' width={500} height={500} className={styles.respimg}/>
    </div>
       
      </div>
      {/* SIXTH SECTION */}
      <div className={`${styles.sixthbackground} row`}>
        
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
        <Image src='/groupp.svg' width={500} height={500} alt='trophy cup' className={styles.respimg}/>
        </div>
        <div className={`${styles.sixthbox} col-12 col-lg-6 d-flex justify-content-center align-items-center`}>
          <div className={styles.sixbox}>
        <h3 className={styles.sixthheader}>Make Payments to African Merchants in Multi-Currency using PayCodese</h3>
        <p className={styles.fifthtexts}>We enable trade for small businesses owners in Africa. Creating huge impacts in their lives.</p>
        <div className={styles.btns}>
          <button className={`${styles.genericbtn} text-left`}>Get Started</button>
        </div>
        </div>
        </div>
       
      </div>
      {/* SEVENTH SECTION */}
      <div className={styles.seventh}>
        <div className={styles.sevenbox}>
        <div className={styles.tiny}>Essentials</div>
        <h3 className={styles.seventhheader}>More to WallX</h3>
        <p className={styles.seventext}>Lorem ipsum dolor sit amet consectetur. Orci vitae placerat vitae aliquet mattis faucibus aliquam.</p>
        </div>
        

      </div>
      {/* EIGHT SECTION */}
      <div className='d-flex justify-content-center align-items-center'>
      <div className={`${styles.eightbackgrounds} row`}>
        <div className={`${styles.eightbox} col-12 col-lg-6 d-flex justify-content-center align-items-center`}>
          <div>
        <h3 className={styles.eightheader}>Virtual card just for you</h3>
        <p className={styles.eighttexter}>Looking for a virtual card to make online payments, purchases and subscriptions? Earn points anytime you spend</p>
        <div className='mt-3 d-flex align-items-center justify-content-center'>
          <div className={styles.wallxtext}>Start with WallX now!</div>
          <div>
          <BsArrowRight className='mx-2 text-light' size={32} />
          </div>
        </div>
        </div>
        </div>
        <div className={`${styles.boxtwo} col-12 col-lg-6 d-flex justify-content-center align-items-center`}>
        <Image src='/cards.svg' width={400} height={400} alt='trophy cup' />
        </div>
      </div>
      </div>
    {/* NINE SECTION */}
    <div className='d-flex justify-content-center align-items-center'>
    <div className={`${styles.ninebackgrounds} row`}>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
          <div className={styles.ninebox}>
            <h3>Get Some Cashbacks & Perks</h3>
            <p>Enjoy rewards, perks and cashback everytime you generate and spend a PayCode</p>
            <div className='d-flex justify-content-center'>
              <div>
              <Image src='/cup.svg' width={300} height={200} alt='trophy cup' />
              <div>
              <div className='d-flex align-items-center'>
              <div className={styles.startwallx}>Start with Wallx now!</div>
          <BsArrowRight className={styles.arrows} size={32} />
          </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
        <div className={styles.nineboxx}>
            <h3>Multi-Currency Wallet</h3>
            <p>Open Wallets you only need and no fees. Just top up and generate PayCodes in selected currencies</p>
            {/* <div className='d-flex justify-content-center'>
              <Image src='/wallet.png' width={200} height={200} alt='trophy cup' />
            </div> */}
             <div className='d-flex justify-content-center'>
              <div>
              <Image className='mb-3' src='/wallet.png' width={200} height={200} alt='trophy cup' />
              <div>
              <div className='d-flex align-items-center'>
              <div className={styles.startwallx}>Start with Wallx now!</div>
          <BsArrowRight className={styles.arrows} size={32} />
          </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* TENTH SECTION */}
      <div className='d-flex justify-content-center align-items-center'>
      <div className={`${styles.tenbg} row pt-2`}>
        <div className={`${styles.eightbox} col-12 col-lg-6 d-flex justify-content-center align-items-center`}>
          <div>
        <h3 className={styles.eightheader}>Realtime financial Updates Just for you</h3>
        <p className={styles.eighttexter}>Subscribe to our newsletter and be the first to know exciting things about WallX Inc.</p>
        <div className='mt-3 d-flex align-items-center justify-content-center'>
          <div className={styles.wallxtext}>Start with WallX now!</div>
          <div>
          <BsArrowRight className='mx-2 text-light' size={32} />
          </div>
        </div>
        </div>
        </div>
        <div className={`${styles.boxtwo} col-12 col-lg-6 d-flex justify-content-center align-items-center pt-5`}>
        <Image src='/activity.svg' width={350} height={300} alt='trophy cup' />
        </div>
      </div>
      </div>

      {/* SLIDER */}
     
        <div className={styles.sliderheader}>
          <h3 className={styles.wallxheading}>What People say about WallX</h3>
          <div className='d-flex'>
          <IoIosArrowBack onClick={nextSlide} className={styles.prevv} size={25} />
          <IoIosArrowForward onClick={prevSlide} className={styles.nextt} size={25} />
       
          </div>
        </div>
  
    <div className={styles.container}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${currentSlide * 424}px)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
         {testimonials.map((testimonial, index) => {
          let slideIndex = index - currentSlide;
          if (slideIndex < 0) {
            slideIndex += testimonials.length;
          }
          return (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
            style={{
              transform: `translateX(${slideIndex * 424}px)`, 
            }}
          >
            <div className={styles.innerspace}>
            <div className={styles.content}>
          <Image className={styles.image} width={30} height={30} src={testimonial.imageTwo} alt="Testimonial" />
          <Image className={styles.image} width={30} height={30} src={testimonial.image} alt="Testimonial" />
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.country}>{testimonial.country}</p>
          </div>
          <p className={styles.text}>{testimonial.text}</p>
         
          </div>
          </div>
         );
        })}
      </div>
     
    </div>

       
      
      {/* ELEVEN SECTION */}
      
        <div className='mt-3 d-flex justify-content-center align-items-center'>
        <h3>Let&apos;s Answer Your Questions!</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
      <div className={`row ${styles.faq}`}>
      <div className={`col-12 col-lg-6 d-flex justify-content-center ${styles.left}`}>
        <div>
        {faq.map((item, index) => {
          return (
            <div key={index} className={styles.faqbody}>
            <div className={styles.question}>
            <p>{item.question}</p>
            <div className={styles.faqselector} onClick={() => toggleAccordion(index)} >{activeIndex === index ? <IoIosArrowUp size={15}/> :  <IoIosArrowDown size={15} />}</div>
          </div>
          
          {activeIndex === index && (
            <div className={styles.answer}>
              <p>
                {item.answer}
              </p>
            </div>
          )}
          </div>
          )
        })}
    </div>
    </div>
      <div className={`col-12 col-lg-6 px-3 d-flex justify-content-center ${styles.right}`}>
        <div>
        {rightFaq.map((item, index) => {
          return (
            <div key={index} className={styles.faqbody}>
            <div className={styles.question}>
            <p>{item.question}</p>
            <div className={styles.faqselector} onClick={() => toggleAccordionn(index)}>{activeIndexx === index ? <IoIosArrowUp size={15}/> :  <IoIosArrowDown size={15} />}</div>
          </div>
          
          {activeIndexx === index && (
            <div className={styles.answer}>
              <p>
                {item.answer}
              </p>
            </div>
          )}
          </div>
          )
        })}
        </div>
    </div>
      </div>
      </div>
      {/* TWELVE SECTION */}
      <div className='d-flex justify-content-center align-items-center'>
      <div className={`${styles.elevenbg} row`}>
        <div className={`${styles.eightboxxx} col-12 col-lg-6`}>
          <div className={styles.downloadbox}>
        <h3 className={styles.eightheader}>Download Today!</h3>
        <p className={styles.eighttexter}>WallX is available on cross-platforms. Drop a nice comment as you download.</p>
        <div className='mt-2'>
          <div className={styles.store}>
          <Image src='/appstore.png' width={130} height={50} alt='trophy cup' />
          <Image className='mx-2'  src='/playstore.png' width={130} height={50} alt='trophy cup' />
          </div>
        </div>
        </div>
        </div>
        <div className={`${styles.boxtwoo} col-12 col-lg-6 d-flex align-items-center pt-5 justify-content-center`}>
        <Image src='/iphone.png' width={350} height={300} alt='trophy cup' />
        </div>
      </div>
      </div>
      {/* FOOTER */}

      <div>
        <div className={styles.footercontainer}>
          <div className={styles.rightreserved}>
          <Image className='mx-2 mb-4'  src='/wallxx.png' width={50} height={50} alt='trophy cup' />
          <p className={styles.copyright}>© 2023 WallXInc. All Rights Reserved</p>
          </div>
          <div className={styles.footerfonts}>
            <h6 className={styles.footerheaders}>Company</h6>
            <p>Team</p>
            <p>About</p>
            <p>Terms of Use</p>
            <p>Disclaimers</p>
          </div>
          <div className={styles.footerfonts}>
            <h6 className={styles.footerheaders}>Contact</h6>
            <p>hello@wallX.Inc</p>
            <p>+234(70) 5373 7645</p>
            <p>United States </p>
            <p>220 East 23rd St, Manhattan, NY 10010, United States</p>
            <p>Tel: +1 347 441 8271</p>
            <p>Canada</p>
            <p>290 King Street E Kitchener ON N2G 2L3</p>
            <p>Canada</p>
            <p>Fax Only: +1 519-804-9236</p>
          </div>
          <div className={styles.lastgrid}>
            <div>
            <h6 className={styles.footerheaders}>Social Media</h6>
            <div className='d-flex justify-content-center'>
              <div><Image src='/twitter.png' width={30} height={30} alt='trophy cup' /></div>
              <div><Image src='/instagram.png' width={30} height={30} alt='trophy cup' /></div>
              <div><Image src='/facebook.png' width={30} height={30} alt='trophy cup' /></div>
            </div>
            </div>
          </div>
          </div>
          <div>
            <p className={styles.footerfonts}>All Right Reserved &copy; Copyright - 2023: WallX Innovation Inc. is a licensed MSB established in North America and regulated by FINTRAC. WallX provides a savings wallets, secure P2P payment and a tailor-made business tool for SMB&apos;s. Get in Touch with us on: hello@wallx.app</p>
          </div>

       
      </div>
      </>
    </>
  )
}
