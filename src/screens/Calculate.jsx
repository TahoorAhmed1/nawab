import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./calculator.css";

const Calculate = () => {
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [salePrice, setSalePrice] = useState(""); // New state for sale price
  const [downPayment, setDownPayment] = useState("");
  const [tradeValue, setTradeValue] = useState("");
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [costOfBorrowing, setCostOfBorrowing] = useState("");
  const [totalObligation, setTotalObligation] = useState("");
  const [includeSalesTax, setIncludeSalesTax] = useState(false);
  const [salesTax, setSalesTax] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    // Use sale price if available, otherwise use vehicle price
    const price = salePrice || vehiclePrice;

    let loanAmount = price - downPayment - tradeValue;

    if (includeSalesTax && salesTax) {
      const taxAmount = (price * salesTax) / 100;
      loanAmount += taxAmount;
    }

    const rate = interestRate / 100 / 12;
    const months = loanTerm;
    const calculatedMonthlyPayment =
      (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));

    setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
    const calculatedCostOfBorrowing =
      calculatedMonthlyPayment * months - loanAmount;
    setCostOfBorrowing(calculatedCostOfBorrowing.toFixed(2));
    setTotalObligation((loanAmount + calculatedCostOfBorrowing).toFixed(2));
  };

  const handleReset = () => {
    setVehiclePrice("");
    setSalePrice(""); // Reset sale price
    setDownPayment("");
    setTradeValue("");
    setLoanTerm(12);
    setInterestRate("");
    setMonthlyPayment("");
    setCostOfBorrowing("");
    setTotalObligation("");
    setIncludeSalesTax(false);
    setSalesTax("");
  };
  return (
    <>
      <section>
        <div className="form1-back">
          <img src="../assets/back-Img.png" alt="" />
        </div>
      </section>
      <section>
        <div className="main">
          <div className="aside1">
            <h2 className="text-3xl font-bold mb-2">Car Loan Calculator</h2>
            <h3 className="text-md font-bold mb-2">
              Estimate your car loan payment with easy to use car loan
              calculator
            </h3>

            <form className="formCalculate" onSubmit={handleCalculate}>
              {/* Personal Information */}
              <div className="formBorder">
                <div className="headerForm">
                  <h3 className="font-semibold text-lg mb-2">
                    Payment Frequency
                  </h3>
                  <button
                    type="button"
                    className="btn text-center w-100"
                    id="calculate"
                    onClick={handleReset}
                  >
                    <span className="p-0 m-0 calc-reset">
                      <b className=" lable_style pr-2 ">Reset</b>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        color="#606060"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "rgb(96, 96, 96)" }}
                      >
                        <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 input-space">
                  {/* <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Payment Frequency
                    </label>
                    <div className="relative w-[100%]">
                      <select
                        name="salutation"
                        className="w-full p-2 border appearance-none pr-8"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="Mr.">Monthly</option>
                        <option value="Miss">Bi-Weekli</option>
                      </select>
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                        <span style={{ marginBottom: "4px", fontSize: "22px" }}>
                          |{" "}
                        </span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </div>
                  </fieldset> */}

                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Vehicle Price
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none pr-8"
                        type="number"
                        value={vehiclePrice}
                        onChange={(e) =>
                          setVehiclePrice(Number(e.target.value))
                        }
                        required
                      />
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                        <span style={{ marginBottom: "4px", fontSize: "22px" }}>
                          |{" "}
                        </span>
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                    </div>
                  </fieldset>

                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Down payment
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none pr-8"
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        required
                      />
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                        <span style={{ marginBottom: "4px", fontSize: "22px" }}>
                          |{" "}
                        </span>
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                    </div>
                  </fieldset>

                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Your trade
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none pr-8"
                        type="number"
                        value={tradeValue}
                        onChange={(e) => setTradeValue(Number(e.target.value))}
                        required
                      />
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                        <span style={{ marginBottom: "4px", fontSize: "22px" }}>
                          |{" "}
                        </span>
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                    </div>
                  </fieldset>
                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Month Term
                    </label>
                    <div className="relative w-[100%]">
                      <select
                        className="w-full p-2 border appearance-none pr-8"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        required
                      >
                        <option value={12}>12 Months</option>
                        <option value={24}>24 Months</option>
                        <option value={36}>36 Months</option>
                        <option value={48}>48 Months</option>
                        <option value={60}>60 Months</option>
                        <option value={72}>72 Months</option>
                        <option value={84}>84 Months</option>
                        <option value={96}>96 Months</option>
                      </select>
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                        <span style={{ marginBottom: "4px", fontSize: "22px" }}>
                          |{" "}
                        </span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </div>
                  </fieldset>

                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Interest rate
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none pr-8"
                        type="number"
                        value={interestRate}
                        onChange={(e) =>
                          setInterestRate(Number(e.target.value))
                        }
                        required
                      />
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                        <span style={{ marginBottom: "4px", fontSize: "22px" }}>
                          |{" "}
                        </span>
                        <i className="fa-solid fa-percent"></i>
                      </span>
                    </div>
                  </fieldset>
                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Your Estimated Payment
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none"
                        type="number"
                        value={monthlyPayment}
                        disabled
                        required
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Cost Of Borrowing
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none"
                        type="number"
                        value={costOfBorrowing}
                        disabled
                        required
                      />
                    </div>
                  </fieldset>
                  {/* <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      MSRP
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none"
                        type="number"
                        name="MSRP"
                        placeholder=""
                        disabled
                        required
                      />
                    </div>
                  </fieldset> */}
                  <fieldset>
                    <label for="loanTerm" className="p-0 m-0 col-6 lable_style">
                      Total Obligation
                    </label>
                    <div className="relative w-[100%]">
                      <input
                        className="w-full p-2 border appearance-none"
                        type="number"
                        value={totalObligation}
                        disabled
                        required
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    {includeSalesTax && (
                      <>
                        <label
                          for="loanTerm"
                          className="p-0 m-0 col-6 lable_style"
                        >
                          Sales Taxes
                        </label>
                        <div className="relative w-[100%]">
                          <input
                            className="w-full p-2 border appearance-none pr-8"
                            type="number"
                            value={salePrice}
                            onChange={(e) =>
                              setSalePrice(Number(e.target.value))
                            }
                            placeholder="Enter sale price if available"
                          />
                          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                            <span
                              style={{ marginBottom: "4px", fontSize: "22px" }}
                            >
                              |{" "}
                            </span>
                            <i className="fa-solid fa-dollar-sign"></i>
                          </span>
                        </div>
                      </>
                    )}
                    <div className="relative w-[100%] mt-4">
                      <input
                        type="checkbox"
                        checked={includeSalesTax}
                        onChange={(e) => setIncludeSalesTax(e.target.checked)}
                      />
                      <label
                        for="loanTerm"
                        className="p-0 m-0 col-6 lable_style"
                      >
                        {" "}
                        Include sales tax
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div
                  class="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4 input-space"
                  style={{ justifyItems: "center" }}
                >
                  <button
                    type="submit"
                    id="ccalculation"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    CALCULATE PAYMENT
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="aside2">
            <div
              style={{ background: "#F3F3F3" }}
              className=" card-bhai p-6 shadow-lg w-full  h-max"
            >
              {" "}
              {/* Set height to max-content */}
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <div>
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                    src="../assets/p3.png"
                    alt=""
                  />
                </div>
                <p className="text-lg ">
                  {" "}
                  <strong>Phone:</strong> +1 639-525-1669
                </p>
              </div>
              <div className="flex items-start gap-2 mb-4">
                <div>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                      marginTop: "4px",
                    }}
                    src="../assets/p2.png"
                    alt=""
                  />
                </div>
                <p className="text-lg ">
                  <strong>Address:</strong> 80 Manitoba St E, Moose Jaw, SK S6H
                  0A2, Canada
                </p>
              </div>
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-4">
                  <div>
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                        marginTop: "4px",
                      }}
                      src="../assets/p1.png"
                      alt=""
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                </div>
                <p className="info-text">
                  Monday-Friday{" "}
                  <span style={{ marginLeft: "20px" }}>
                    11:00 AM - 07:00 PM
                  </span>{" "}
                </p>
                <p className="info-text">
                  Saturday{" "}
                  <span style={{ marginLeft: "65px" }}>
                    11:00 AM - 07:00 PM
                  </span>
                </p>
                <p className="info-text">
                  Sunday <span style={{ marginLeft: "75px" }}>Closed</span>
                </p>
              </div>
              <Link to="/Contact">
                <button className="all-btn text-white p-3 w-30">
                  Get Directions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Calculate;
