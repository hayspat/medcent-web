import React from "react";
import { patientForm } from "Util/form-fields";
import { patient, StringGenderType } from "Util/system";
import { Card } from "Card/card";
import { FieldOutput } from "Outputs/field-output";
import { CheckboxOutput } from "Forms/Outputs/checkbox-output";

type PropTypes = {
  data: any;
};

export const PatientOverview = (props: PropTypes) => {
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
      <Card base={patient.process}>
        <FieldOutput
          base={patientForm.documentNo}
          data={props.data.DocumentNo}
        />
        <FieldOutput base={patientForm.tag} data={props.data.Tag} />
        <FieldOutput base={patientForm.note} data={props.data.Note} />
      </Card>
    </>
  );
};

export default PatientOverview;
