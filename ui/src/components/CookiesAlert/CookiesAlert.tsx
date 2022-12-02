import { Link } from '@chakra-ui/react'
import CookieConsent from 'react-cookie-consent'

import './CookiesAlert.scss'

function CookiesAlert() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="X"
      cookieName="myAwesomeCookieName2"
      style={{ background: 'var(--black-500)', textAlign: 'center' }}
      buttonStyle={{
        color: 'var(--black-500)',
        backgroundColor: '',
        fontSize: '13px',
        height: 25,
        width: 25,
        borderRadius: '50%',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      expires={150}
    >
      Les cookies assurent le bon fonctionnement de nos services. En utilisant
      ces derniers, vous acceptez l'utilisation des cookies.
      <Link>Conditions Générales d'Utilisation</Link>.
    </CookieConsent>
  )
}

export default CookiesAlert
