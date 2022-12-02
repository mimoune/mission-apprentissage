import { Box, Button } from '@chakra-ui/react'

import './Header.scss'
import closeIcon from '../../assets/icons/close-icon.png'
import { connect } from 'react-redux'

function Header(props: any) {
  const { openMenu } = props

  return (
    <Box className="Header__container desktopOnly">
      <Box className="Header">
        <Button opacity={openMenu ? 1 : 0}>
          <img src={closeIcon}></img>
          Fermer
        </Button>
      </Box>
    </Box>
  )
}
const mapStateToProps = (state: any) => {
  return {
    openMenu: state.OPEN_SIDEBAR.openMenu,
  }
}

export default connect(mapStateToProps)(Header)
