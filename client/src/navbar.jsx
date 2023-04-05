import React from "react";
import { Navbar, Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
 
const Navigation = () => {


  return (
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Joshua Ow
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 space-x-1">
    <FontAwesomeIcon icon={faLinkedin} />
    <FontAwesomeIcon icon={faTwitterSquare} />
    <FontAwesomeIcon icon={faGithubSquare} />
    <FontAwesomeIcon icon={faSquareEnvelope} />

    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
    //   active={true}
    >
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Resume
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Projects
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;