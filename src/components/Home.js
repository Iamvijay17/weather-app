import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiKey = "37a83b42efaef338f64cc339a46cb3f3";
  const defUrl = "https://api.openweathermap.org/data/2.5/weather?q";
  const url = `${defUrl}=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className=" min-vh-100" id="bg">
      
      <div className="container-fluid ">
        
        <nav className="navbar bg-body-tertiary bg-light rounded ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8691/8691510.png"
                alt="Logo"
                width="20"
                className="rounded-pill me-3 d-inline-block align-text-top"
              />
              <span className="fw-semibold text-primary ">Weather App</span>
            </a>
            <div className="d-flex 		d-none d-xxl-block d-xl-block d-lg-block">
              <a className="  text-decoration-none fw-semibold me-5" href="#">
                About
              </a>
            </div>
          </div>
        </nav>
        {/* ================= Navbar End ================= */}
        <div className="container-fluid text-center mt-3">
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col "></div>
              <div className="col-10 col-md-7 col-xxl-4 col-xl-4">
                <div className="d-flex" role="search">
                  <input
                    onChange={(event) => setLocation(event.target.value)}
                    value={location}
                    onKeyPress={searchLocation}
                    className="form-control me-2 rounded-5 shadow border-2"
                    type="search"
                    placeholder="Search Location"
                    aria-label="Search"
                  />
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
       

        {/* ================= card start ================= */}
        
        <div class="container-fluid">
          <div class="row mt-xl-5 mt-3 ">  
            <div class="col"></div>
            {data.main ? (
              <div class="col-12 col-xl-10 col-xxl-8">
                <div className="container-fluid">
                  <div class="card rounded shadow border-0">
                    <div class="card-body text-white">
                      <h1 className="mt-3 ms-3 text-black">{data.name}</h1>
                      {/* ========= Temp ========= */}
                      
                      {data.main ? (
                        <p className="mt-3 ms-3 fw-bold temp position-absolute text-black">
                          {data.main.temp.toFixed()}
                          <span className="">°c</span>
                        </p>
                      ) : null}
                      <span className=" fw-semibold ms-3 fs-3 position-absolute  text-secondary  ">
                        {data.weather[0].main}
                      </span>

                      {/* ========= Haze Img ========= */}

                      <div className="text-center mb-2">
                        {data.weather[0].main == "Haze" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-256.png"
                            alt=""
                          />
                        ) : null}

                        {/* ========= Haze Img ========= */}

                        {data.weather[0].main == "Clouds" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_35-256.png"
                            alt=""
                          />
                        ) : null}

                        {/* ========= Mist Img ========= */}

                        {data.weather[0].main == "Mist" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* ========= Rain Img ========= */}

                        {data.weather[0].main == "Rain" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_16-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* ========= Thunderstorm Img ========= */}

                        {data.weather[0].main == "Thunderstorm" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_24-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* ========= Haze Img ========= */}

                        {data.weather[0].main == "Drizzle" ? (
                          <img
                            className=""
                            src="https://cdn3.iconfinder.com/data/icons/spring-23/32/rain-rainfall-drizzle-sun-cloud-weather-forecast-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* ========= Clear Img ========= */}

                        {data.weather[0].main == "Clear" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* ========= Fog Img ========= */}

                        {data.weather[0].main == "Fog" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_38-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* ========= Houston Img ========= */}

                        {data.weather[0].main == "Smoke" ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_10-512.png"
                            alt=""
                            width="250"
                          />
                        ) : null}

                        {/* {String(data.weather[0].main).includes('haze') ? (
                          <img
                            className=""
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-256.png"
                            alt=""
                          />
                        ) : null} */}
                      </div>
                    </div>
                    {/* ========= down card ========= */}
                    <div class="row align-items-center justify-content-center gap-xxl-5  mb-xxl-4 ms-xxl-4 ms-xl-5 mb-xl-4">
                      <div class="col">
                        {data.main ? (
                          <div class="card dcard shadow border-0 ms-xxl-2">
                            <div class="card-header fw-semibold text-center">
                              Wind
                            </div>
                            <div class="card-body text-center">
                              <h5>{data.wind.speed} Km/h</h5>
                              <div className="card-img mt-4">
                                <img
                                  src="https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Windy-256.png"
                                  alt=""
                                  width="90"
                                  height=""
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div class="col">
                        {data.main ? (
                          <div class="card dcard shadow border-0">
                            <div class="card-header fw-semibold text-center">
                              Humidity
                            </div>
                            <div class="card-body text-center">
                              <h5>{data.main.humidity} %</h5>
                              <div className="card-img mt-4">
                                <img
                                  src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_44-256.png"
                                  alt=""
                                  width="90"
                                  height=""
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div class="col">
                        {data.main ? (
                          <div class="card dcard shadow border-0">
                            <div class="card-header fw-semibold text-center">
                              Precipitation
                            </div>
                            <div class="card-body text-center">
                              <h5>{data.sys.type} %</h5>
                              <div className="card-img mt-4">
                                <img
                                  src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_33-256.png"
                                  alt=""
                                  width="90"
                                  height=""
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div class="col">
                        {data.main ? (
                          <div class="card dcard shadow border-0">
                            <div class="card-header fw-semibold text-center">
                              Clouds
                            </div>
                            <div class="card-body text-center">
                              <h5>{data.clouds.all} Km/h</h5>
                              <div className="card-img mt-4">
                                <img
                                  src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_10-512.png"
                                  alt=""
                                  width="90"
                                  height=""
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div class="col">
                        {data.main ? (
                          <div class="card dcard shadow border-0 	d-none d-sm-block">
                            <div class="card-header fw-semibold text-center">
                              visibility
                            </div>
                            <div class="card-body text-center">
                              <h5>
                                {String(data.visibility).substring(0, 1)} Km{" "}
                              </h5>
                              <div className="card-img mt-4">
                                <img
                                  src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700278-icon-38-sunglasses-256.png"
                                  alt=""
                                  width="90"
                                  height=""
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>{" "}

                

              </div>
            ) : null}
            <div class="col"></div>
          </div>
        </div>
      </div>
     
    </div>
  );
};
