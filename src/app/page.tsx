"use client";
import { Input } from "@/components/Input";
import React from "react";
import styled from "styled-components";


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
              <Input.Input name="name"/>
            </Input.Field>
        </Input.Root>
      </StyleDiv>
    </>
  );
};

export default Home;