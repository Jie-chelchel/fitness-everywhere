import React from "react";
import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./FormsUI/TextField";
import DatePicker from "./FormsUI/DatePIcker";
import TimePicker from "./FormsUI/TimePicker";
import Button from "./FormsUI/Button";
import { createNewClass } from "../Actions/classes";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CreateClassForm() {
  const initialClass = {
    className: "",
    type: "",
    startDate: "",
    startTime: "",
    duration: "",
    intensity: "",
    location: "",
    instructorID: "",
    capacity: "",
    reservedClientIDs: "",
    classID: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    className: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    intensity: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    instructorID: Yup.string().required("Required"),
    capacity: Yup.number()
      .integer()
      .typeError("please enter an integer")
      .required("Required"),
    startDate: Yup.date().required("Required"),
    startTime: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
    reservedClientIDs: Yup.string().required("Required"),
  });
  const allClasses = useSelector((state) => state.classes);
  const [inputClass, setInputClass] = useState(initialClass);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container maxWidth="sm" className="form">
      <Grid item xs={12}>
        <h1>Create a New Class</h1>
      </Grid>
      <Formik
        validationSchema={FORM_VALIDATION}
        initialValues={{ ...initialClass }}
        onSubmit={(values) => {
          dispatch(createNewClass({ ...values, classID: Date.now() }));
          history.push("/classes");
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField name="className" label="Class Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="type" label="Class Type" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="intensity" label="Class Level" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="capacity" label="Class Capacity" />
            </Grid>

            <Grid item xs={12}>
              <TextField name="location" label="Location" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="instructorID" label="instructorId" />
            </Grid>
            <Grid item xs={6}>
              <DatePicker name="startDate" label="Date" />
            </Grid>
            <Grid item xs={6}>
              <TimePicker name="startTime" label="Time" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="duration" label="Duration" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="reservedClientIDs" label="Reserved Client" />
            </Grid>
            <Grid item xs={12}>
              <Button>Submit Form</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default CreateClassForm;
