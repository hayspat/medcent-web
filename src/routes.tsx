import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Dashboard } from "Layout/dashboard";
import { useTransition, animated } from "react-spring";
import { Leftbar } from "Layout/leftbar";
import { PatientList } from "Patient/patient-list";
import { PatientDetail } from "Patient/patient-detail";
import { NewPatient } from "Patient/patient-new";
import { DoctorList } from "Doctor/doctor-list";
import { DoctorDetail } from "Doctor/doctor-detail";
import { DoctorNew } from "Doctor/doctor-new";
import { TechnicianList } from "Technician/technician-list";
import { TechnicianNew } from "Technician/technician-new";
import { TechnicianDetail } from "Technician/technician-detail";
import { SettingServices } from "Settings/setting-services";

export const Routes = (): JSX.Element => {
  const location = useLocation();

  const transition = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 1,
      transform: "translate3d(-100%,0,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
    },
    leave: {
      opacity: 1,
      transform: "translate3d(-100%,0,0)",
    },
    config: { mass: 1, tension: 300, friction: 40 },
  });

  return (
    <>
      <Leftbar />
      {transition.map(({ key, item, props }) => (
        <animated.div
          key={key}
          style={props}
          className="fixed flex h-full ml-20 bg-gray-200 w-layout"
        >
          <Switch location={item}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/patient" component={PatientList} />
            <Route path="/patient/detail" component={PatientDetail} />
            <Route path="/patient/new" component={NewPatient} />
            <Route exact path="/cadre/doctor" component={DoctorList} />
            <Route path="/cadre/doctor/new" component={DoctorNew} />
            <Route path="/cadre/doctor/detail" component={DoctorDetail} />
            <Route exact path="/lab/technician" component={TechnicianList} />
            <Route path="/lab/technician/new" component={TechnicianNew} />
            <Route path="/lab/technician/detail" component={TechnicianDetail} />
            <Route exact path="/settings" render={() => <h1>Ayarlar</h1>} />
            <Route path="/settings/services" component={SettingServices} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};
