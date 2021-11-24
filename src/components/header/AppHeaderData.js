import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';

export const AppHeaderData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cname: 'nav-text'
    },
    {
        title: 'Töölaud',
        path: '/lists',
        icon: <CgIcons.CgMenuBoxed />,
        cname: 'nav-text'
    },
    {
        title: 'Nimekirjad',
        path: '/candidates',
        icon: <BsIcons.BsListUl />,
        cname: 'nav-text'
    },
    {
        title: 'Abi',
        path: '/settings',
        icon: <IoIcons.IoMdHelpCircle />,
        cname: 'nav-text'
    },
];