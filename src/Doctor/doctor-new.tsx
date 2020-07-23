import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import { HeaderDoctorNew } from "Header";
import { DoctorForm } from "Doctor/doctor-form";

export const DoctorNew = () => {
  return (
    <>
      <LeftLayout>Kadro Menu</LeftLayout>
      <RightLayout>
        <HeaderDoctorNew />
        <DoctorForm />
      </RightLayout>
    </>
  );
};
