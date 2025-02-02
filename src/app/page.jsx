'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { pp, job, Sailian } from "./component/sweetalert"
import styles from "./styles/Title.module.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import AOS from "aos";
import "aos/dist/aos.css"; // 


export default function Home() {



  useEffect(() => {

    AOS.init({
      // duration: 1000, // ความเร็วของอนิเมชัน (ในหน่วย ms)
      once: false,     // ให้อนิเมชันทำงานครั้งเดียว (true) หรือทำซ้ำ (false)
    });


    gsap.registerPlugin(ScrollTrigger)

    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char, i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars' })

      gsap.fromTo(text.chars,
        {
          color: fg,  // เปลี่ยนเป็นสี foreground ก่อน
        },
        {
          color: bg,  // แล้วเปลี่ยนเป็นสีพื้นหลัง
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
          }
        })
    })


    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <div className="bg-main h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 ">
            <div className="tracking-wider p-5">
              <p className="font-normal text-xl text-center sm:text-left" data-aos="fade-up" data-aos-duration="1500">
                Portfolio <br />
                & Resume
              </p>

              <p className="uppercase text-white font-extralight text-[1.5rem] md:text-[3rem] lg:text-[7rem] text-center sm:text-left" data-aos="fade-up" data-aos-duration="3000">
                Thanyaporn Wanitcharoennan
              </p>
              {/* <p className="uppercase text-center sm:text-left text-3xl sm:text-4xl lg:text-[10rem] text-white font-extralight mt-36">
                <span className=""> </span>
                </p> */}

              {/* <div className="flex space-x-5 items-center mt-5 justify-center sm:justify-start">
                <a href="#">
                  <Image
                    aria-hidden
                    src="/images/facebook.png"
                    alt="facebook icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="#">
                  <Image
                    aria-hidden
                    src="/images/line.png"
                    alt="line icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="#">
                  <Image
                    aria-hidden
                    src="/images/instagram.png"
                    alt="instagram icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="#">
                  <Image
                    aria-hidden
                    src="/images/linkedin.png"
                    alt="linkedin icon"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="#">
                  <Image
                    aria-hidden
                    src="/images/github-sign.png"
                    alt="github icon"
                    width={32}
                    height={32}
                  />
                </a>
              </div> */}
            </div>

            {/* <div className="bg-red-400">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus nesciunt esse excepturi alias cumque labore debitis
                adipisci? Minima quis voluptatum at dignissimos ducimus minus
                quasi modi dolor quos consequatur?
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {/* About */}
      <div className="">
        <p className="px-20 pt-10 text-2xl flex items-center justify-center sm:justify-start" data-aos="fade-up" data-aos-duration="1500">
          About
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z"></path></svg>
          {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-blue-500" /> */}
        </p>
      </div>

      <div className="container mx-auto">

        <div className={`${styles.section} section  text-[1.5rem] md:text-[3rem] lg:text-[7rem] p-5 py-10 `}>
          <p className="reveal-type text-[1.5rem] md:text-[3rem] lg:text-[7rem] font-extralight" data-bg-color="#fff" data-fg-color="#404142">Passionate about web development with 7+ years of experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 sm:px-10 lg:px-20 mt-10 relative">
          {/* Section Image */}
          <div className="flex justify-center sm:justify-start" data-aos="fade-up" data-aos-duration="1500">
            <Image
              aria-hidden
              src="/images/main_photo.jpg"
              alt="main_photo"
              width={800}
              height={800}
              className="w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]"
            />
          </div>

          {/* Section Content */}
          <div className="bg-neutral-600 text-white p-6 sm:p-10 shadow-lg sm:max-w-[500px] sm:absolute sm:right-[25%] sm:top-[20%] lg:top-[30%]" data-aos="fade-up" data-aos-duration="2000">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Thanyapoen</h3>
            <p className="text-neutral-300 text-sm sm:text-md leading-relaxed">
            I am passionate about website development and have over 7 years of
              experience in this field. Currently, I work as a Senior Web
              Master, where I am responsible for overseeing and managing
              websites to ensure their efficiency. This includes aspects of
              design, development, and maintenance. In addition to website
              development, I have a strong interest in Software Testing, which
              plays a crucial role in enhancing the quality of systems and
              applications. With my experience and determination to continuously
              improve, I am committed to delivering high-quality work that adds
              value to organizations. I am also eager to exchange ideas and
              embrace new learning opportunities.
            </p>
          </div>
        </div>
        {/* Skill */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 px-5 sm:px-0 gap-4">
          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Skill</span>
            </p>
            <h4 className="text-2xl uppercase mt-10 text-orange-500 font-extrabold">Coding Skill </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">HTML</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Css</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Bootstrap Framework</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">JavaScript</p>
              <p className="text-right sm:text-left">Basic & Learning</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Tailwind CSS</p>
              <p className="text-right sm:text-left">Learning</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Next.js</p>
              <p className="text-right sm:text-left">Learning</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">Design Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Figma</p>
              <p className="text-right sm:text-left">working level & Learning</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Photoshop</p>
              <p className="text-right sm:text-left">working level</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">CMS Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight" >
              <p className="indent-0 sm:indent-5">Wordpress</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">Other Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Search Engine Optimize</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Google analytic</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Google Tagmanager</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <h4 className="text-2xl uppercase pt-3 text-orange-500 font-extrabold">Personal Skill</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Team Work</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Communication</p>
              <p>Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Interpersonal</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Problem-Solving</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Time Management</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Adaptability</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Creativity</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 font-extralight">
              <p className="indent-0 sm:indent-5">Self-Discipline</p>
              <p className="text-right sm:text-left">Good</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Experience</span>
            </p>
            <div className="h-40 border-2 border-yellow-400 relative p-2 mt-10 hover:scale-95 duration-300 cursor-pointer" onClick={pp}>
              <div className="absolute top-0 right-0 p-2">03 </div>
              <div className="pb-8 text-2xl text-orange-500 font-extrabold">Jun 2018 - Present</div>
              <p>Senior Webmaster</p>
              <p className="font-extralight italic">Playpark Company Limited</p>
            </div>
            <div className="h-40 border-2 border-yellow-400 relative p-2 mt-10 hover:scale-95 duration-300 cursor-pointer" onClick={job}>
              <div className="absolute top-0 right-0 p-2">02 </div>
              <div className="pb-8 text-2xl text-orange-500 font-extrabold">Nov 2018 - May 2019</div>
              <p>web creative</p>
              <p className="font-extralight italic">JOBBKK.COM</p>
            </div>
            <div className="h-40 border-2 border-yellow-400 relative p-2 mt-10 hover:scale-95 duration-300 cursor-pointer" onClick={Sailian}>
              <div className="absolute top-0 right-0 p-2">01 </div>
              <div className="pb-8 text-2xl text-orange-500 font-extrabold">Jul 2018 - Nov 2018</div>
              <p>Graphic Web Designer</p>
              <p className="font-extralight italic">Sailian Media</p>
            </div>

          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-3xl flex justify-center items-center uppercase">
              <span className=" border-b-4 border-b-blue-500 text-yellow-400">Title</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eveniet vel quidem expedita maiores maxime consequuntur facilis
              animi consectetur eaque in harum officia blanditiis tempore unde,
              sed voluptatum possimus dolorum?
            </p>
          </div>
        </div> */}
      </div>
      <footer className="bg-neutral-900 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 mt-5 p-5">
          <div className="flex space-x-3 justify-center">
            <a href="#">
              <Image
                aria-hidden
                src="/images/facebook.png"
                alt="facebook icon"
                width={32}
                height={32}
              />
            </a>
            <a href="#">
              <Image
                aria-hidden
                src="/images/line.png"
                alt="line icon"
                width={32}
                height={32}
              />
            </a>
            <a href="#">
              <Image
                aria-hidden
                src="/images/instagram.png"
                alt="instagram icon"
                width={32}
                height={32}
              />
            </a>
            <a href="#">
              <Image
                aria-hidden
                src="/images/linkedin.png"
                alt="linkedin icon"
                width={32}
                height={32}
              />
            </a>
            <a href="#">
              <Image
                aria-hidden
                src="/images/github-sign.png"
                alt="github icon"
                width={32}
                height={32}
              />
            </a>
          </div>
          <p className="text-center pt-3">© 2025 topic 2025</p>
        </div>
      </footer>

    </>
  );
}
