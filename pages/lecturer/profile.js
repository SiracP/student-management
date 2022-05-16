//TODO : TABLE TASARIMI

import React, { Component } from "react";
import Image from "next/image";
import Layout from "../../components/Layout/LayoutLecturer";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import TranslateIcon from "@mui/icons-material/Translate";
import WorkIcon from "@mui/icons-material/Work";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Link from "next/link";
import FormHelperText from "@mui/material/FormHelperText";
import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import styles from "../../styles/Profile.module.css";
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

class Profile extends Component {
  constructor(props, children) {
    super(props);
    this.props = props;
    this.children = children;
    this.router = this.props.router;
  }
  componentDidMount() {
    if (this.props.isLogin == false) {
      this.router.push("/loginportal/");
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Bilgilerim - İÜC ÖBS</title>
        </Head>
        <Layout
          appBar={{
            links: { "Ana Sayfa": "/lecturer", Bilgilerim: "/lecturer/profile" },
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
                            primary="Özlük Bilgileri"
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
                            primary="İletişim Bilgileri"
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
                    <Link href="#girisbilgileri" passHref>
                      <Grid className={styles.itemPanel}>
                        <Grid className={styles.itemProfile}>
                          <LockOpenIcon></LockOpenIcon>
                        </Grid>
                        <Grid className={styles.itemBottom}>
                          <ListItemText
                            primary="Giriş Bilgileri"
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
              <Grid container>
                <Grid item xs={12}>
                  <Item>
                    <Box style={{ textAlign: "center", alignItems: "center" }}>
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
                            src="https://publons.com/media/thumbs/academic/photos/c4635c71-e215-476d-bf38-03b1996dbf9a.png.200x200_q95_crop_detail_upscale.png"
                            sx={{ width: "15%", height: "auto" }}
                          ></Avatar>
                        </Grid>
                        <Grid item xs={12} paddingTop={1}>
                          <Typography variant="h5" className={styles.h5}>
                            Özgür Can Turna
                          </Typography>
                          <Typography
                            variant="span"
                            className={styles.span}
                          >
                            Mühendislik Fakültesi
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
                            Özlük Bilgileri
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container paddingBottom={2} paddingTop={2}>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Özgür Can"
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
                                  value="Turna"
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
                                  value="Anne Adı"
                                  label="Anne Adı"
                                  disabled
                                  id="mothername"
                                  variant="standard"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} paddingRight={2}>
                              <FormControl fullWidth>
                                <TextField
                                  value="Baba Adı"
                                  label="Baba Adı"
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
                                  value="Türk"
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
                                  value="Kimlik"
                                  label="Kimlik Numarası"
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
                                  value="Erkek"
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
                                  value="Doğum Tarihi"
                                  label="Doğum Tarihi"
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
                                  value="Medeni Hal"
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
                                  value="Doğum Yeri"
                                  label="Doğum Yeri"
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
                          İletişim Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="5397129136"
                                label="Cep Telefonu"
                                id="cellphone"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="Tel No"
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
                                value="ozgurcan.turna@iuc.edu.tr"
                                label="Kurumsal E-posta"
                                id="emailofficial"
                                disabled
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="ozgurcan.turna@iuc.edu.tr"
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
                                defaultValue="Tel No"
                                label="Birincil Yakın Numarası"
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
                          >
                            <Button color="primary">Güncelle</Button>
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
                                label="İkamet"
                                multiline
                                defaultValue="Adres"
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
                            >
                              <Button color="primary">Güncelle</Button>
                            </Grid>
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
                          Giriş Bilgileri
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container paddingBottom={2} paddingTop={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                value="Kimlik"
                                label="Kulanıcı Adı"
                                disabled
                                id="username"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue="Şifre"
                                label="Şifre"
                                id="password"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container paddingBottom={2}>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue=""
                                label="Yeni Şifre"
                                id="newpassword"
                                variant="standard"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} paddingRight={2}>
                            <FormControl fullWidth>
                              <TextField
                                defaultValue=""
                                label="Yeni Şifre (Tekrar)"
                                id="newpasswordagain"
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
                            <Button color="primary">Güncelle</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Layout>
      </>
    );
  }
}

export default Profile;
