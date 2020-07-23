import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import { HeaderServicesList } from "Header";
import { ServicesSelected } from "Settings/services-selected";

export const SettingServices = () => {
  return (
    <>
      <LeftLayout>
        <h1>Hizmetler ve Kampanya</h1>
      </LeftLayout>
      <RightLayout>
        <HeaderServicesList />
        <ServicesSelected />
      </RightLayout>
    </>
  );
};
