"use client";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/NavBar";
import React from "react";


import { CiFolderOn as Folder} from "react-icons/ci";
import { CiCircleInfo as Info } from "react-icons/ci";



const Nav = ()=>{
  return(
    <NavBar.Root>
        <NavBar.Link href="/" title="Home" icon={Folder} />
        <NavBar.Link href="about" title="Sobre" icon={Info}/>
    </NavBar.Root>
  )
}


const Home = () => {
  return (
    <Container.Root>
      <Container.Center>
        <Nav />
      </Container.Center>
    </Container.Root>
  );
};

export default Home;