import React from "react";
import "twin.macro";
import { LoginForm } from "Forms/login";

export const Login = () => {
  return (
    <div tw="flex">
      <div tw="w-2/3 text-center items-center h-full m-auto">
        <h1 tw="text-6xl font-bold">Hoş Geldiniz</h1>
      </div>
      <div tw="w-1/3 flex p-8 h-screen bg-gray-300">
        <div tw="my-auto w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
