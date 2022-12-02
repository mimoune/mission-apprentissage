import './Home.scss'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { Flex, Box, Text, Link } from '@chakra-ui/react'

import { Heading } from '@chakra-ui/react'
import Breadcrumb from '../../components/Breadcrumb'
import { colors } from '../../themes'
import useFetchCatalogueServices from '../../hooks/useFetchCatalogue'
import { useEffect } from 'react'
import { openSidebarMenu } from '../../store/actions/openSidebarMenu.action'

function App() {
  const { data } = useFetchCatalogueServices()

  useEffect(() => {
    return () => {
      openSidebarMenu(false)
    }
  }, [])

  return (
    <div className="Home__container">
      <Box className="desktopOnly" w={215}>
        <Sidebar />
      </Box>
      <Box className="mobileAndTabletOnly" w={'100%'}>
        <Sidebar />
      </Box>
      <Flex flex={1} flexDirection="column">
        <Header></Header>
        <Breadcrumb
          items={[
            {
              label: 'Accueil',
              href: '/',
            },
            {
              label: 'Catalogue des services',
              href: '/cat',
            },
          ]}
        />
        <Box className="content-container">
          <Box className="category-title-container">
            <span className="icon-esd-catalog"></span>
            <Heading className="category-title">Catalogue des Services</Heading>
          </Box>
          <Text className="category-desc">
            Vous trouverez ici l'ensemble des services référencées,{' '}
            <Link color={colors.primary}>la documentation</Link> associée et les
            modalités de souscription.
          </Text>
          <Box className="cards-container">
            <Heading className="cards-section-title">apprentissage</Heading>
            <Flex
              marginLeft={-15}
              marginRight={-15}
              wrap={'wrap'}
              flexDirection={'row'}
              maxW="100%"
            >
              {(data?.data?.services || [])?.map((item: any, index: number) => (
                <Card key={index} item={item} />
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default App
