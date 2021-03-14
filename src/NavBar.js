import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'
import { DownloadIcon, HamburgerIcon } from '@chakra-ui/icons'
import './NavBar.css'

const NavBar = (props) => {
    const { width, breakpoint } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (width > breakpoint) {
        return (
            <div className='navBarWrapper'>
                <div className='navButtons'>
                    <a href={'#aboutMeSection'}>
                        <p className='navLink'>About</p>
                    </a>
                    <a href={'#workExperienceSection'}>
                        <p className='navLink'>Experience</p>
                    </a>
                    <a href={'#hobbiesSection'}>
                        <p className='navLink'>Hobbies</p>
                    </a>
                    <a href={'./Skotny_Resume_2021.pdf'} without rel="noopener noreferrer" target="_blank">
                        <Button className='navLink' rightIcon={<DownloadIcon />} borderColor="#27c95d" color='#27c95d' _hover={{ bg: "#293c5f" }} variant='outline'>Resume</Button>
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div className='burgerMenuWrapper'>
                <IconButton
                    icon={<HamburgerIcon />}
                    variant='outline'
                    borderColor="#27c95d"
                    color={'#27c95d'}
                    onClick={onOpen} />
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    returnFocusOnClose={false}
                >
                    <DrawerOverlay>
                        <DrawerContent bg='#21304b'>
                            <DrawerCloseButton color='#27c95d' />
                            <DrawerBody className='burgerBody'>
                                <a href={'#aboutMeSection'} onClick={onClose}>
                                    <p className='navLink'>About</p>
                                </a>
                                <a href={'#workExperienceSection'} onClick={onClose}>
                                    <p className='navLink'>Experience</p>
                                </a>
                                <a href={'#hobbiesSection'} onClick={onClose}>
                                    <p className='navLink'>Hobbies</p>
                                </a>
                                <a href={'./Skotny_Resume_2021.pdf'} without rel="noopener noreferrer" target="_blank">
                                    <Button className='navLink' rightIcon={<DownloadIcon />} borderColor="#27c95d" color='#27c95d' _hover={{ bg: "#293c5f" }} variant='outline'>Resume</Button>
                                </a>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </div>
        )
    }

}

export default NavBar
