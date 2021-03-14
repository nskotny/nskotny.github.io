import React, { useState } from 'react'
import { workExperience } from './Constants'
import { List, ListItem, ListIcon, useRadio, Box, useRadioGroup, VStack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import './WorkExperience.css'

const WorkExperienceTabs = (props) => {
    const [activeJob, setActiveJob] = useState(workExperience[0])

    const options = workExperience
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "Sr Software Engineer0",
        onChange: function (e) {
            console.log(e)
            setActiveJob(workExperience[e.slice(-1)])
        },
    })

    const group = getRootProps()


    const RadioCard = (props) => {
        const { getInputProps, getCheckboxProps } = useRadio(props)

        const input = getInputProps()
        const checkbox = getCheckboxProps()

        return (
            <Box as="label" className='roleButton'>
                <input {...input} />
                <Box
                    {...checkbox}
                    cursor="pointer"
                    borderWidth="1px"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ bg: "#293c5f" }}
                    _checked={{
                        bg: "#21304b",
                        color: "#27c95d",
                        borderColor: "#27c95d",
                    }}
                    _focus={{
                        boxShadow: "outline",
                    }}

                    px={5}
                    py={3}
                >
                    {props.children}
                </Box>
            </Box>
        )
    }


    return (
        <div className='workExperienceWrapper'>
            <section className='workButtons'>
                {/* {workExperience.map((job, index) => {
                        return (
                                <Button
                                    key={index}
                                    className='roleButton'
                                    variant='outline'
                                    borderColor="#27c95d"
                                    color='#27c95d'
                                    _hover={{ bg: "#293c5f" }}
                                    w='100%'
                                    onClick={() => setActiveJob(job)}>
                                    {job.title}
                                </Button>
                        )
                    })} */}
                <VStack className='workButtonStack' {...group}>
                    {options.map((job, index) => {
                        const radio = getRadioProps({ value: job.title + index })
                        return (
                            <RadioCard key={job.title + index} job={job} {...radio}>
                                {job.title}
                            </RadioCard>
                        )
                    })}
                </VStack>
            </section>

            <section className='workDesc'>
                <div className='roleTitle'>{activeJob.title + ' - ' + activeJob.company}</div>
                <div className='roleTime'>{activeJob.time}</div>
                <List spacing={3}>
                    {activeJob.description.map((desc, index) => {
                        return (
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="#27c95d" />
                                {desc}
                            </ListItem>
                        )
                    })}

                </List>
            </section>
        </div>
    )

}

export default WorkExperienceTabs
