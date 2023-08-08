import Sidebar from "./sidebar";
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface LayoutProps {
  side: boolean;
  changeicon: () => void;
  children: ReactNode;
}

const Layout = ({side, children, changeicon}: LayoutProps ) => {
    
    return ( 
      <>
        <Sidebar side = {side} changeicon={changeicon} />
          {children}
      </>
      
     );
}

Layout.propTypes = {
    side: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    changeicon: PropTypes.func.isRequired
  };
 
export default Layout;