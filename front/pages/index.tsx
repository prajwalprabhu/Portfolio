import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import Info from "../components/Info";
const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Profile />
      <Info />
    </div>
  );
};

export default Home;
