import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import SubLink from "NavElements/sub-link";
import { patientList } from "Util/links";
import { HeaderPatientNew } from "Header";
import { PatientForm } from "Patient/patient-form";

export const NewPatient = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={patientList.list} />
      </LeftLayout>
      <RightLayout>
        <HeaderPatientNew />
        <PatientForm />
      </RightLayout>
    </>
  );
};
