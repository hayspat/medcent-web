import React from "react";
import { LeftLayout, RightLayout } from "Layout/layout";
import SubLink from "NavElements/sub-link";
import { technicianDetail } from "Util/links";
import { HeaderTechnicianDetails, HeaderTechnicianEdit } from "Header";
import { Switch, Route } from "react-router-dom";
import { TechnicianOverview } from "Technician/technician-overview";
import { TechnicianForm } from "Technician/technician-form";

const technician = { name: "test", surname: "test" };

export const TechnicianDetail = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={technicianDetail.overview} />
        <SubLink base={technicianDetail.edit} />
      </LeftLayout>

      <RightLayout>
        <Switch>
          <Route
            exact
            path="/lab/technician/detail"
            render={() => (
              <>
                <HeaderTechnicianDetails technician={technician} />
                <TechnicianOverview data={technician} />
              </>
            )}
          />
          <Route
            exact
            path="/lab/technician/detail/edit"
            render={() => (
              <>
                <HeaderTechnicianEdit technician={technician} />
                <TechnicianForm />
              </>
            )}
          />
        </Switch>
      </RightLayout>
    </>
  );
};
