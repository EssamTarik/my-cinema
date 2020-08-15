import React from 'react';
import { NavigationBar } from '../../../components';
import './styles.css';

const MainLayout = ({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className='main-layout'>
    <NavigationBar />
    <div className='main-layout__content'>
      {children}
    </div>
  </div>
)

export default MainLayout;