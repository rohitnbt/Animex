import React from 'react'
import "./style.scss"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


export const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="navlist">
            <ul>
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
                <li>About</li>
                <li>Blog</li>
                <li>About</li>
            </ul>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam similique ea omnis vero! Corporis facere dolorem harum aut architecto voluptate quaerat obcaecati! Maxime distinctio magni voluptatibus. Labore sint libero explicabo quas eaque optio nostrum aliquam error vitae fuga, ratione magnam nulla, odio blanditiis architecto quis!</p>
        <div className="social">
            <span className="icon"><FaFacebookF /></span>
            <span className="icon"><FaInstagram /></span>
            <span className="icon"><FaXTwitter /></span>
            <span className="icon"><FaLinkedinIn /></span>
        </div>
    </footer>
  )
}
