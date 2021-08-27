import axios from "axios";

const fetchAll = (data) => {
  return { type: "FETCH_ALL", payload: data };
};

const createClass = (input) => {
  return { type: "CREATE_CLASS", payload: input };
};


const updateClass = (input) => {
  return { type: "UPDATE_CLASS", payload: input };
};

const deleteClass = (input) => {
  return { type: "DELETE_CLASS", payload: input };
};

export const fetchClasses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => {
        console.log(res);
        dispatch(fetchAll(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const fetchSingleClass = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/classes/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(fetchAll(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export const createNewClass = (input) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/classes", input)
      .then((res) => {
        dispatch(createClass(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const updateAClass = (id, input) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/classes/${id}`, input)
      .then((res) => {
        dispatch(updateClass(res.data));

      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const deleteAClass = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/classes/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteClass(res.data));

      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
