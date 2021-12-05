export const validateData = (data, setError, setSucces, dataList) => {
  function checkDobLength(input, min) {
    if (input.length < min) {
      setError((previus) => ({
        ...previus,
        dob: `date of birth must be ${min} number`,
      }));
    } else {
      setError((previus) => ({
        ...previus,
        dob: "",
      }));
      setSucces(true);
    }
  }
  function checkPinLength(input, min) {
    if (input?.length === 6) {
      setError((previus) => ({
        ...previus,
        pin: "",
      }));
      setSucces(true);
    } else if (input.length < min) {
      setError((previus) => ({
        ...previus,
        pin: `Pincode must be ${min} digit`,
      }));
    }
  }
  function checkPhoneLength(input, min) {
    if (input.length <= min) {
      setError((previus) => ({
        ...previus,
        phone: `Phone number must be ${min} digit`,
      }));
    } else {
      setError((previus) => ({
        ...previus,
        dob: "",
      }));
      setSucces(true);
    }
  }

  function checkEmail(input) {
    const duplicateEmail = dataList?.some((item) => item.email === input);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (duplicateEmail) {
      setError((previus) => ({
        ...previus,
        email: `This Email is already exist`,
      }));
    } else if (re.test(input.trim())) {
      setError((previus) => ({
        ...previus,
        email: "",
      }));
      setSucces(true);
    } else {
      setError((previus) => ({
        ...previus,
        email: `Email is not valid`,
      }));
    }
  }
  checkDobLength(data.dob, 10);
  checkPinLength(data.pin, 6);
  checkPhoneLength(data.phone, 10);
  checkEmail(data.email);
};
