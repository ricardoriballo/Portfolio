import React from 'react'
import "./Footer.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footerIcons'>
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon/>
            <GitHubIcon/>
        </div>
        <div className='footerText'>
            <h4>Ricardo Riballo || Copyright © 2022 All rights reserved</h4>   
        </div>
    </div>
    </>
  )
}
