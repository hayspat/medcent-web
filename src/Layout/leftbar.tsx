import React from "react";
import MainLink from "NavElements/main-link";
import { mainLink } from "Util/links";
import { deleteToken } from "Util/auth";

export const Leftbar = () => {
  return (
    <header className="fixed top-0 left-0 z-40 w-20 h-full text-red-100 bg-gray-900 shadow-header ">
      <nav className="flex flex-col justify-between h-full">
        <div className="flex w-20 h-20 bg-gray-900">
          <h1 className="flex m-auto leading-none">Account</h1>
        </div>
        <div>
          <MainLink base={mainLink.dashboard} />
          <MainLink base={mainLink.patient} />
        </div>
        <div>
          <div
            onClick={() => {
              deleteToken();
              window.location.reload();
            }}
            className="flex w-20 h-20 bg-gray-900 cursor-pointer hover:bg-red-500"
          >
            <h1 className="flex m-auto leading-none">Çıkış</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};
