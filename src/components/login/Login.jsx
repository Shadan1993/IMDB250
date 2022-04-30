import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { Prev } from "react-bootstrap/esm/PageItem";
import InputField from "../componentsElements/InputField";
import * as yup from "yup";
const Login = () => {
  //   pop up
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // end pop up
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
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
    email: yup
      .string()
      .email("فرمت ایمیل صحیح نمی باشد")
      .required("ایمیل را حتما وارد کنید"),
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
    let pass = "password";
    e.preventDefault();
    const result = await validate();
    console.log(result);
    try {
      if (result) {
        const response = await axios.post("http://moviesapi.ir/oauth/token", {
          grant_type: pass,
          username: email,
          password: password,
        });
        console.log(response.status, "login test");
      }
    } catch (error) {
      alert("خطایی رخ داده است");
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader>
          <ModalTitle>ورود به سایت</ModalTitle>
        </ModalHeader>
        <ModalBody>
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
            ورود
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            <Link className="bg-transparent" to={"/"}>
              {" "}
              بازگشت
            </Link>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <Link className="bg-transparent" to={"/Register"}>
              {" "}
              ثبت نام
            </Link>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Login;
