import Header from "@/components/templates/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { CardDemo } from "@/components/templates/TourCard";

function Home() {
  return (
    <div>
      <Header />
      <Button className="cursor-pointer">Click me</Button>
      <Input type="name" placeholder="type here ..."></Input>
      <Image
        className=" w-25 h-25  "
        src="/torino.png"
        width={500}
        height={500}
        alt="logo"
      />

      <CardDemo />
      <Button className={`cursor-pointer`}>Login</Button>
      <Input type="name" placeholder="type here ..."></Input>
    </div>
  );
}

export default Home;
