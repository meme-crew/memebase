import React from "react";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
      <div className="flex items-center animate-bounce">
        <p className="mt-6 tracking-wide">memebase</p>
      </div>
      <div className="mt-4 flex justify-center">
        <Card title="hacking" count="10"></Card>
        <Card title="misc" count="5"></Card>
        <Card title="reacts" count="2"></Card>
      </div>
    </div>
  );
}

export default App;
