import React from 'react'
//import Footer from '../component/footer/Footer'
import CottageIcon from '@mui/icons-material/Cottage'
import Banner from "../component/banner/Banner"
import Header from '../component/header/Header'
import Footer from "../component/footer/Footer"
import Rowlist from "../component/rows/rowlist/Rowlist"
import requests from '../utils/request'
import Row from '../component/rows/row/Row'
export default function Home() {
  return (
    <div>
                

<Header/> 
<Banner/>
<Rowlist/>

<Footer/>    </div>
  )
}
