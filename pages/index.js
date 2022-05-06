import Head from "next/head";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";

import {
  faBook,
  faStar,
  faCalendar,
  faPencil,
  faSuitcase,
  faX,
} from "@fortawesome/free-solid-svg-icons";
const bookElement = (
  <FontAwesomeIcon icon={faBook} />
);
const starElement = (
  <FontAwesomeIcon icon={faStar} />
);
const classElement = (
  <FontAwesomeIcon icon={faCalendar} />
);
const crossElement = (
  <FontAwesomeIcon icon={faX} />
);
const workElement = (
  <FontAwesomeIcon icon={faSuitcase} />
);
const homeworkElement = (
  <FontAwesomeIcon icon={faPencil} />
);

class Home extends Component {
  //TASRIM İÇİN GEÇİCİ ÇÖZÜM
  //NORMALDE AUTHENTICATION İLE ÇÖZÜM ÜRETİLECEK.
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }

  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/login/");
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Ana Sayfa - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{ links: { "Ana Sayfa": "/" }, title: "Ana Sayfa" }}
        >
          <div className={`container ${styles.container}`}>



            <div className="row d-flex justify-content-between">
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.reddb} ${styles.card}`}>
                  <div className="row ">
                    <div className={`col-2  my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.blue}`}>
                        <div className={`${styles.icons}`}>
                          {bookElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Alınan Ders Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>6</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>Geçen yıla göre 1 ders fazla alıyorsun.</div>
                  </div>
                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.bluedb} ${styles.card}`}>
                  <div className={`row`}>
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.red} mx-auto my-auto`}>
                        <div className={`${styles.icons}`}>
                          {starElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Not Ortalaması</h5>
                        <p className={`card-text ${styles.cardText}`}>3.78</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>Ortalama geçen yıla göre %40 arttı.</div>
                  </div>

                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.green}`}>
                        <div className={`${styles.icons}`}>
                          {classElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Bulunulan Sınıf</h5>
                        <p className={`card-text ${styles.cardText}`}>3</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>
              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.orange}`}>
                        <div className={`${styles.icons}`}>
                          {crossElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Kalınan Ders Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>2</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>

              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.purple}`}>
                        <div className={`${styles.icons}`}>
                          {workElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Yapılan Staj Günü</h5>
                        <p className={`card-text ${styles.cardText}`}>50</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>

              <div className={`col col-xl-4 col-lg-6 col-md-6 col-sm-12`}>
                <div className={`card ${styles.greendb} ${styles.card}`}>
                  <div className="row">
                    <div className={`col-2 my-auto mx-auto`}>
                      <div className={`${styles.squareTop} ${styles.yellow}`}>
                        <div className={`${styles.icons}`}>
                          {homeworkElement}
                        </div>
                      </div>
                    </div>
                    <div className={`col-10 mx-auto my-auto ${styles.cardSag}`}>
                      <div className={`card-body`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>Bekleyen Ödev Sayısı</h5>
                        <p className={`card-text ${styles.cardText}`}>1</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.horizontalLine}`}></div>
                    <div className={`${styles.info}`}>&nbsp;</div>
                  </div>
                </div>
              </div>

            </div>
            <div className={`row`} style={{ margin: "0px", marginTop: "0" }}>
              <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className={`card mt-3 ${styles.card}`}>
                  <div className="row">
                    <span style={{ textAlign: "center", fontSize: "14pt", fontWeight: "lighter" }}>Dönem Ortalamaları</span>
                    <div className={`${styles.horizontalLine}`}></div>
                  </div>
                  <div className="row mt-0">
                    <div className={`${styles.chart}`}><Chart id="mychart"></Chart></div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className={`card mt-3 ${styles.card}`}>
                  <div className="row">
                    <span style={{ textAlign: "center", fontSize: "14pt", fontWeight: "lighter" }}>Dönem Ortalamaları</span>
                    <div className={`${styles.horizontalLine}`}></div>
                  </div>
                  <div className="row mt-0">
                    <div className={`${styles.chart}`}><Chart id="mychart"></Chart></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
