var cors = require("cors");

const express = require("express"),
  app = express(),
  port = 3001;

bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const privateKey = "ASIM";
const fs = require("fs");
const { response } = require("express");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function tokenControl(request, response, next) {
  jwt.verify(request.headers.token, privateKey, function (err, decoded) {
    if (decoded) next();
    else
      return response.json(
        {
          result: false,
          data: [],
          message: "Token geçersiz.",
        },
        401
      );
  });
}
app.get("/", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  // bar
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let data = [0, 0, 0, 0, 0, 0, 0];
      for (j in user.dersAlma) {
        const ders = user.dersAlma[j];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu && lecture[j].donem == 1) {
            data[lecture[j].dersGunu] += 1;
          }
        }
      }
      data = data.slice(1, 5);

      var values = Object.values(data);

      return res.json({
        result: true,

        data: [
          {
            alinanDers: user.alinanDers,
            notOrtalamasi: user.notOrtalamasi,
            bulunulanSinif: user.bulunulanSinif,
            donemOrtalamalari: user.donemOrtalamalari,
            gunlukDersSayisi: values,
          },
        ],
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.get("/coursepickdrop", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  let data = [];
  // bar
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let rawdata1 = fs.readFileSync("data/lecture.json");
      let lectures = JSON.parse(rawdata1);
      for (i in lectures) {
        let lecture = lectures[i];
        if (lecture.birimAdı == user.birimAdi && lecture.donem == 1) {
          let status = true;
          for (k in user.dersAlma) {
            let ders = user.dersAlma[k];
            if (lecture.dersKodu == ders.dersKodu) {
              status = false;
            }
          }
          if (status) data.push(lecture);
        }
      }
      return res.json({
        result: true,

        data: data,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.post("/coursepickdrop", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  let data = [];
  // bar
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      for (i in req.body.data) {
        let newlecture = req.body.data[i];
        console.log(newlecture);
        user.dersAlma.push(newlecture);
      }
      fs.writeFileSync("data/student.json", JSON.stringify(students));

      return res.json({
        result: true,

        data: [],
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.get("/application", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  // bar
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      for (appl in user.application) {
        user.application[appl].ogrenciNo = user.ogrenciNo;
      }
      user.application.sort((a, b) => {
        return new Date(a.tarih) - new Date(b.tarih); // descending
      });
      return res.json({
        result: true,

        data: user.application,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.post("/application", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = dd + "." + mm + "." + yyyy;
  // bar
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      user.application.push({
        tur: req.body.tur,
        tarih: today,
        durum: "Başvuruldu",
      });
      fs.writeFileSync("data/student.json", JSON.stringify(students));
      return res.json({
        result: true,

        data: [],
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.get("/messages", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  var responseMessage = [];
  let rawdata = fs.readFileSync("data/messages.json");
  let messages = JSON.parse(rawdata);

  var decoded = jwt.verify(req.headers.token, privateKey);
  // user birimini çekiyoruz
  let studendata = fs.readFileSync("data/student.json");
  let students = JSON.parse(studendata);
  for (s in students) {
    let user = students[s];
    if (user.tcNo == decoded.tcNo) {
      for (index in messages) {
        let status = true;
        var message = messages[index];
        if (message.birimAdı == undefined) {
          if (user.tcNo == message.ogrenciTc) {
            for (var i = 0; i < responseMessage.length; i++) {
              if (responseMessage[i].ogretmenTc == message.ogretmenTc) {
                status = false;
                if (
                  new Date(message.tarih) > new Date(responseMessage[i].tarih)
                ) {
                  let lecturerdata = fs.readFileSync("data/lecturer.json");
                  let lecturers = JSON.parse(lecturerdata);
                  for (lecturer in lecturers) {
                    if (lecturers[lecturer].ogretmenTc == message.ogretmenTc) {
                      message.ogretmenProfilImg =
                        lecturers[lecturer].profileImage;
                      message.ogretmenAdi = lecturers[lecturer].adi;
                      responseMessage[i] = message;
                      break;
                    }
                  }
                }
              }
            }
            if (status) {
              let lecturerdata = fs.readFileSync("data/lecturer.json");
              let lecturers = JSON.parse(lecturerdata);
              for (lecturer in lecturers) {
                if (lecturers[lecturer].ogretmenTc == message.ogretmenTc) {
                  message.ogretmenProfilImg = lecturers[lecturer].profileImage;
                  message.ogretmenAdi = lecturers[lecturer].adi;
                  responseMessage.push(message);
                  break;
                }
              }
            }
          }
        } else {
          if (message.birimAdı == user.birimAdı) {
            message.ogrenciTc = user.tcNo;
            message.alici = user.tcNo;
            for (var i = 0; i < responseMessage.length; i++) {
              if (responseMessage[i].ogretmenTc == message.ogretmenTc) {
                status = false;
                if (
                  new Date(message.tarih) > new Date(responseMessage[i].tarih)
                ) {
                  let lecturerdata = fs.readFileSync("data/lecturer.json");
                  let lecturers = JSON.parse(lecturerdata);
                  for (lecturer in lecturers) {
                    if (lecturers[lecturer].ogretmenTc == message.ogretmenTc) {
                      message.ogretmenProfilImg =
                        lecturers[lecturer].profileImage;
                      message.ogretmenAdi = lecturers[lecturer].adi;
                      responseMessage[i] = message;
                      break;
                    }
                  }
                }
              }
            }
            if (status) {
              let lecturerdata = fs.readFileSync("data/lecturer.json");
              let lecturers = JSON.parse(lecturerdata);
              for (lecturer in lecturers) {
                if (lecturers[lecturer].ogretmenTc == message.ogretmenTc) {
                  message.ogretmenProfilImg = lecturers[lecturer].profileImage;
                  message.ogretmenAdi = lecturers[lecturer].adi;
                  responseMessage.push(message);
                  break;
                }
              }
            }
          }
        }
      }
      responseMessage.sort((a, b) => {
        return new Date(b.tarih) - new Date(a.tarih); // descending
      });
      return res.json({
        result: true,

        data: responseMessage,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.get("/messages/:id", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let responseMessage = [];
  let rawdata = fs.readFileSync("data/messages.json");
  let messages = JSON.parse(rawdata);
  const id = req.params.id;

  var decoded = jwt.verify(req.headers.token, privateKey);
  // user birimini çekiyoruz
  let studendata = fs.readFileSync("data/student.json");
  let students = JSON.parse(studendata);
  for (s in students) {
    let user = students[s];
    if (user.tcNo == decoded.tcNo) {
      for (index in messages) {
        var message = messages[index];
        if (message.birimAdı == undefined) {
          if (user.tcNo == message.ogrenciTc && message.ogretmenTc == id) {
            responseMessage.push(message);
          }
        } else {
          if (message.birimAdı == user.birimAdı && message.ogretmenTc == id) {
            message.ogrenciTc = user.tcNo;
            message.alici = user.tcNo;
            responseMessage.push(message);
          }
        }
      }
      //sıralı mesajlar
      responseMessage.sort((a, b) => {
        return new Date(a.tarih) - new Date(b.tarih); // descending
      });
      return res.json({
        result: true,

        data: responseMessage,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.post("/messages/:id", tokenControl, (req, res) => {
  const id = req.params.id;
  var data = req.body;
  var decoded = jwt.verify(req.headers.token, privateKey);
  data.ogrenciTc = decoded.tcNo;
  data.gonderici = decoded.tcNo;
  data.alici = id;
  data.ogretmenTc = id;
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  data.tarih = datetime;
  let rawdata = fs.readFileSync("data/messages.json");
  let messages = JSON.parse(rawdata);
  messages.push(data);

  fs.writeFileSync("data/messages.json", JSON.stringify(messages));

  return res.json({
    result: true,

    data: [],
    message: "Anasayfa açıldı.",
  });
});

app.get("/grade", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;
      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu) {
            if (lecture[j].donem == 6) {
              responsedata.push(data[j]);
              responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
              responsedata[responseindex].dersAdi = lecture[j].dersAdi;
              responseindex++;
            }
          }
        }
      }

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.get("/examobjection", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;
      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (
            lecture[j].dersKodu == ders.dersKodu &&
            lecture[j].donem == user.bulunulanDonem
          ) {
            responsedata.push(data[j]);
            responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
            responsedata[responseindex].dersAdi = lecture[j].dersAdi;
            responseindex++;
          }
        }
      }

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.post("/examobjection", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/objection.json");
  let objs = JSON.parse(rawdata);

  objs.push(req.body);
  fs.writeFileSync("data/objection.json", JSON.stringify(objs));
  return res.json({
    result: true,
    data: [],
    message: "Bilgi eklendi.",
  });
});
app.get("/documents", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let student = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in student) {
    user = student[index];
    if (decoded.tcNo == user.tcNo) {
      let responsedata = [];
      let responseindex = 0;
      let rawdata1 = fs.readFileSync("data/lecture.json");
      let lecture = JSON.parse(rawdata1);
      for (j in lecture) {
        for (k in user.dersAlma) {
          if (
            lecture[j].dersKodu == user.dersAlma[k].dersKodu &&
            lecture[j].donem == user.bulunulanDonem
          ) {
            responsedata.push(lecture[j]);
            responseindex++;
          }
        }
      }

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});
app.get("/profile", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let student = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in student) {
    user = student[index];
    if (decoded.tcNo == user.tcNo) {
      let responsedata = [];
      responsedata.push(user);

      return res.json({
        result: true,
        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.post("/forgotpassword", (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let student = JSON.parse(rawdata);
  for (index in student) {
    user = student[index];
    if (req.body.tcNo == user.tcNo) {
      let responsedata = [];
      responsedata.push(user.password);

      return res.json({
        result: true,
        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.get("/courseschedule", tokenControl, (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let student = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in student) {
    user = student[index];
    if (decoded.tcNo == user.tcNo) {
      let responsedata = [];
      let responseindex = 0;
      let rawdata1 = fs.readFileSync("data/lecture.json");
      let lecture = JSON.parse(rawdata1);
      for (j in lecture) {
        for (k in user.dersAlma) {
          if (
            lecture[j].dersKodu == user.dersAlma[k].dersKodu &&
            lecture[j].donem == user.bulunulanDonem
          ) {
            responsedata.push(lecture[j]);
            responseindex++;
          }
        }
      }

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.get("/documentrequest", tokenControl, (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let student = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in student) {
    user = student[index];
    if (decoded.tcNo == user.tcNo) {
      for (k in user.belgeler) {
        user.belgeler[k].ogrenciNo = user.ogrenciNo;
      }
      user.belgeler.sort((a, b) => {
        return new Date(b.talepTarihi) - new Date(a.talepTarihi); // descending
      });
      return res.json({
        result: true,

        data: user.belgeler,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.post("/documentrequest", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = dd + "." + mm + "." + yyyy;
  // bar
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      user.belgeler.push({
        belgeTuru: req.body.tur,
        talepTarihi: today,
        url: "https://mag.wcoomd.org/uploads/2018/05/blank.pdf",
      });
      fs.writeFileSync("data/student.json", JSON.stringify(students));
      return res.json({
        result: true,

        data: [],
        message: "Anasayfa açıldı.",
      });
    }
  }
});

app.get("/gradecard", tokenControl, (req, res) => {
  //console.log(req.headers);
  //console.log(req.body);
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;

      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu) {
            responsedata.push(data[j]);
            responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
            responsedata[responseindex].t = lecture[j].t;
            responsedata[responseindex].dersAdi = lecture[j].dersAdi;
            responsedata[responseindex].donem = lecture[j].donem;
            responsedata[responseindex].tur = lecture[j].tur;
            responseindex++;
          }
        }
      }
      responsedata.push({ agno: user.donemOrtalamalari });

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgi bulunamadı.",
  });
});

app.get("/lectureList", tokenControl, (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let data = user.dersAlma;
      let responsedata = [];
      let responseindex = 0;
      for (k in user.dersAlma) {
        const ders = user.dersAlma[k];
        let rawdata1 = fs.readFileSync("data/lecture.json");
        let lecture = JSON.parse(rawdata1);
        for (j in lecture) {
          if (lecture[j].dersKodu == ders.dersKodu) {
            if (lecture[j].donem == user.bulunulanDonem) {
              responsedata.push(data[j]);
              responsedata[responseindex].toplamKredi = lecture[j].toplamKredi;
              responsedata[responseindex].dersAdi = lecture[j].dersAdi;
              responsedata[responseindex].p = lecture[j].p;
              responsedata[responseindex].t = lecture[j].t;
              responsedata[responseindex].l = lecture[j].l;
              responsedata[responseindex].donem = lecture[j].donem;
              responseindex++;
            }
          }
        }
      }
      console.log(data);

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }
});

app.get("/syllabus", tokenControl, (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  var decoded = jwt.verify(req.headers.token, privateKey);
  for (index in students) {
    user = students[index];
    if (decoded.tcNo == user.tcNo) {
      let responsedata = [];
      let donem1 = [];
      let donem2 = [];
      let donem3 = [];
      let donem4 = [];
      let donem5 = [];
      let donem6 = [];
      let donem7 = [];
      let donem8 = [];
      let responseindex = 0;
      let rawdata1 = fs.readFileSync("data/lecture.json");
      let lecture = JSON.parse(rawdata1);
      for (j in lecture) {
        if (lecture[j].birimAdı == user.birimAdı) {
          if (lecture[j].donem == 1) donem1.push(lecture[j]);
          if (lecture[j].donem == 2) donem2.push(lecture[j]);
          if (lecture[j].donem == 3) donem3.push(lecture[j]);
          if (lecture[j].donem == 4) donem4.push(lecture[j]);
          if (lecture[j].donem == 5) donem5.push(lecture[j]);
          if (lecture[j].donem == 6) donem6.push(lecture[j]);
          if (lecture[j].donem == 7) donem7.push(lecture[j]);
          if (lecture[j].donem == 8) donem8.push(lecture[j]);
          responseindex++;
        }
        responsedata.push(donem1);
        responsedata.push(donem2);
        responsedata.push(donem3);
        responsedata.push(donem4);
        responsedata.push(donem5);
        responsedata.push(donem6);
        responsedata.push(donem7);
        responsedata.push(donem8);
      }

      return res.json({
        result: true,

        data: responsedata,
        message: "Anasayfa açıldı.",
      });
    }
  }
});
app.post("/login", (req, res) => {
  let rawdata = fs.readFileSync("data/student.json");
  let students = JSON.parse(rawdata);
  for (index in students) {
    user = students[index];
    if (req.body.tcNo == user.tcNo && req.body.password == user.password) {
      var token = jwt.sign({ tcNo: user.tcNo }, privateKey);
      return res.json({
        result: true,
        data: [
          {
            token: token,
            isim: user.isim + " " + user.soyisim,
          },
        ],
        message: "Giriş yapıldı.",
      });
    }
  }

  return res.json({
    result: false,
    data: [],
    message: "Bilgiler yanlış.",
  });
});
