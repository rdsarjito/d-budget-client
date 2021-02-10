import { Component } from 'react';

import Buttonadd from '../../components/ButtonMenu';

import '../../style/style.css';


class Menu extends Component {
  render() {
    return (
      <div className="w-60 mx-auto absolute inset-x-0 bottom-11 bg-white-800 md:hidden lg:hidden">
        <div className="flex justify-between">
          <Buttonadd /> 
        </div>
      </div>
    )
  }
}

export default Menu;