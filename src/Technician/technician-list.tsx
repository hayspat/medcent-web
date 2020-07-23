import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import { HeaderTechnicianList } from "Header";
import { CardWrapper } from "Card/card-wrapper";
import { TechnicianTable } from "Technician/technician-table";
import { doctorListHeader } from "Util/table-cols";
import { DoctorDataList } from "Patient/mock-data";

export const TechnicianList = () => {
  return (
    <>
      <LeftLayout>Lab Menu</LeftLayout>
      <RightLayout>
        <HeaderTechnicianList />
        <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
          <TechnicianTable header={doctorListHeader} data={DoctorDataList} />
        </CardWrapper>
      </RightLayout>
    </>
  );
};
