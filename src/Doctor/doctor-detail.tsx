import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import SubLink from "NavElements/sub-link";
import { doctorDetail } from "Util/links";
import { Switch, Route } from "react-router-dom";
import { HeaderDoctorDetail, HeaderDoctorEdit } from "Header";
import { DoctorOverview } from "Doctor/doctor-overview";
import { DoctorForm } from "Doctor/doctor-form";

const doctor = { name: "test", surname: "test" };

export const DoctorDetail = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={doctorDetail.overview} />
        <SubLink base={doctorDetail.edit} />
      </LeftLayout>

      <RightLayout>
        <Switch>
          <Route
            exact
            path="/cadre/doctor/detail"
            render={() => (
              <>
                <HeaderDoctorDetail doctor={doctor} />
                <DoctorOverview data={doctor} />
              </>
            )}
          />
          <Route
            exact
            path="/cadre/doctor/detail/edit"
            render={() => (
              <>
                <HeaderDoctorEdit doctor={doctor} />
                <DoctorForm />
              </>
            )}
          />
        </Switch>
      </RightLayout>
    </>
  );
};
