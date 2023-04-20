import "./AboutContentStyles.css"
import profilepic from "../Assets/profilepic.jpeg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="header">
            <h1>Who Am I?</h1>
        </div>
        <div className="content">
            <div className="left">
                <img src={profilepic} alt="Profile" />
            </div>
            <div className="right">
                <p>Hi, I'm Saba! In 2019, I graduated from Sultan Qaboos University with a Bachelor of Science, At that time I thought Human Nutrition was interesting so I studied it as a Major. Throughout my study, I have encountered a number of shared subjects from the FoodScience major. It got me more interested in "Food Technology" where technology is applied in various food sectors ranging from food safety and quality to product processing, storing and packaging. Moreover, the Nutrition major study plan included on-site trainings in different healthcare facilities which gave me an insight on the implementation of knowledge in real life and learning more soft skills. 
                    After my graduation ceremony which held place in November 2019, I applied for a Voulntairy training at Armed Forced Hospital where I got to deal more with In-Patients and act more indepent and responsible in making decisions. I have also participated in campains to raise awareness to the community about diffirent health topics.
                    During the period of COVID19, trainings at healthcare facilities was not allowed so I used my time to read more books and practice my hobbies which are listed below. 
                    In 2021, I finally got the chance to go for training again at the National Diabetes and Endocrine Centre where I got an indepth view on how to deal with diabetes with diet, counselling different age groups and helping them to reach their desired needs.
                    In 2022, I landed on a part-time job at "Creado" presenting to kids aging from (4-12) about basic nutrition topics including "MyPlate" and How to read a food label, food allergies and more.
                    In October 2022, I got accepted as an affiliate at Dotnxt Program, A program hosted by AWJ Innovation and is part of Occidental Oman Incorporation programs, aiming to educate youth on fronteir technology and Entrepreneurial development.
                    In 2023, I applied for training at Oman International Hospital to keep my knowledge in practice and to learn more about how the private healthcare sector functions. 
                    Currently, I am still a Dotnxt affiliate, phase II, which I think was a milestone for me to strart seriouly investing time and effort in learning coding and Data Science. Therefore, I decided to participate in this challenge to test my limits in a very short period of time.
                    I hope I get selected for training in your respected company!</p>
                <h2>Hobbies and Interests</h2>
                <ul>
                    <li>Reading</li>
                    <li>Walking and Practicing Yoga</li>
                    <li>Coding</li>
                    <li>Technology and Innovation</li>
                    <li>Baking</li>
                    <li>Learning a third language:Janapnese</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
