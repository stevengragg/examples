import React from "react";
import { Dashboard } from "./Dashboard";
import { List } from "./List";

const Title = () => (
  <div className="flex flex-col justify-center space-y-2 space-x-2 mb-5 text-center">
    <p className="text-3xl m-5">Meteor tailwindcss Example</p>
    <img src="/logo.svg" className="h-7 sm:h-8" />
  </div>
);

export const App = () => {
  return (
    <div className="divide-y divide-gray-100">
      <Title />
      <Dashboard />
      <List />
    </div>
  );
};
