import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index, title, icon})=>{
  return(
   <Tilt className="xs:w-[200px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5*index,0.75)}
        className = 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div 
        options={{
          max:15,
          scale:0.3,
          speed:10
        }}
        className ='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>

          <h3 className='text-white text-[20px]'>{title}</h3>

        </div>



      </motion.div>
   </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Intoduction </p>
        <h2 className={styles.sectionHeadText}> Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="ms:text-[12px] mt-4 text-seondary text-[14px] max-w-5xl leading-[30px]">As I am with expertise in a wide range of programming languages and web development tools, including HTML, CSS, JavaScript, React, Tailwind CSS, C++, Python, and problem-solving skills, I possess are highly versatile and in-demand skillset. My proficiency in web development languages such as HTML, CSS, and JavaScript, combined with experience in popular front-end frameworks like React and CSS libraries like Tailwind CSS, makes me well-equipped to create visually appealing and responsive websites.
Moreover, My proficiency in programming languages such as C++ and Python, coupled with my problem-solving skills, enables me to tackle complex programming challenges with ease. I have the capacity to analyze problems, identify potential solutions, and implement effective strategies to achieve desired outcomes. My expertise in multiple programming languages and web development tools makes me a valuable addition to any team or project, and my problem-solving skills allow me to overcome obstacles and achieve success in my work.With my diverse skill set and proficiency in a variety of programming languages and web development tools, I have the potential to achieve great things in the field of technology.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key = {service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")