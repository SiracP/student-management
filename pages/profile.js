
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import TranslateIcon from "@mui/icons-material/Translate";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import Link from "next/link";
import { Box, Grid, Paper, Avatar, Button, Typography } from "@mui/material";
import styles from "../styles/Profile.module.css";
import AppConstant from "../connect/app_constants";
import Portal from "./loginportal";
import axios from "axios";
const Item = styled(Paper)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",

  flexDirection: "column",
  position: "relative",
  minWidth: "0px",
  overflowWrap: "break-word",
  backgroundColor: "rgb(255, 255, 255)",
  backgroundClip: "border-box",
  border: "0px solid rgba(0, 0, 0, 0.125)",
  borderRadius: "0.75rem",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
  overflow: "visible",
  paddingLeft: "1rem",
  padding: "1rem",
  marginBottom: "1.1rem",
}));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Profile() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState([]);
  const [oldpassword, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [againpassword, setAgainPassword] = useState("");

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };
  const handleAgainPassword = (event) => {
    setAgainPassword(event.target.value);
  };
  if (AppConstant.isLogged) {
    const requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        token: AppConstant.token,
      },
    };
    useEffect(() => {
      const fetchData = () => {
        fetch("http://localhost:3001/profile", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setProfile(posts.data);
          })
          .catch((e) => {
            setError(true);
            setLoading(false);
          });
      };
      fetchData();
    }, []);

    const connect = () => {
      axios
        .get("http://localhost:3001/profile", {
          headers: {
            token: AppConstant.token,
          },
        })
        .then(function (response) {
          if (response.data.result == true) {
            setProfile(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    if (loading) {
      return <h3>Loading ...</h3>;
    }

    if (error) {
      return <h3>Error in the API call itself ...</h3>;
    }

    return (
      <>
        <Head>
          <title>Bilgilerim - ????C ??BS</title>
        </Head>
        <Layout
          appBar={{
            links: { "Ana Sayfa": "/", Bilgilerim: "/profile" },
            title: "Bilgilerim",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Paper className={styles.listMenu}>
                <List>
                  <li className={styles.linkItem}>
                    <Link href="#ozlukbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <PersonIcon></PersonIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="??zl??k Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  </li>

                  <li className={styles.linkItem}>
                    <Link href="#birimbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <SchoolIcon></SchoolIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Birim Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  </li>

                  <li className={styles.linkItem}>
                    <Link href="#iletisimbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <CallIcon></CallIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="??leti??im Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  </li>

                  <li className={styles.linkItem}>
                    <Link href="#adresbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <HomeIcon></HomeIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Adres Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  </li>

                  <li className={styles.linkItem}>
                    <Link href="#hazirlikbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <TranslateIcon></TranslateIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Haz??rl??k Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  </li>

                  <li className={styles.linkItem}>
                    <Link href="#girisbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <LockOpenIcon></LockOpenIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Giri?? Bilgileri"
                            className={styles.listItemText}
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  </li>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={9}>
              {profile.map((i) => (
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Item>
                        <Box
                          style={{ textAlign: "center", alignItems: "center" }}
                        >
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              style={{
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <Avatar
                                src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                                sx={{ width: "15%", height: "auto" }}
                              ></Avatar>
                            </Grid>
                            <Grid item xs={12} paddingTop={1}>
                              <Typography variant="h5" className={styles.h5}>
                                {i.isim + " " + i.soyisim}
                              </Typography>
                              <Typography
                                variant="span"
                                className={styles.span}
                              >
                                {i.birimAdi}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      id="ozlukbilgileri"
                      style={{ scrollMarginTop: "110px" }}
                    >
                      <Item>
                        <Box>
                          <Grid container>
                            <Grid item xs={12} paddingBottom={2}>
                              <Typography variant="h5" className={styles.h5}>
                                ??zl??k Bilgileri
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container paddingBottom={2} paddingTop={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.isim}
                                      label="Ad"
                                      disabled
                                      id="firstname"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.soyisim}
                                      label="Soyad"
                                      disabled
                                      id="lastname"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                              <Grid container paddingBottom={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.anneAdi}
                                      label="Anne Ad??"
                                      disabled
                                      id="mothername"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.babaAdi}
                                      label="Baba Ad??"
                                      disabled
                                      id="fathername"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                              <Grid container paddingBottom={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.uyruk}
                                      label="Uyruk"
                                      disabled
                                      id="nationality"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.tcNo}
                                      label="Kimlik Numaras??"
                                      disabled
                                      id="idnumber"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                              <Grid container paddingBottom={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.cinsiyet}
                                      label="Cinsiyet"
                                      disabled
                                      id="gender"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.dg}
                                      label="Do??um Tarihi"
                                      disabled
                                      id="idnumber"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                              <Grid container paddingBottom={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.medeniHal}
                                      label="Medeni Hali"
                                      disabled
                                      id="status"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.dogumYeri}
                                      label="Do??um Yeri"
                                      disabled
                                      id="birthplace"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      id="birimbilgileri"
                      style={{ scrollMarginTop: "110px" }}
                    >
                      <Item>
                        <Box>
                          <Grid container>
                            <Grid item xs={12} paddingBottom={2}>
                              <Typography variant="h5" className={styles.h5}>
                                Birim Bilgileri
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container paddingBottom={2} paddingTop={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.fakulte}
                                      label="Fak??lte"
                                      disabled
                                      id="faculty"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.birimAdi}
                                      label="B??l??m"
                                      disabled
                                      id="department"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                              <Grid container paddingBottom={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.ogrenciNo}
                                      label="????renci Numaras??"
                                      disabled
                                      id="studentnumber"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.durum}
                                      label="????renci Durumu"
                                      disabled
                                      id="learnstatus"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                              <Grid container paddingBottom={2}>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.statu}
                                      label="Statu"
                                      disabled
                                      id="statu"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} paddingRight={2}>
                                  <FormControl fullWidth>
                                    <TextField
                                      value={i.kay??t}
                                      label="Kay??t ??ekli"
                                      disabled
                                      id="registerType"
                                      variant="standard"
                                    />
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    id="iletisimbilgileri"
                    style={{ scrollMarginTop: "110px" }}
                  >
                    <Item>
                      <Box>
                        <Grid container>
                          <Grid item xs={12} paddingBottom={2}>
                            <Typography variant="h5" className={styles.h5}>
                              ??leti??im Bilgileri
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container paddingBottom={2} paddingTop={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue={i.cepNo}
                                    disabled
                                    label="Cep Telefonu"
                                    id="cellphone"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue={i.evNo}
                                    disabled
                                    label="Ev Telefonu"
                                    id="homephone"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid container paddingBottom={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={i.kurumsalEposta}
                                    disabled
                                    label="Kurumsal E-posta"
                                    id="emailofficial"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue={i.kurtarmaEposta}
                                    disabled
                                    label="Kurtarma E-posta"
                                    id="email"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid container paddingBottom={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue={i.yak??nNo}
                                    disabled
                                    label="Birincil Yak??n Numaras??"
                                    id="veliphone"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                paddingRight={2}
                                paddingTop={3}
                                textAlign={"end"}
                              ></Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    id="adresbilgileri"
                    style={{ scrollMarginTop: "110px" }}
                  >
                    <Item>
                      <Box>
                        <Grid container>
                          <Grid item xs={12} paddingBottom={2}>
                            <Typography variant="h5" className={styles.h5}>
                              Adres Bilgileri
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container paddingBottom={2} paddingTop={2}>
                              <Grid item xs={12} sm={12} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    id="standard-multiline-static"
                                    disabled
                                    label="??kamet"
                                    multiline
                                    defaultValue={i.adres}
                                    variant="standard"
                                  />
                                </FormControl>
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  paddingRight={2}
                                  paddingTop={3}
                                  textAlign={"end"}
                                ></Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    id="hazirlikbilgileri"
                    style={{ scrollMarginTop: "110px" }}
                  >
                    <Item>
                      <Box>
                        <Grid container>
                          <Grid item xs={12} paddingBottom={2}>
                            <Typography variant="h5" className={styles.h5}>
                              Haz??rl??k Bilgileri
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container paddingBottom={2} paddingTop={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={i.hazirlikDurum}
                                    disabled
                                    label="Durum"
                                    id="prepstatus"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={i.haz??rl??kS??navPuan}
                                    disabled
                                    label="S??nav Puan??"
                                    id="preppoint"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid container paddingBottom={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={i.haz??rl??kDil}
                                    disabled
                                    label="Dil"
                                    id="preplanguage"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={i.haz??rl??kS??navSonu??}
                                    disabled
                                    label="Sonu?? Bilgisi"
                                    id="prepresult"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Item>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    id="girisbilgileri"
                    style={{ scrollMarginTop: "110px" }}
                  >
                    <Item>
                      <Box>
                        <Grid container>
                          <Grid item xs={12} paddingBottom={2}>
                            <Typography variant="h5" className={styles.h5}>
                              Giri?? Bilgileri
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container paddingBottom={2} paddingTop={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={i.tcNo}
                                    label="Kulan??c?? Ad??"
                                    disabled
                                    id="username"
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    type="password"
                                    label="??ifre"
                                    id="password"
                                    variant="standard"
                                    onChange={handlePassword}
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid container paddingBottom={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue=""
                                    label="Yeni ??ifre"
                                    type="password"
                                    id="newpassword"
                                    variant="standard"
                                    onChange={handleNewPassword}
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6} paddingRight={2}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue=""
                                    label="Yeni ??ifre (Tekrar)"
                                    type="password"
                                    id="newpasswordagain"
                                    onChange={handleAgainPassword}
                                    variant="standard"
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid container paddingBottom={2}>
                              <Grid item xs={12} sm={6} paddingRight={2}></Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                paddingRight={2}
                                paddingTop={3}
                                textAlign={"end"}
                              >
                                <Link href="/profile">
                                  <>
                                    <Button
                                      color="primary"
                                      onClick={() => {
                                        axios
                                          .post(
                                            "http://localhost:3001/changepassword",
                                            {
                                              oldpassword: oldpassword,
                                              newpassword: newpassword,
                                              againpassword: againpassword,
                                            },
                                            {
                                              headers: {
                                                token: AppConstant.token,
                                              },
                                            }
                                          )
                                          .then(function (response) {
                                            if (response.data.result == true) {
                                              handleClick();
                                              setAgainPassword("");
                                              setNewPassword("");
                                              setPassword("");
                                              connect();
                                              e.preventDefault();
                                            } else {
                                            }
                                          })
                                          .catch(function (error) {
                                            console.log(error);
                                          });
                                      }}
                                    >
                                      G??ncelle
                                    </Button>

                                    <Snackbar
                                      open={open}
                                      autoHideDuration={6000}
                                      onClose={handleClose}
                                    >
                                      <Alert
                                        onClose={handleClose}
                                        severity="success"
                                        sx={{ width: "100%" }}
                                      >
                                        Parolan??z ba??ar??yla de??i??tirilmi??tir!
                                      </Alert>
                                    </Snackbar>
                                  </>
                                </Link>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Item>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Layout>
      </>
    );
  } else {
    return <Portal></Portal>;
  }
}
