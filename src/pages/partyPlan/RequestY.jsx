import React, { useEffect, useRef, useState } from "react";
import "./requesty.css";

const RequestY = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredMeals, setEnteredMeals] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState("");
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState("");
  const [enteredDateTouched, setEnteredDateTouched] = useState("");
  const [enteredPhoneTouched, setEnteredPhoneTouched] = useState("");
  const [enteredTypeTouched, setEnteredTypeTouched] = useState("");
  const [enteredNumberTouched, setEnteredNumberTouched] = useState("");
  const [enteredAddressTouched, setEnteredAddressTouched] = useState("");
  const [enteredMealsTouched, setEnteredMealsTouched] = useState("");

  const [mail, setMail] = useState("");
  const Mails = () => {
    setMail(!mail);
  };
  useEffect(() => {
    if (
      mail &&
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredNumberIsValid &&
      enteredTypeIsValid &&
      enteredMealsIsValid &&
      enteredAddressIsValid &&
      enteredPhoneIsValid &&
      enteredDateIsValid
    ) {
      formIsValid = true;
      alert("Mail Sent");
    }
  }, [mail]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setEnteredEmailTouched(true);
    setEnteredFirstNameTouched(true);
    setEnteredLastNameTouched(true);
    setEnteredTypeTouched(true);
    setEnteredDateTouched(true);
    setEnteredNumberTouched(true);
    setEnteredMealsTouched(true);
    setEnteredAddressTouched(true);
    setEnteredPhoneTouched(true);
    if (!enteredFirstNameIsValid) {
      return;
    }
    if (!enteredLastNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    if (!enteredTypeIsValid) {
      return;
    }
    if (!enteredPhoneIsValid) {
      return;
    }
    if (!enteredDateIsValid) {
      return;
    }
    if (!enteredAddressIsValid) {
      return;
    }
    if (!enteredMealsIsValid) {
      return;
    }
    if (!enteredNumberIsValid) {
      return;
    }

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredType("");
    setEnteredDate("");
    setEnteredNumber("");
    setEnteredPhone("");
    setEnteredEmail("");
    setEnteredAddress("");
    setEnteredMeals("");

    setEnteredTypeTouched(false);
    setEnteredDateTouched(false);
    setEnteredNumberTouched(false);
    setEnteredFirstNameTouched(false);
    setEnteredLastNameTouched(false);
    setEnteredPhoneTouched(false);
    setEnteredEmailTouched(false);
    setEnteredAddressTouched(false);
    setEnteredMealsTouched(false);
    emailjs
      .sendForm(
        "service_so5927y",
        "template_m0vjned",
        form.current,
        "vbQ7WkJoa8ukcL-Dh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const enteredPhoneIsValid = enteredPhone.trim() !== "";
  const enteredNumberIsValid = enteredNumber.trim() !== "";
  const enteredAddressIsValid = enteredAddress.trim() !== "";
  const enteredDateIsValid = enteredDate.trim() !== "";
  const enteredTypeIsValid = enteredType.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredMealsIsValid = enteredMeals.trim() !== "";

  const firstNameInputIsValid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;
  const lastNameInputIsValid =
    !enteredLastNameIsValid && enteredLastNameTouched;
  const typeInputIsValid = !enteredTypeIsValid && enteredTypeTouched;
  const dateInputIsValid = !enteredDateIsValid && enteredDateTouched;
  const phoneInputIsValid = !enteredPhoneIsValid && enteredPhoneTouched;
  const addressInputIsValid = !enteredAddressIsValid && enteredAddressTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
  const numberInputIsValid = !enteredNumberIsValid && enteredNumberTouched;
  const mealsInputIsValid = !enteredMealsIsValid && enteredMealsTouched;

  let formIsValid = false;

  if (enteredFirstNameIsValid) {
    formIsValid = true;
  }
  if (enteredLastNameIsValid) {
    formIsValid = true;
  }
  if (enteredDateIsValid) {
    formIsValid = true;
  }
  if (enteredTypeIsValid) {
    formIsValid = true;
  }
  if (enteredPhoneIsValid) {
    formIsValid = true;
  }
  if (enteredAddressIsValid) {
    formIsValid = true;
  }
  if (enteredEmailIsValid) {
    formIsValid = true;
  }
  if (enteredNumberIsValid) {
    formIsValid = true;
  }
  if (enteredMealsIsValid) {
    formIsValid = true;
  }

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const dateInputChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const addressInputChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };
  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const typeInputChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const numberInputChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const mealsInputChangeHandler = (event) => {
    setEnteredMeals(event.target.value);
  };

  const firstNameInputBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };
  const lastNameInputBlurHandler = (event) => {
    setEnteredLastNameTouched(true);
  };
  const dateInputBlurHandler = (event) => {
    setEnteredDateTouched(true);
  };
  const typeInputBlurHandler = (event) => {
    setEnteredTypeTouched(true);
  };
  const addressInputBlurHandler = (event) => {
    setEnteredAddressTouched(true);
  };
  const phoneInputBlurHandler = (event) => {
    setEnteredPhoneTouched(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };
  const numberInputBlurHandler = (event) => {
    setEnteredNumberTouched(true);
  };
  const mealsInputBlurHandler = (event) => {
    setEnteredMealsTouched(true);
  };

  const firstNameInputClasses = firstNameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const dateInputClasses = dateInputIsValid
    ? "form-control invalid"
    : "form-control";
  const addressInputClasses = addressInputIsValid
    ? "form-control invalid"
    : "form-control";
  const phoneInputClasses = phoneInputIsValid
    ? "form-control invalid"
    : "form-control";
  const typeInputClasses = typeInputIsValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";
  const numberInputClasses = numberInputIsValid
    ? "form-control invalid"
    : "form-control";
  const mealsInputClasses = mealsInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <main className="requesty">
      <div className="container container-req">
        <h1>Request Your Party Meals</h1>
        <p>
          Please provide us with some details to get started. Fill out the form
          below, and we'll be in touch with a menu proposal that suits your
          event perfectly.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <section>
            <article>
              <label htmlFor="first-name">First name</label>
              <div className={firstNameInputClasses}>
                <input
                  type="text"
                  placeholder="-"
                  required
                  name="first-name"
                  value={enteredFirstName}
                  onChange={firstNameInputChangeHandler}
                  onBlur={firstNameInputBlurHandler}
                />
                {firstNameInputIsValid && (
                  <p className="error-text">First Name must not be empty</p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="last-name">Last name</label>
              <div className={lastNameInputClasses}>
                <input
                  type="text"
                  placeholder="-"
                  required
                  name="last-name"
                  value={enteredLastName}
                  onChange={lastNameInputChangeHandler}
                  onBlur={lastNameInputBlurHandler}
                />
                {lastNameInputIsValid && (
                  <p className="error-text">Last Name must not be empty</p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="email">Email address</label>
              <div className={emailInputClasses}>
                <input
                  type="text"
                  placeholder="-"
                  required
                  name="email"
                  value={enteredEmail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                />
                {emailInputIsValid && (
                  <p className="error-text">
                    Email must not be empty and must include @
                  </p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="phone">Phone Number</label>
              <div className={phoneInputClasses}>
                <input
                  type="number"
                  placeholder="-"
                  required
                  name="phone"
                  value={enteredPhone}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneInputBlurHandler}
                />
                {phoneInputIsValid && (
                  <p className="error-text">Phone Number must not be empty</p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="date">Event date</label>
              <div className={dateInputClasses}>
                <input
                  type="date"
                  placeholder="-"
                  required
                  name="date"
                  value={enteredDate}
                  onChange={dateInputChangeHandler}
                  onBlur={dateInputBlurHandler}
                />
                {dateInputIsValid && (
                  <p className="error-text">Event date must not be empty</p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="type">Event type</label>
              <div className={typeInputClasses}>
                <input
                  type="text"
                  placeholder="-"
                  required
                  name="type"
                  value={enteredType}
                  onChange={typeInputChangeHandler}
                  onBlur={typeInputBlurHandler}
                />
                {typeInputIsValid && (
                  <p className="error-text">Event type must not be empty</p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="number">Number of guests</label>
              <div className={numberInputClasses}>
                <input
                  type="number"
                  placeholder="-"
                  required
                  name="number"
                  value={enteredNumber}
                  onChange={numberInputChangeHandler}
                  onBlur={numberInputBlurHandler}
                />
                {numberInputIsValid && (
                  <p className="error-text">
                    Number of guests must not be empty
                  </p>
                )}
              </div>
            </article>
            <article>
              <label htmlFor="address">Address</label>
              <div className={addressInputClasses}>
                <input
                  type="text"
                  placeholder="-"
                  required
                  name="address"
                  value={enteredAddress}
                  onChange={addressInputChangeHandler}
                  onBlur={addressInputBlurHandler}
                />
                {addressInputIsValid && (
                  <p className="error-text">Address must not be empty</p>
                )}
              </div>
            </article>
          </section>
          <article className="Mea">
            <label htmlFor="meals">Enter the meals you want</label>
            <div className={mealsInputClasses}>
              <textarea
                name="meals"
                id="meal"
                cols="30"
                rows="10"
                value={enteredMeals}
                onChange={mealsInputChangeHandler}
                onBlur={mealsInputBlurHandler}
              ></textarea>
              {mealsInputIsValid && (
                <p className="error-text">Meals you want must not be empty</p>
              )}
            </div>
          </article>
          <div className="req-bt">
            <button
              className="reqBtn"
              disabled={!formIsValid}
              onClick={Mails}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RequestY;
