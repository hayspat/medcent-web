import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import { HeaderDoctorList } from "Header";
import { CardWrapper } from "Card/card-wrapper";
import { doctorListHeader } from "Util/table-cols";
import { DoctorDataList } from "Patient/mock-data";
import DoctorTable from "Doctor/doctor-table";

export const DoctorList = () => {
  return (
    <>
      <LeftLayout>Kadro Menu</LeftLayout>
      <RightLayout>
        <HeaderDoctorList />
        <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
          <DoctorTable header={doctorListHeader} data={DoctorDataList} />
        </CardWrapper>
      </RightLayout>
    </>
  );
};
