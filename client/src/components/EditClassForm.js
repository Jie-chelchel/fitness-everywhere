import React from "react";
import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./FormsUI/TextField";
import DatePicker from "./FormsUI/DatePIcker";
import TimePicker from "./FormsUI/TimePicker";
import Button from "./FormsUI/Button";
import { updateAClass } from "../Actions/classes";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";

function EditClassForm() {
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
  const dispatch = useDispatch();
  const allClasses = useSelector((state) => state.classes);
  const history = useHistory();
  const { id } = useParams();
  const selectedClass = allClasses.find(
    (item) => item.classID.toString() === id
  );
  return (
    <Container maxWidth="sm" className="form">
      <Grid item xs={12}>
        <h1>Edit Class</h1>
      </Grid>
      <Formik
        validationSchema={FORM_VALIDATION}
        initialValues={selectedClass}
        onSubmit={(values) => {
          dispatch(updateAClass(selectedClass.classID, values));
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
            <Grid item xs={6}>
              <TextField name="instructorID" label="instructorId" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="duration" label="Duration" />
            </Grid>
            <Grid item xs={6}>
              <DatePicker name="startDate" label="Date" />
            </Grid>
            <Grid item xs={6}>
              <TimePicker name="startTime" label="Time" />
            </Grid>

            {/* <Grid item xs={6}>
              <TextField name="reservedClientIDs" label="Reserved Client" />
            </Grid> */}
            <Grid item xs={12}>
              <Button type="submit">Edit Form</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default EditClassForm;
