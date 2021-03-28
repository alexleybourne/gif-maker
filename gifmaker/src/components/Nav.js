import React from 'react';
import { Button } from '@windmill/react-ui'
import Logo from './Logo'

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-gray-50 dark:bg-gray-800 shadow-lg w-full fixed top-0">
    <a className="text-gray-700 dark:text-gray-400" href="/">
       <Logo/>
    </a>
    <ul className="flex space-x-4">
        <li>
            <Button layout="link">Features</Button>
        </li>
        <li>
            <Button layout="link">Info</Button>
        </li>
        <li>
            <Button>Login</Button>
        </li>
    </ul>
    </nav>
  );
}

export default Nav;
