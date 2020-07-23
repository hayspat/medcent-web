import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import SubLink from "NavElements/sub-link";
import { patientList } from "Util/links";
import { HeaderPatientList } from "Header";
import { CardWrapper } from "Card/card-wrapper";
import { patientListHeader } from "Util/table-cols";
import { patientDataList } from "Patient/mock-data";
import PatientTable from "Patient/patient-table";

export const PatientList = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={patientList.list} />
      </LeftLayout>
      <RightLayout>
        <HeaderPatientList />
        <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
          <PatientTable header={patientListHeader} data={patientDataList} />
        </CardWrapper>
      </RightLayout>
    </>
  );
};
