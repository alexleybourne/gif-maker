import React from 'react';
import { Button } from '@windmill/react-ui'

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-gray-50 dark:bg-gray-800 shadow-lg w-full fixed top-0">
    <a className="text-gray-700 dark:text-gray-400" href="/">
       <h1><b>GifMaker</b></h1>
    </a>
    <ul className="flex space-x-4">
        <li>
            <Button layout="link">Products</Button>
        </li>
        <li>
            <Button layout="link">Contact</Button>
        </li>
        <li>
            <Button>Login</Button>
        </li>
    </ul>
    </nav>
  );
}

export default Nav;
