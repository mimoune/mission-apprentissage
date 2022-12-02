import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  useDisclosure,
  List,
  ListItem,
} from '@chakra-ui/react'
import menuIcon from '../../assets/icons/menu-icon.png'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import routesPath from '../../values/routesPath'
import { openSidebarMenu } from '../../store/actions/openSidebarMenu.action'

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: any = React.useRef()

  return (
    <div className="Sidebar__container ">
      <Button
        className="menu-btn"
        ref={btnRef}
        colorScheme="teal"
        onClick={() => {
          onOpen()
          setTimeout(() => openSidebarMenu(true), 250)
        }}
        name="openSideBar"
      >
        <img src={menuIcon}></img>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => {
          onClose()
          openSidebarMenu(false)
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="drawer-content">
          <DrawerHeader p={0}>
            <Box className="drawer-header">Menu</Box>
          </DrawerHeader>

          <DrawerBody paddingLeft={'20px'} paddingRight={'20px'}>
            <Box paddingTop={'20px'}>
              <List spacing={3.5}>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.Home.list}`}>
                    <span className="Sidebar__icon icon-esd-catalog"></span>
                    Catalogue des Services
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.Documentation.list}`}>
                    <span className="Sidebar__icon icon-esd-documentation"></span>
                    Documentation
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.News.list}`}>
                    <span className="Sidebar__icon icon-esd-news"></span>
                    Actualités
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.Challenge.list}`}>
                    <span className="Sidebar__icon icon-esd-challenge"></span>
                    Challenges
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.WhoAreWe.list}`}>
                    <span className="Sidebar__icon icon-esd-who-are-we"></span>
                    Qui sommes-nous ?
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.Help.list}`}>
                    <span className="Sidebar__icon icon-esd-help"></span>
                    FAQ
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.Stats.list}`}>
                    <span className="Sidebar__icon icon-esd-stats"></span>
                    Performances
                  </Link>
                </ListItem>
                <ListItem className="drawer-list">
                  <Link to={`${routesPath.Contact.list}`}>
                    <span className="Sidebar__icon icon-esd-contact"></span>
                    Contact
                  </Link>
                </ListItem>
              </List>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Sidebar
