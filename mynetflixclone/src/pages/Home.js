import React, { useRef } from 'react'
//import Footer from '../component/footer/Footer'
import CottageIcon from '@mui/icons-material/Cottage'
import Banner from "../component/banner/Banner"
import Header from '../component/header/Header'
import Footer from "../component/footer/Footer"
import Rowlist from "../component/rows/rowlist/Rowlist"
import requests from '../utils/request'
import Row from '../component/rows/row/Row'
export default function Home() {
  const trendingRef = useRef(null);
  const horrorRef = useRef(null);
  const romanceRef = useRef(null);
  const comedyRef = useRef(null);
  const animationRef = useRef(null);
  const mysteryRef = useRef(null);

  const refs = {
    trending: trendingRef,
    horror: horrorRef,
    romance: romanceRef,
    comedy: comedyRef,
    animation: animationRef,
    mystery: mysteryRef,
  };

  return (
    <div>
                

<Header refs={refs} /> 
<Banner/>
<Rowlist refs={refs} />

<Footer/>    </div>
  )
}