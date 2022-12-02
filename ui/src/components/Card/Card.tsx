import {
  Card as DefaultCard,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  Center,
} from '@chakra-ui/react'
import { openUrlInNewTab } from '../../Helpers/utils'

import './Card.scss'

type itemProps = {
  nom?: string
  version?: string
  description?: string
  miniature?: string
  lien?: string
}

function Card(props: { item: itemProps | any }) {
  const { item } = props
  return (
    <DefaultCard
      onClick={() => openUrlInNewTab(item?.lien)}
      cursor={item?.lien ? 'pointer' : 'initial'}
      className="card"
    >
      <CardBody>
        <Center className="circle-image">
          <Image
            className=""
            src={item?.miniature ?? ''}
            alt={item?.nom ?? 'alt'}
          />
        </Center>

        <Stack mt="6" spacing="3">
          <Heading className="title" size="md">
            {item?.nom ?? ''}
          </Heading>
          <Box className="version-container">
            <Text>{item?.version ?? ''}</Text>
          </Box>

          <Text>{item?.description ?? ''}</Text>
        </Stack>
      </CardBody>
    </DefaultCard>
  )
}

export default Card
