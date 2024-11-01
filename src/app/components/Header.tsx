"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'

import shape1Svg from '../assets/images/shape-1.svg';
import shape2Svg from '../assets/images/shape-2.svg';
import shape3Svg from '../assets/images/shape-3.svg';
import header_appPng from '../assets/images/header_app.png';
import dotsSvg from '../assets/images/dots.svg';

import { Arrow } from "./Arrow";
import { Firebase } from "./Firebase";

export function Header() {
  const pathname = usePathname();
  const company = process.env["COMPANY"] || "Deaf eLimu Plus Limited";
  return (
    <>
      {pathname !== "/" && (
        <Link className="button back-button" href="/">
          <Arrow /> Back to home
        </Link>
      )}
      { /* ====== HEADER PART START ====== */ }
      <section className="header_area">
        <div className="header_navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Firebase />
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                          <a className="page-scroll" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="page-scroll" href="#features">Feature</a>
                      </li>
                      <li className="nav-item">
                          <a className="page-scroll" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="page-scroll" href="#screenshot">Screenshot</a>
                      </li>
                      <li className="nav-item">
                          <a className="page-scroll" href="#pricing">Pricing</a>
                      </li>                                    
                      <li className="nav-item">
                          <a className="page-scroll" href="#blog">Blog</a>
                      </li>
                    </ul>
                  </div> {/* navbar collapse */}
                </nav> {/* navbar */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </div> {/* header navbar */}

        <div id="home" className="header_hero d-lg-flex align-items-center">
          <Image className="shape shape-1" src={shape1Svg} alt="shape"  />
          <Image className="shape shape-2" src={shape2Svg} alt="shape"  />
          <Image className="shape shape-3" src={shape3Svg} alt="shape"  />
          
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="header_hero_content mt-45">
                  <h2 className="header_title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">HTML App Landing Page Template</h2>
                  <p className="wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                  <ul>
                    <li><a className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1s" href="#">Discover More</a></li>
                    <li><a className="main-btn main-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.4s" href="#">Download App</a></li>
                  </ul>
                </div> { /* header hero content */ }
              </div>
            </div> {/* row */ }
          </div> {/* container */}
          <div className="header_image d-flex align-items-end">
            <div className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="1.8s">
              <Image src={header_appPng} alt="header App" priority />
              <Image src={dotsSvg} alt="dots" className="dots" />
            </div> { /*  image  */ }
          </div> { /* header image */ }
        </div> { /* header hero */ }
      </section>
    </>
  );
}
