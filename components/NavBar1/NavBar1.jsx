import React, { useState, useEffect, useContext,  } from 'react';
import Image from 'next/image';
import Link from 'next/link';


//IMPORT INTERNAL
import Style from './NavBar1.module.css';
import images from '../../assets';
import {TokenList} from '../index';



const NavBar = () => {
  
  //USESTATE
  const [openTokenBox, setopenTokenBox] = useState(false);
 

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
        
        <div className={Style.NavBar_box_left_menu}>
        
          </div>
        </div>
        {/* //Middle SECTION */}                
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            
            <div className={Style.NavBar_box_middle_search_img}>
           
            </div>
                       
          </div>
        </div>
        {/* //RIGHT SECTION */}
        
        <div className={Style.NavBar_box_right}>
        <button onClick={() => setopenTokenBox(true)} height={30} width={30} ><Image src={images.menu1}  height={45} width={90} /></button>
          
          
          
          
          
          
              
            
              
          
          
          
        </div>
        
      </div>

      {/* TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setopenTokenBox={setopenTokenBox} />
      )}
    </div>
  );  
};

export default NavBar;
