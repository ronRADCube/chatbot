"use client";

import React, { useState, createContext, useContext } from "react";
import { PageContext } from "./PageContext.js";
import ChatBotComponent from "./ChatbotComponent.js";

export default function Home() {
  const [page, setPage] = useState("Welcome");
  console.log("hello");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add background color
        }}
      >
        <ChatBotComponent />
      </div>
    </PageContext.Provider>
  );
}
