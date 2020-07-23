import React from "react";
import { patient, StringGenderType } from "Util/system";
import { patientForm } from "Util/form-fields";
import { FieldOutput } from "Outputs/field-output";
import { Card } from "Card/card";
import { CheckboxOutput } from "Forms/Outputs/checkbox-output";

type PropTypes = {
  data: any;
};

export const TechnicianOverview = (props: PropTypes) => {
  return (
    <>
      <Card base={patient.identity}>
        <FieldOutput base={patientForm.name} data={props.data.Name} />
        <FieldOutput base={patientForm.surname} data={props.data.Surname} />
        <FieldOutput base={patientForm.tc} data={props.data.Tc} />
        <FieldOutput
          base={patientForm.gender}
          data={StringGenderType(props.data.Gender)}
        />
        <FieldOutput base={patientForm.birthDate} data={props.data.BirthDate} />
      </Card>
      <Card base={patient.contact}>
        <FieldOutput
          base={patientForm.mobilePhone}
          data={props.data.MobilePhone}
        />
        <FieldOutput base={patientForm.email} data={props.data.EMail} />

        <CheckboxOutput
          base={patientForm.canSendSms}
          data={props.data.CanSendSms}
        />
      </Card>
    </>
  );
};
