import React from "react";
import "../conponent/Navbar.scss"
import image1 from './images/Illustration 2 (1).png';
import image2 from './images/Illustration 1.png';
import image3 from './images/Standard.png';
import image4 from './images/Vector.png';
const Navbar = () => {
    return(
        <>
        <div className="navbar">
            <div className="brand">
                LaslesVPN
            </div>
            <div className="navbar-obj">
                <button className="about">About</button>
                <button className="features">Features</button>
                <button className="pricing">Pricing</button>
                <button className="testimonials">Testimonials</button>
                <button className="help">Help</button>
                <button className="sign-in">Sign-in</button>
                <button className="sign-up">Sign-up</button>
            </div>
        </div>
        <div class="img1">
      <img src={image2} alt="image2"/>
     </div>
     <div class="img2">
      <img src={image3} alt="image3"></img>
     </div>
      
    <p className="p1">
     Want anything to be easy with LaslesVPN.
     <p className="pl">
     Provide a network for all your needs with ease and fun 
    using LaslesVPN discover interesting features from us.
     </p>
     </p>
     <div className="illustration2">
        <img src={image1} alt="image1"/>
     </div>
     <p className="p2">
    We Provide Many Features You Can Use
     </p>
     <p>
     <p className="p3">
      You can explore the features that we provide with fun and have their own functions each feature.
     <p>
     ✅ Powerfull online protection.
     </p>
     <p>
     ✅ Internet without borders.
     </p>
     <p>
     ✅ Supercharged VPN
     </p>
     <p>
     ✅ No specific time limits.
     </p>
     </p>
    
     </p>
    
     <p className="p4">
     <h4>Choose Your Plan</h4>
     <p className="p5">
     Let\'s choose the package that is best for you and explore it happily and cheerfully.
     </p>
     </p>

     <p className="p6">
        Free Plan
        
        <p className="p7">
         Unlimited Bandwitch
         <p>Encrypted Connection</p>
        <p>No Traffic Logs</p>
        <p>Works on All Devices</p>
        <p className="pf">Free</p>
        <button className="sub1">Submit</button>
         </p>       
    </p>

    <p className="p8">Standard Plan

    <p className="p9">Unlimited Bandwitch
        <p>Encrypted Connection</p>
        <p>Yes Traffic Logs</p>
        <p>Works on All Devices</p>
        <p>Connect Anyware</p>
        <p className="pf">$9/mo</p>
        <button className="sub2">Submit</button>
    </p>
    
    </p>

    <p className="p10">Premium plan

<p className="p11">Unlimited Bandwitch
    <p>Encrypted Connection</p>
    <p>Yes Traffic Logs</p>
    <p>Works on All Devices</p>
    <p>Connect Anyware</p>
    <p>Get New Features</p>
    <p className="pf">$12/mo</p>
    <button className="sub3">Submit</button>
    </p>
</p>

<p className="p12">Huge Global Network of Fast VPN

<p className="p13">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
</p>

<div className="img3">
        <img src={image4} alt="image4"/>
     </div>
        </>
    )
}
export default Navbar;