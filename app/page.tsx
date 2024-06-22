"use client"
import Image from "next/image";
import { useState, useEffect } from 'react'
import NavBar from "@/components/NavBar/NavBar";
import { io } from 'socket.io-client';

export const socket = io("localhost:8080");

export default function Home() {


  return (
    <>
      <NavBar />
      <h1>LET&apos;S GO</h1>
    </>
  );
}
