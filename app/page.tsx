"use client"
import Image from "next/image";
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';

export const socket = io("localhost:8080");

export default function Home() {


  return (
    <>

      <h1>LET&apos;S GO</h1>
    </>
  );
}
