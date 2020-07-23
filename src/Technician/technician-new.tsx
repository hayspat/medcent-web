import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import { HeaderTechnicianNew } from "Header";
import { TechnicianForm } from "Technician/technician-form";

export const TechnicianNew = () => {
  return (
    <>
      <LeftLayout>Lab Menu</LeftLayout>
      <RightLayout>
        <HeaderTechnicianNew />
        <TechnicianForm />
      </RightLayout>
    </>
  );
};
