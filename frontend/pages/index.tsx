import { Box, List } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import Lista from '../src/components/List/list'

const Home: NextPage = () => { 
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Teacher 1",
      image: "https://github.com/stefanerefrande.png",
      description: "Teacher description",
      price: 100,
    },
    {
      id: 1,
      name: "Teacher 2",
      image: "https://github.com/stefanerefrande.png",
      description: "Teacher description",
      price: 100,
    },
    {
      id: 1,
      name: "Teacher 3",
      image: "https://github.com/stefanerefrande.png",
      description: "Teacher description",
      price: 100,
    },
    {
      id: 1,
      name: "Teacher 4",
      image: "https://github.com/stefanerefrande.png",
      description: "Teacher description",
      price: 100,
    },
  ]
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista teachers={teachers}></Lista>
    </Box>
  )
}

export default Home
