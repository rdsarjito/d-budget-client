import React from 'react';

import Buttonadd from '../../components/ButtonMenu';

import '../../style/style.css';


const Menu = () => {
  return (
    <div className="w-80 mx-auto absolute inset-x-0 bottom-11 bg-white-800 md:hidden lg:hidden">
      <div className="ml-4 mr-4 flex justify-around border border-gray-300 rounded pt-3 pb-3 shadow-md">
        <Buttonadd /> 
      </div>
    </div>
  )
};


export default Menu;