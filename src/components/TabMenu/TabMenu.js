import React from 'react'
import { Link } from 'react-router-dom'

import useTabMenuStyles from './TabMenuStyles'

const TabMenu = (props) => {
    const classes = useTabMenuStyles();
  return (
    <div>
        <ul style={{display: "flex", justifyContent:"center"}}>
            <li className={classes.tabMenuLi}>
                <Link className={classes.tabMenuLink} to={"/corporate-club"}>Corporate Club</Link>
            </li> 
            <li className={classes.tabMenuLi}>
                <Link className={classes.tabMenuLink} to={"/corporate-club"}>Acenteler</Link>
            </li>
            <li className={classes.tabMenuLi}>
                <Link className={classes.tabMenuLink} to={"/corporate-club"}>SSS</Link>
            </li>
        </ul>
    </div>
  )
}


export default TabMenu
