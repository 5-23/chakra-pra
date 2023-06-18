"use client"
import Image from 'next/image'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Tab, TabList, TabPanel, TabPanels, Tabs, background } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab
            bgColor="#3366ff"
            color="#fff"
            padding="10px 30px"
            border="0"
            outline="0"
            borderRadius="10px"
            _active={{bgColor: "#2255ee"}}
          >Tab 1</Tab>
          <Tab
            bgColor="#3366ff"
            color="#fff"
            padding="10px 30px"
            border="0"
            outline="0"
            borderRadius="10px"
            _active={{bgColor: "#2255ee"}}
          >Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
