import { Component } from 'react';

import Buttonadd from '../../components/ButtonMenu';

import '../../style/style.css';


class Menu extends Component {
  render() {
    return (
      <div className="w-9/12 mx-auto absolute inset-x-0 bottom-11 bg-white-800 md:hidden lg:hidden">
        <div className="flex justify-around border border-gray-300 rounded shadow-md">
          <Buttonadd /> 
        </div>
      </div>
    )
  }
}

export default Menu;