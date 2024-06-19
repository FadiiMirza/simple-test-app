import Button from "./common/button";
import {
  createAccount,
  enterUserNameAndPasswordText,
  haveNoAccount,
  loginIntoYourAccountText,
} from "../constants";
import CheckboxInput from "./common/checkboxInput";
import Input from "./common/input";
import Label from "./common/label";
import Logo from "./common/logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validationSchema";

const LoginForm = () => {
  const form = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const {
    register,
    handleSubmit,
    setError,
    // formState = { errors, isValid },
  } = form;

  const handleFormSubmit = () => {};

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Logo />
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        {loginIntoYourAccountText}
                      </h5>
                      <p className="text-center small">
                        {enterUserNameAndPasswordText}
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit(handleFormSubmit)}
                      className="row g-3"
                      noValidate
                    >
                      <div className="col-12">
                        <Label label="Username" htmlForText="username" />
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text input-group-border-radius"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <Input
                            inputName="username"
                            register={register}
                            // error={errors}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <Label label="Password" htmlForText="password" />
                        <Input
                          type="password"
                          inputName="password"
                          register={register}
                        />
                      </div>

                      <div className="col-12">
                        <CheckboxInput
                          label="Remember me"
                          inputName="remember"
                          htmlForText="rememberMe"
                        />
                      </div>

                      <div className="col-12">
                        <Button buttonText="login" />
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">
                          {haveNoAccount}
                          <Link className="ms-1">{createAccount}</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <Footer /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginForm;
