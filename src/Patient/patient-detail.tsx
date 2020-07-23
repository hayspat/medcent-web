import React from "react";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "Layout/layout";
import SubLink from "NavElements/sub-link";
import { patientDetail } from "Util/links";
import { HeaderPatientDetails, HeaderPatientEdit } from "Header";
import PatientOverview from "Patient/patient-overview";
import { PatientForm } from "Patient/patient-form";

export const PatientDetail = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={patientDetail.overview} />
        <SubLink base={patientDetail.edit} />
      </LeftLayout>

      <RightLayout>
        <Switch>
          <Route
            exact
            path={patientDetail.overview.link}
            render={() => (
              <>
                <HeaderPatientDetails
                  patients={{ name: "test", surname: "test" }}
                />
                <PatientOverview data={{ name: "test", surname: "test" }} />
              </>
            )}
          />
          <Route
            exact
            path={patientDetail.edit.link}
            render={() => (
              <>
                <HeaderPatientEdit
                  patients={{ name: "test", surname: "test" }}
                />
                <PatientForm />
              </>
            )}
          />
        </Switch>
      </RightLayout>

      {/* <h1>detaylar</h1> */}
    </>
  );
};
