"use client";
import { Input } from "@/components/Input";
import React from "react";
import styled from "styled-components";
import { IoMdLock as PasswordIcon } from "react-icons/io";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: center;
  justify-self: flex-start;
  width: 40vw;
  height: 200px;
  background-color: gray;
  padding: 12px;
  border-radius: 8px;
`


const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <StyleDiv >
        <Input.Root>
            <Input.Label text="Nome"/>
            <Input.Field>
              <Input.Icon icon={PasswordIcon}/>
              <Input.Input name="name"/>
            </Input.Field>
        </Input.Root>
      </StyleDiv>
    </>
  );
};

export default Home;