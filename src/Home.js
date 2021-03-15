import React from 'react'
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Profile_Pic from './Images/Profile_Pic.jpg'
import './Home.css'
import WorkExperienceTabs from './WorkExperienceTabs'


// My homepage
const Home = (props) => {
    const { width, breakpoint } = props
    return (
        <div className='homeWrapper'>
            <section className='titleSection'>
                <div className='titleBlock'>
                    <div>
                        <div className='hiMyName'>Hi, my name is</div>
                        <div className='nameTitle'>Nick Skotny.</div>
                        <div className='nameDescription'>I'm a software engineer based in Boston, Ma.</div>
                    </div>
                    <div className='profilePicWrapper'>
                    </div>
                </div>
            </section>



            <section className='aboutMeSection' id='aboutMeSection'>
                <section className='aboutMeTextBlock'>
                    <div className='sectionHeader'>About Me</div>
                    <div className='aboutMeText'>
                        <p>Hi! My name is Nick, I am currently a full stack software engineer at Optum in Boston, MA.</p>
                    </div>
                    <div className='aboutMeText'>
                        <p>I enjoy building with React and learning about new technologies. </p>
                    </div>
                    <div className='aboutMeText'>
                        <span>Shortly after graduating from the </span><span style={{ color: '#27c95d' }}>University of Massachusetts Amherst</span><span>, I joined the Technology Development Program at <span style={{ color: '#27c95d' }}>Optum</span> where I have built web applications to make our healthcare system work better for everyone.</span>
                    </div>
                    <div className='aboutMeText'>
                        <p>Here is the tech stack I've been working with recently:</p>
                    </div>
                    <div className='twoColList'>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                            JavaScript (ES6+)
                        </ListItem>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                            React
                        </ListItem>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                                Node.js
                            </ListItem>
                        </List>

                        <List spacing={3} className='rightList'>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                            HTML & CSS
                        </ListItem>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                            Express.js
                        </ListItem>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                                MongoDB
                            </ListItem>
                        </List>
                    </div>
                </section>
                <section className='picWrapper'>
                    <img className='profilePic' src={Profile_Pic} alt='NS' />
                </section>

            </section>



            <section className='workExperienceSection' id='workExperienceSection'>
                <div className='sectionHeader'>Work Experience</div>
                <WorkExperienceTabs width={width} breakpoint={breakpoint} />
            </section>

            <section className='workExperienceSection' id='hobbiesSection'>
                <div className='sectionHeader'>Outside the Office</div>
                <div>When I'm not coding, you can find me on the water! Fishing and kayaking are two of my biggest hobbies. I also love hiking, rock climbing, cooking, and gaming.</div>
                <div className='hobbiesGrid'>
                    <img className='hobbyPic' src={'IMG-1140.jpg'} alt='test' />
                    <img className='hobbyPic' src={'IMG-1648.jpg'} alt='test' />
                    <img className='hobbyPic' src={'IMG-4782.JPG'} alt='test' />
                    <img className='hobbyPic' src={'IMG-6449.JPG'} alt='test' />
                </div>
            </section>

            <div style={{ height: '400px' }}></div>
        </div>
    )
}

export default Home
