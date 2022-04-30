import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import InputField from "../componentsElements/InputField";
import * as yup from "yup";
const Register = () => {
  //   pop up
  const [show, setShow] = useState(true);
  const handleClose = () =>  setShow(false);
  const handleShow = () => setShow(true);
  console.log("show");
  // let tee = props.triger;
  // end pop up
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { fullName, email, password } = inputValue;

  const [errors, setErrors] = useState({
    eror: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((Prev) => ({
      ...Prev,
      [name]: value,
    }));
  };
  let schema = yup.object().shape({
    fullName: yup.string().required("نام شما الزامی می باشد"),
    email: yup
      .string()
      .email("فرمت ایمیل صحیح نمی باشد")
      .required("ایمیل الزامی می باشد"),
    password: yup.string().min(8, "رمز عبور حداقل باید 8 کارکتر باشد"),
  });
  async function validate() {
    try {
      const result = await schema.validate(inputValue, { abortEarly: false });
      return result;
    } catch (error) {
      console.log(error.errors);
      setErrors({ eror: error.errors });
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await validate();
    console.log(result);
  }
  // useEffect(() => {
  //   setShow(props.triger);
  // }, [props.triger]);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Register
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <ModalHeader >
          <ModalTitle>ثبت نام </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <InputField
            type="text"
            value={fullName}
            name="fullName"
            label="لطفا نام خود را وارد کنید"
            placeholder="نام و شهرت "
            onChange={handleChange}
            className="form-control p-1"
          ></InputField>
          <InputField
            type="email"
            value={email}
            name="email"
            label="name@example.com"
            placeholder="ایمیل "
            onChange={handleChange}
            className="form-control p-1"
          ></InputField>
          <InputField
            type="password"
            value={password}
            name="password"
            label="Password"
            placeholder="Password"
            onChange={handleChange}
            className="form-control p-1"
          ></InputField>
          {errors.eror.length !== 0 && (
            <div className="alert alert-danger">
              <ul className="bg-transparent">
                {errors.eror.map((e, i) => (
                  <li className="bg-transparent" key={i}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleSubmit}>
            {" "}
            ثبت نام
          </Button>
          <Button variant="secondary" onClick={handleClose}>
           <Link className="bg-transparent" to={'/'}> {" "}
            بازگشت</Link>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Register;
