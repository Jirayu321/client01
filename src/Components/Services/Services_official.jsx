import React from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";

import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Services.module.css";

const Services_official = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;

  const [type, setType] = React.useState(1);
  const [typeDoc, setTypeDoc] = React.useState(1);
  const { innerWidth: width } = window;

  const handle = (x) => {
    console.log("x:", x);
    switch (x) {
      case 1:
        setType(1);
        break;
      case 2:
        setType(2);
        break;
      case 3:
        setType(3);
        break;
      case 4:
        setType(4);
        break;
      case 5:
        setType(5);
        break;
      case 6:
        setType(6);
        break;
      default:
        setType(1);
    }
  };

  const handletypeDoc = (x) => {
    console.log("x:", x);
    switch (x) {
      case 1:
        setTypeDoc(1);
        break;
      case 2:
        setTypeDoc(2);
        break;
      case 3:
        setTypeDoc(3);
        break;
      case 4:
        setTypeDoc(4);
        break;
      default:
        setTypeDoc(1);
    }
  };

  return (
    <>
      <header className={styles.App_header}>
      {Doc === undefined ? (
          <Navbars navigate={navigate} languages="English" accept={false} />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" accept={true} />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" accept={true} />
        ) : (
          <Navbars navigate={navigate} languages="English" accept={true} />
        )}
      </header>
      {width > 768 ? (
        <>
          <div className={styles.fram1}>
            <div className={styles.boxBlue_overviwe}>
              <p className={styles.h_text1}>Translation Hero Services</p>
              <p className={styles.h_text2}>
                New options to help you translate the language you want.
              </p>
              <div className={styles.set_fram1_button}>
                {type === 1 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_1} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>เอกสารราชการทั่วไป</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_1} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>เอกสารราชการทั่วไป</p>
                  </button>
                )}

                {type === 2 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_2} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองคำแปลถูกต้อง จากศูนย์แปล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_2} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองคำแปลถูกต้อง จากศูนย์แปล</p>
                  </button>
                )}

                {type === 3 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(3)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_3} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองเอกสารจาก กรมการกงสุล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(3)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_3} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองเอกสารจาก กรมการกงสุล</p>
                  </button>
                )}

                {type === 4 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(4)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_4} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองเอกสาร จากสถานทูต</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(4)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_4} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองเอกสาร จากสถานทูต</p>
                  </button>
                )}

                {type === 5 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(5)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_5} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>บริการรับรองลายมือชื่อ โดยทนายความ</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(5)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_5} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>บริการรับรองลายมือชื่อ โดยทนายความ</p>
                  </button>
                )}
                {type === 6 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(6)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_6} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>บริการยื่นขอหนังสือ รับรองความประพฤติ</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(6)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_6} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>บริการยื่นขอหนังสือ รับรองความประพฤติ</p>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={styles.fram2}>
            {type === 1 ? (
              <p className={styles.textHeading2_overviwe}>เอกสารราชการทั่วไป</p>
            ) : type === 2 ? (
              <>
                <p className={styles.textHeading2_overviwe}>
                  การรับรองคำแปลถูกต้อง จากศูนย์แปล
                </p>
                <p className={styles.textHeading2_overviwe2}>
                  เอกสารฉบับแปลที่จะต้องนำไปใช้อ้างอิงอย่างเป็นทางการจะต้องมีการรับรองคำแปลเสียก่อน
                  ทั้งนี้ ในการรับรองคำแปลนั้น มีหลากหลายวิธี
                  ขึ้นอยู่กับวัตถุประสงค์การนำเอกสารไปใช้งาน
                </p>
              </>
            ) : type === 3 ? (
              <div className={styles.textHeading2_overviwe}>
                <p className={styles.textHeading2_overviwe4}>
                  บริการรับรองเอกสารกรมการกงสุล
                </p>
                <p className={styles.textHeading2_overviwe4}>
                  กระทรวงการต่างประเทศ
                </p>
                <p className={styles.textHeading2_overviwe3}>
                  เอกสารสำคัญที่จะนำไปใช้อ้างอิงในต่างประเทศจะต้องผ่านการับรองจากกระทรวงการต่างประเทศเสมอจึงจะได้รับการ
                  ยอมรับว่าเป็นเอกสารที่ชอบด้วยกฎหมาย
                  ในขณะที่เอกสารที่ทำในต่างประเทศหรือออกให้โดยทางการต่างประเทศ
                  ต้องแปลเป็นภาษาไทยแล้วนำมาให้กระทรวงการต่างประเทศรับรองทางการไทยจึงจะยอมรับ
                  การรับรองเอกสารตามระเบียบกระทรวงฯปี พ.ศ.2539 มี 3 ประเภท คือ
                  การรับรอง คำแปลภาษาไทยและภาษาอังกฤษการับรองสำเนาถูกต้อง
                  และการรับรองลายมือชื่อ
                </p>
              </div>
            ) : type === 4 ? (
              <p className={styles.textHeading2_overviwe4}>
                บริการรับรองเอกสารกับสถานทูตประเทศต่างๆ
              </p>
            ) : type === 5 ? (
              <>
                <p className={styles.textHeading2_overviwe}>
                  บริการรับรองลายมือชื่อ โดยทนายความ
                </p>
                <p className={styles.textHeading2_overviwe3_5}>
                  เอกสารบางชนิดต้องการการรับรองจากทนายความ
                  มีลักษณะคล้ายกับการรับรองโนตารี่ พับลิค (Notary Public)
                  ของต่างประเทศ
                  การรับรองเอกสารในลักษณะนี้จะต้องดำเนินการโดยทนายความที่ได้รับอนุญาตจากสภาทนายความ
                  เรียกว่า ทนายรับรองเอกสาร ทนายความรับรองลายมือชื่อ หรือ
                  Notarial Services Attorney เพื่อให้สามารถนำเอกสารดังกล่าว
                  ไปใช้ในต่างประเทศได้ โดยทั่วไปจะเป็นการรับรองลายมือชื่อบุคคล
                  รับรองลายมือชื่อกรรมการรับรองลายมือชื่อพยาน รับรองบุคคล
                  รับรองเอกสารบริษัท รับรองสำเนา รับรองคำแปลถูกต้อง
                  รับรองเอกสารโนตารี เป็นต้น
                </p>
              </>
            ) : (
              <>
                <div className={styles.textHeading2_overviwe}>
                  <p>บริการขอหนังสือรับรองความประพฤติ</p>
                  <p>(Police Clearance Certificate)</p>
                </div>

                <p className={styles.textHeading2_overviwe3}>
                  ให้บริการรับปรึกษาการยื่นขอหนังสือรับรองประวัติอาชญากรรม
                  หรือหนังสือรับรองความประพฤติ หรือหนังสือรับรองตำรวจ (Police
                  Clearance Certificate) จากสำนักงานตำรวจแห่งชาติ
                  เพื่อประกอบการทำธุรกรรมต่างๆ เช่น การขอวีซ่า (Visa
                  Application) ต่อวีซ่า (Visa Extension) สมัครงาน สมัครเรียน
                  สมรส ขอมีถิ่นที่อยู่ ขอรับบุตรบุญธรรม เป็นต้น
                </p>
              </>
            )}
          </div>
          {type === 1 ? (
            <div className={styles.fram3}>
              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  {typeDoc === 1 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(1)}
                    >
                      เอกสารส่วนบุคคล เอกสารราชการ
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(1)}
                    >
                      เอกสารส่วนบุคคล เอกสารราชการ
                    </button>
                  )}
                  {typeDoc === 2 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(2)}
                    >
                      เอกสารทางบัญชี-ธุรกิจ
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(2)}
                    >
                      เอกสารทางบัญชี-ธุรกิจ
                    </button>
                  )}
                  {typeDoc === 3 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(3)}
                    >
                      เอกสารวิชาการทุกสาขาเฉพาะทาง
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(3)}
                    >
                      เอกสารวิชาการทุกสาขาเฉพาะทาง
                    </button>
                  )}
                  {typeDoc === 4 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(4)}
                    >
                      เอกสารทางกฎหมาย
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(4)}
                    >
                      เอกสารทางกฎหมาย
                    </button>
                  )}
                </div>

                <div className={styles.Indetailefram3}>
                  {typeDoc === 1 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>บัตรประจำตัวประชาชน</p>
                          </li>
                          <li>
                            <p>ทะเบียนบ้าน</p>
                          </li>
                          <li>
                            <p>สูติบัตร</p>
                          </li>
                          <li>
                            <p>หนังสือสำคัญการเปลี่ยนชื่อ-สกุล</p>
                          </li>
                          <li>
                            <p>หนังสือสำคัญการจัดตั้งนามสกุล</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองการใช้คำนำหน้านาม</p>
                          </li>
                          <li>
                            <p>แบบรับรองรายการทะเบียนราษฎร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองโสด</p>
                          </li>
                          <li>
                            <p>ทะเบียนสมรส</p>
                          </li>
                          <li>
                            <p>ทะเบียนหย่า</p>
                          </li>
                          <li>
                            <p>ใบสำคัญการหย่า</p>
                          </li>
                          <li>
                            <p>ใบประกาศนียบัตร</p>
                          </li>
                          <li>
                            <p>ใบสำคัญการสมรส</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>หนังสือรับรองการอุปการะบุตร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองสถานที่เกิด</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองบุตรบุญธรรม</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองการปกครองบุตร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองความประพฤติ</p>
                          </li>
                          <li>
                            <p>มรณบัตร</p>
                          </li>
                          <li>
                            <p>โฉนดที่ดิน</p>
                          </li>
                          <li>
                            <p>ใบอนุญาตขับขี่</p>
                          </li>
                          <li>
                            <p>เอกสารทางการศึกษา</p>
                          </li>
                          <li>
                            <p>ใบแจ้งความ</p>
                          </li>
                          <li>
                            <p>หนังสือเดินทาง</p>
                          </li>
                          <li>
                            <p>ใบรับรองแพทย์</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : typeDoc === 2 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>เอกสารทางบัญชี</p>
                          </li>
                          <li>
                            <p>ใบสำคัญหักภาษี ณ ที่จ่าย</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองบริษัท</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองนิติบุคคล</p>
                          </li>
                          <li>
                            <p>ใบเสนอราคา</p>
                          </li>
                          <li>
                            <p>คำบรรยาย/แปลSub-titles</p>
                          </li>
                          <li>
                            <p>คู่มือผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>โบรชัวร์</p>
                          </li>
                          <li>
                            <p>เว็บไซต์</p>
                          </li>
                          <li>
                            <p>ใบแจ้งค่าบริการ</p>
                          </li>
                          <li>
                            <p>สิทธิบัตร</p>
                          </li>
                          <li>
                            <p>รายงานการประชุม</p>
                          </li>
                          <li>
                            <p>งานด้านการตลาด</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>งบดุล</p>
                          </li>
                          <li>
                            <p>ทะเบียนพาณิชย์</p>
                          </li>
                          <li>
                            <p>หนังสือบริคณห์สนธิ</p>
                          </li>
                          <li>
                            <p>ทะเบียนการค้า</p>
                          </li>
                          <li>
                            <p>ใบแจ้งหนี้</p>
                          </li>
                          <li>
                            <p>ใบปลิว</p>
                          </li>
                          <li>
                            <p>เอกสารรับรองสำหรับองค์กรอาหารและยา(อ.ย)</p>
                          </li>
                          <li>
                            <p>ฉลากผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>คลิปวิดีโอสาธิตผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>ใบเสร็จรับเงิน</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองลิขสิทธิ์</p>
                          </li>
                          <li>
                            <p>สัญญาจ้างงาน</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : typeDoc === 3 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>บทคัดย่อ</p>
                          </li>
                          <li>
                            <p>วิทยานิพนธ์</p>
                          </li>
                          <li>
                            <p>งานทางศาสนา</p>
                          </li>
                          <li>
                            <p>งานทางดนตรี</p>
                          </li>
                          <li>
                            <p>หนังสือ บทกวี</p>
                          </li>
                          <li>
                            <p>งานทางวิศวกรรม</p>
                          </li>
                          <li>
                            <p>งานทางกฏหมาย</p>
                          </li>
                          <li>
                            <p>งานทางการศึกษา</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>บทความ</p>
                          </li>
                          <li>
                            <p>งานวิจัย</p>
                          </li>
                          <li>
                            <p>งานทางการแพทย์</p>
                          </li>
                          <li>
                            <p>งานทางบันเทิง</p>
                          </li>
                          <li>
                            <p>งานทางวิทยาศาสตร์</p>
                          </li>
                          <li>
                            <p>งานทางเกษตรกรรม</p>
                          </li>
                          <li>
                            <p>งานทางธุรกิจ-การเงิน</p>
                          </li>
                          <li>
                            <p>งานทางศิลปะ-วัฒนธรรม</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <ul>
                          <li>
                            <p>สัญญา</p>
                          </li>
                          <li>
                            <p>สัญญาเช่า</p>
                          </li>
                          <li>
                            <p>สัญญาทางธุรกิจ</p>
                          </li>
                          <li>
                            <p>หนังสือค้ำประกัน</p>
                          </li>
                          <li>
                            <p>ใบแจ้งความ และอื่นๆ</p>
                          </li>
                          <li>
                            <p>สัญญาซื้อขาย</p>
                          </li>
                          <li>
                            <p>สัญญาจ้างงาน</p>
                          </li>
                          <li>
                            <p>หนังสือมอบอำนาจ</p>
                          </li>
                          <li>
                            <p>คำสั่งศาล/คำร้อง/คำฟ้อง</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.Indetailefram3_2} />
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : type === 2 ? (
            <div className={styles.fram3_2}>
              <div className={styles.detailefram3_2}>
                <div className={styles.Boxfram3_2}>
                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลถูกต้องจากทางศูนย์แปล
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      เพื่อเอาไปขอวีซ่าเข้าประเทศต่างๆ
                      หรือเพื่อประกอบหลักฐานการทำธุรกรรมในต่างประเทศ
                      ที่ไม่ต้องการให้รับรองคำแปลอย่างเป็นทางการมากนัก
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลถูกต้องจากนักแปลที่ขึ้นทะเบียน
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      โดยมากมักเป็นการรับรองเพื่อนำเอกสารไปใช้ในการยื่นประมูล
                      หรือประกวดราคา (Bid) กับหน่วยงานราชการไทย
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_3}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยนักแปลที่มีคุณสมบัติ (Qualified translator)
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      เพื่อเอาไปขอวีซ่าเข้าประเทศต่างๆ
                      หรือเพื่อประกอบหลักฐานกากรณีนี้มักเป็นระเบียบของหน่วยงานราชการไทยที่จะต้องให้นักแปล
                      ประเภทนี้รับรองเอกสารโดยมากมักเป็นผู้แปลที่จบทางการด้านภาษามาโดยตรงหรืออาจารย์มหาวิทยาลัย
                      หรือผู้ที่จบการศึกษา มาจากต่างประเทศ
                      เป็นต้นรทำธุรกรรมในต่างประเทศที่ไม่ต้องการให้รับรองคำแปลอย่างเป็นทางการมากนัก
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยนักแปลขึ้นทะเบียนหรือนักแปลสาบานตนกับสถานทูต
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      สถานทูตของบางประเทศจะกำหนดให้นักแปลที่ขึ้นทะเบียนกับสถานทูตแล้วเท่านั้นเป็นผู้รับรองคำแปล
                      โดยมากมักเป็นสถานทูตของประเทศแถบยุโรป เช่น สถานทูตฝรั่งเศส
                      สถานทูตเยอรมัน สถานทูตออสเตรีย เป็นต้น
                    </p>
                  </div>
                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยทนายความรับรองเอกสาร
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Notarial Services Attorney
                      ซึ่งมีลักษณะคล้ายกับการรับรองโนตารีในต่างประเทศ
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยกรมการกงสุล กระทรวงการต่างประเทศ
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Legalization
                      เป็นการรรับรองคำแปลเอกสารจากหน่วยงานราชการไทย
                      ที่จะต้องนำไปเอกสารไปใช้อ้างอิงในต่างประเทศ
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยทนายความรับรองเอกสาร
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Notarial Services Attorney
                      ซึ่งมีลักษณะคล้ายกับการรับรองโนตารีในต่างประเทศ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : type === 4 ? (
            <div className={styles.fram3_4}>
              <div className={styles.detailefram3_4}>
                <div className={styles.Boxfram3_4}>
                  <p className={styles.HBoxfram3_4_1}>
                    เอกสารที่ออกให้จากต่างประเทศต้องการนำมาใช้ในประเทศไทย
                  </p>
                  <p className={styles.HBoxfram3_4_2}>
                    เช่น สูติบัตร ใบสำคัญการสมรส สมรสทะเบียนสมรส ใบสำคัญการหย่า
                    ทะเบียนหย่า ฯลฯ หากท่านจะนำมาใช้ในประเทศไทย
                    เอกสารนั้นจะต้องผ่านการรับรองจากจากสถานทูตของประเทศนั้นๆ
                    ในประเทศไทยก่อน หรือ กงสุลไทยในประเทศที่ออกเอกสารนั้น
                    จึงจะสามารถนำมาแปลเป็นภาษาไทยและนำไปรับรองที่กรมการกงสุล
                    กระทรวงการต่างประเทศได้ เอกสารที่ผ่านการรับรองนิติกรณ์
                    (Legalization) จากกรมการกงสุลแล้ว
                    ถือเป็นเอกสารที่ชอบด้วยกฎหมายสามารถนำไป ยื่นขอจดทะเบียน
                    และทำธุรกรรมต่างๆ ที่สำนักงานเขตหรืออำเภอได้
                  </p>
                  <div className={styles.ImgBox3_4_1} />

                  <p className={styles.HBoxfram3_4_1}>
                    เอกสารที่ออกให้จากประเทศไทย ต้องการนำไปใช้ที่ต่างประเทศ
                  </p>
                  <p className={styles.HBoxfram3_4_2}>
                    เอกสารที่ออกโดยราชการ เช่น สูติบัตร ทะเบียนบ้าน
                    หนังสือรับรองโสด ใบสำคัญการสมรส ใบสำคัญการหย่า ฯลฯ
                    นำเอกสารที่ต้องการใช้ ทำการแปล
                    พร้อมมีลายเซ็นกำกับคำแปลถูกต้องจากผู้เชี่ยวชาญ
                    แล้วจึงนำไปรับรองนิติกรณ์ (Legalization)ที่กรมการกงสุล
                    กระทรวงการต่างประเทศในไทย
                    เมื่อได้รับการรับรองจากกระทรวงฯแล้วจึงจะสามารถนำ
                    เอกสารนั้นๆไปใช้ในต่างประเทศได้
                    เว้นแต่ในบางประเทศที่จะต้องนำเอกสารไปรับรองเพิ่มเติมที่สถานทูตของประเทศนั้นๆ
                    ที่ตั้งอยู่ในประเทศไทย (เช่น ประเทศจีน เช็ค ฟินแลนด์ เยอรมนี
                    อิตาลี เป็นต้น) จึงจะสามารถนำเอกสารไปใช้ได้ตามกฎหมาย
                  </p>
                  <div className={styles.ImgBox3_4_2} />
                </div>
              </div>
            </div>
          ) : type === 5 ? (
            <div className={styles.fram3_5}>
              <div className={styles.detailefram3_5}>
                <div className={styles.con_detailefram3_5}>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1} />
                    <p>รับรองเอกสารเพื่อใช้ในต่างประเทศ</p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_2} />
                    <p>
                      รับรองเอกสาร รับรองใบสมัคร เพื่อเรียนต่อต่างประเทศ
                      (Affidavit of support /Sponsor Notarization)
                    </p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_3} />
                    <p>รับรองสำเนาเอกสาร (Certified true copy)</p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_4} />
                    <p>รับรองสถานะการเงิน (Statement notarization)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_5} />
                    <p>รับรองคำแปลเอกสาร (Certified correct translation)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_6} />
                    <p>
                      รับรองลายมือชื่อ บุคคล กรรมการนิติบุคคล บริษัทจำกัด
                      บริษัทมหาช (Signature notarization and Legalization)
                    </p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_7} />
                    <p>รับรองข้อเท็จจริง (Marine protest notary public)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_8} />
                    <p>รับรองความมีอยู่จริงของเอกสาร (Existence of Document)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_9} />
                    <p>
                      รับรองการทำสัญญาระหว่างเอกชน (Contract agreement notary
                      public)
                    </p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_10} />
                    <p>รับรองคำสาบาน (Applicant declaration)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_11} />
                    <p>รับรองคำให้การ (Declaration notary public)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_12} />
                    <p>
                      รับรองหนังสืออนุญาตจากผู้ปกครอง (Letter of authorization
                      for travel)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : type === 3 ? (
            <>
              <div className={styles.fram3_3}>
                <div className={styles.detailefram3_3}>
                  <div className={styles.Boxfram3_3}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>การรับรองเอกสาร</p>
                      <p className={styles.HBoxdetaile3_3}>
                        การรับรองคำแปล กรมการกงสุลไทย
                        จะรับรองเฉพาะคำแปลของเอกสารภาษาไทยเป็นภาษาอังกฤษ/หรือภาษาอังกฤษเป็น
                        ภาษาไทยเท่านั้น สำหรับภาษาต่างประเทศอื่น ๆ เช่น
                        ภาษาเยอรมัน ฝรั่งเศส สถานเอกอัครราชทูตฯ
                        เจ้าของภาษาจะเป็น ผู้แปลภาษาอังกฤษหรือภาษาไทย
                        และรับรองคำแปลนั้น ทั้งนี้ กระทรวงฯ
                        จะรับรองคำแปลเฉพาะที่แปลจากเอกสารต้นฉบับที่
                        ทางการไทยหรือทางการต่าง ประเทศออกให้
                        หรือรับรองให้เท่านั้นนอกจากนี้การแปลควรจะต้องให้คงรูปแบบให้มากที่สุด
                        ครบถ้วน และถูกต้องในรายละเอียด รวมทั้งขอให้ผู้แปลลงนาม
                        รับรองคำแปลถูกต้อง และพิมพ์ชื่อสกุลอย่างชัดเจน
                        โดยควรให้นักแปลอาชีพที่มีความเชี่ยวชาญด้านภาษาเป็นผู้แปลเพื่อความถูกต้องและ
                        ไม่ถูกปฏิเสธเมื่อนำไปใช้ในต่างประเทศ
                      </p>
                    </div>
                    <div className={styles.Imgdetailefram3_3_1} />
                  </div>
                </div>

                <div className={styles.detailefram3_3}>
                  <div className={styles.Boxfram3_3}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        การรับรองสำเนาถูกต้อง
                      </p>
                      <p className={styles.HBoxdetaile3_1}>
                        (CERTIFIED TRUE COPY)
                      </p>
                      <p className={styles.HBoxdetaile3_3}>
                        กระทรวงฯ
                        จะรับรองเฉพาะเอกสารที่ทางราชการไทยออกให้เท่านั้น
                        การยื่นเรื่องให้รับรอง
                        ต้องมีเอกสารต้นฉบับพร้อมถ่ายสำเนาอีก 1 ชุด
                        หากต้องมากกว่า 1 ชุด ก็สามารถกระทำได้
                        โดยชำระค่าธรรมเนียมเพิ่ม
                      </p>
                    </div>
                    <div className={styles.Imgdetailefram3_3_2} />
                  </div>
                </div>
              </div>
              <p className={styles.textHeading2_overviwe4_2}>
                รับรองเอกสารราชการ
              </p>
              <div className={styles.con_detailefram3_5_2}>
                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_1} />
                    <p>การรับรองลายมือชื่อบุคคล</p>
                  </div>
                </div>

                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_3} />
                    <p>
                      การรับรองลายมือชื่อเจ้าหน้าที่ ผู้มีอำนาจลงนามเอกสาร
                      ต้องใช้เอกสารต้นฉบับ
                    </p>
                  </div>
                </div>

                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_2} />
                    <p>
                      การรับรองลายมือชื่อบุคคลในฐานะ เจ้าของเอกสารและ หรือในฐานะ
                      ผู้มีอำนาจลงนามแทนนิติบุคคล
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            //type 6
            <div className={styles.fram3_6}>
              <div className={styles.detailefram3_6}>
                <div className={styles.Indetailefram3_6}>
                  <p className={styles.H_Indetailefram3_6}>
                    ขอบข่ายการให้บริการ
                  </p>
                  <div className={styles.setBoxIndetailefram3_6}>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>ตรวจสอบประวัติอาชญากรรม</p>
                    </div>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>ออกหนังสือรับรอง ประวัติจากสำนักงาน ตำรวจแห่งชาติ</p>
                    </div>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>จัดส่งเอกสารมาทางอีเมล์ หรือทางไลน์</p>
                    </div>
                  </div>
                  <p className={styles.fonttype1}>
                    ขั้นตอนการให้บริการครอบคลุมตั้งแต่การยื่นคำขอหนังสือรับรองประวัติอาชญากรรม
                    และจัดส่งเอกสารคืนท่านทางไปรษณีย์ EMS หรือ DHL
                  </p>
                  <div>
                    <p className={styles.fonttype2}>
                      นอกจากบริการรับปรึกษาการขอใบรับรองความประพฤติ/ใบรับรองประวัติอาชญากรรมแล้ว
                      เรายังให้บริการเดินเรื่องรับรองเอกสารกับกรมการกงสุล
                      กระทรวงการต่างประเทศ ถนนแจ้งวัฒนะ
                      รวมถึงรับรองกับสถานทูตของประเทศที่จะนำเอกสารไปใช้ด้วย
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ width: "100vw" }}>
            <Footer v="English" a={Aoc} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.fram1}>
            <div className={styles.boxBlue_overviwe}>
              <p className={styles.h_text1}>Translation Hero Services</p>
              <p className={styles.h_text2}>
                New options to help you translate the language you want.
              </p>
              <div className={styles.set_fram1_button}>
                {type === 1 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_1} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>เอกสารราชการทั่วไป</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_1} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>เอกสารราชการทั่วไป</p>
                  </button>
                )}

                {type === 2 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_2} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองคำแปลถูกต้อง จากศูนย์แปล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_2} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองคำแปลถูกต้อง จากศูนย์แปล</p>
                  </button>
                )}

                {type === 3 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(3)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_3} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองเอกสารจาก กรมการกงสุล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(3)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_3} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองเอกสารจาก กรมการกงสุล</p>
                  </button>
                )}

                {type === 4 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(4)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_4} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองเอกสาร จากสถานทูต</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(4)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_4} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองเอกสาร จากสถานทูต</p>
                  </button>
                )}

                {type === 5 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(5)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_5} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>บริการรับรองลายมือชื่อ โดยทนายความ</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(5)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_5} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>บริการรับรองลายมือชื่อ โดยทนายความ</p>
                  </button>
                )}
                {type === 6 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(6)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_6} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>บริการยื่นขอหนังสือ รับรองความประพฤติ</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(6)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_6} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>บริการยื่นขอหนังสือ รับรองความประพฤติ</p>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={styles.fram2}>
            {type === 1 ? (
              <p className={styles.textHeading2_overviwe}>เอกสารราชการทั่วไป</p>
            ) : type === 2 ? (
              <>
                <p className={styles.textHeading2_overviwe}>
                  การรับรองคำแปลถูกต้อง จากศูนย์แปล
                </p>
                <p className={styles.textHeading2_overviwe2}>
                  เอกสารฉบับแปลที่จะต้องนำไปใช้อ้างอิงอย่างเป็นทางการจะต้องมีการรับรองคำแปลเสียก่อน
                  ทั้งนี้ ในการรับรองคำแปลนั้น มีหลากหลายวิธี
                  ขึ้นอยู่กับวัตถุประสงค์การนำเอกสารไปใช้งาน
                </p>
              </>
            ) : type === 3 ? (
              <div className={styles.textHeading2_overviwe}>
                <p className={styles.textHeading2_overviwe4}>
                  บริการรับรองเอกสารกรมการกงสุล
                </p>
                <p className={styles.textHeading2_overviwe4}>
                  กระทรวงการต่างประเทศ
                </p>
                <p className={styles.textHeading2_overviwe3}>
                  เอกสารสำคัญที่จะนำไปใช้อ้างอิงในต่างประเทศจะต้องผ่านการับรองจากกระทรวงการต่างประเทศเสมอจึงจะได้รับการ
                  ยอมรับว่าเป็นเอกสารที่ชอบด้วยกฎหมาย
                  ในขณะที่เอกสารที่ทำในต่างประเทศหรือออกให้โดยทางการต่างประเทศ
                  ต้องแปลเป็นภาษาไทยแล้วนำมาให้กระทรวงการต่างประเทศรับรองทางการไทยจึงจะยอมรับ
                  การรับรองเอกสารตามระเบียบกระทรวงฯปี พ.ศ.2539 มี 3 ประเภท คือ
                  การรับรอง คำแปลภาษาไทยและภาษาอังกฤษการับรองสำเนาถูกต้อง
                  และการรับรองลายมือชื่อ
                </p>
              </div>
            ) : type === 4 ? (
              <p className={styles.textHeading2_overviwe4}>
                บริการรับรองเอกสารกับสถานทูตประเทศต่างๆ
              </p>
            ) : type === 5 ? (
              <>
                <p className={styles.textHeading2_overviwe}>
                  บริการรับรองลายมือชื่อ โดยทนายความ
                </p>
                <p className={styles.textHeading2_overviwe3_5}>
                  เอกสารบางชนิดต้องการการรับรองจากทนายความ
                  มีลักษณะคล้ายกับการรับรองโนตารี่ พับลิค (Notary Public)
                  ของต่างประเทศ
                  การรับรองเอกสารในลักษณะนี้จะต้องดำเนินการโดยทนายความที่ได้รับอนุญาตจากสภาทนายความ
                  เรียกว่า ทนายรับรองเอกสาร ทนายความรับรองลายมือชื่อ หรือ
                  Notarial Services Attorney เพื่อให้สามารถนำเอกสารดังกล่าว
                  ไปใช้ในต่างประเทศได้ โดยทั่วไปจะเป็นการรับรองลายมือชื่อบุคคล
                  รับรองลายมือชื่อกรรมการรับรองลายมือชื่อพยาน รับรองบุคคล
                  รับรองเอกสารบริษัท รับรองสำเนา รับรองคำแปลถูกต้อง
                  รับรองเอกสารโนตารี เป็นต้น
                </p>
              </>
            ) : (
              <>
                <div className={styles.textHeading2_overviwe}>
                  <p>บริการขอหนังสือรับรองความประพฤติ</p>
                  <p>(Police Clearance Certificate)</p>
                </div>

                <p className={styles.textHeading2_overviwe3}>
                  ให้บริการรับปรึกษาการยื่นขอหนังสือรับรองประวัติอาชญากรรม
                  หรือหนังสือรับรองความประพฤติ หรือหนังสือรับรองตำรวจ (Police
                  Clearance Certificate) จากสำนักงานตำรวจแห่งชาติ
                  เพื่อประกอบการทำธุรกรรมต่างๆ เช่น การขอวีซ่า (Visa
                  Application) ต่อวีซ่า (Visa Extension) สมัครงาน สมัครเรียน
                  สมรส ขอมีถิ่นที่อยู่ ขอรับบุตรบุญธรรม เป็นต้น
                </p>
              </>
            )}
          </div>
          {type === 1 ? (
            <div className={styles.fram3}>
              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  {typeDoc === 1 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(1)}
                    >
                      เอกสารส่วนบุคคล เอกสารราชการ
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(1)}
                    >
                      เอกสารส่วนบุคคล เอกสารราชการ
                    </button>
                  )}
                  {typeDoc === 2 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(2)}
                    >
                      เอกสารทางบัญชี-ธุรกิจ
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(2)}
                    >
                      เอกสารทางบัญชี-ธุรกิจ
                    </button>
                  )}
                  {typeDoc === 3 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(3)}
                    >
                      เอกสารวิชาการทุกสาขาเฉพาะทาง
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(3)}
                    >
                      เอกสารวิชาการทุกสาขาเฉพาะทาง
                    </button>
                  )}
                  {typeDoc === 4 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(4)}
                    >
                      เอกสารทางกฎหมาย
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(4)}
                    >
                      เอกสารทางกฎหมาย
                    </button>
                  )}
                </div>

                <div className={styles.Indetailefram3}>
                  {typeDoc === 1 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>บัตรประจำตัวประชาชน</p>
                          </li>
                          <li>
                            <p>ทะเบียนบ้าน</p>
                          </li>
                          <li>
                            <p>สูติบัตร</p>
                          </li>
                          <li>
                            <p>หนังสือสำคัญการเปลี่ยนชื่อ-สกุล</p>
                          </li>
                          <li>
                            <p>หนังสือสำคัญการจัดตั้งนามสกุล</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองการใช้คำนำหน้านาม</p>
                          </li>
                          <li>
                            <p>แบบรับรองรายการทะเบียนราษฎร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองโสด</p>
                          </li>
                          <li>
                            <p>ทะเบียนสมรส</p>
                          </li>
                          <li>
                            <p>ทะเบียนหย่า</p>
                          </li>
                          <li>
                            <p>ใบสำคัญการหย่า</p>
                          </li>
                          <li>
                            <p>ใบประกาศนียบัตร</p>
                          </li>
                          <li>
                            <p>ใบสำคัญการสมรส</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>หนังสือรับรองการอุปการะบุตร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองสถานที่เกิด</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองบุตรบุญธรรม</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองการปกครองบุตร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองความประพฤติ</p>
                          </li>
                          <li>
                            <p>มรณบัตร</p>
                          </li>
                          <li>
                            <p>โฉนดที่ดิน</p>
                          </li>
                          <li>
                            <p>ใบอนุญาตขับขี่</p>
                          </li>
                          <li>
                            <p>เอกสารทางการศึกษา</p>
                          </li>
                          <li>
                            <p>ใบแจ้งความ</p>
                          </li>
                          <li>
                            <p>หนังสือเดินทาง</p>
                          </li>
                          <li>
                            <p>ใบรับรองแพทย์</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : typeDoc === 2 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>เอกสารทางบัญชี</p>
                          </li>
                          <li>
                            <p>ใบสำคัญหักภาษี ณ ที่จ่าย</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองบริษัท</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองนิติบุคคล</p>
                          </li>
                          <li>
                            <p>ใบเสนอราคา</p>
                          </li>
                          <li>
                            <p>คำบรรยาย/แปลSub-titles</p>
                          </li>
                          <li>
                            <p>คู่มือผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>โบรชัวร์</p>
                          </li>
                          <li>
                            <p>เว็บไซต์</p>
                          </li>
                          <li>
                            <p>ใบแจ้งค่าบริการ</p>
                          </li>
                          <li>
                            <p>สิทธิบัตร</p>
                          </li>
                          <li>
                            <p>รายงานการประชุม</p>
                          </li>
                          <li>
                            <p>งานด้านการตลาด</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>งบดุล</p>
                          </li>
                          <li>
                            <p>ทะเบียนพาณิชย์</p>
                          </li>
                          <li>
                            <p>หนังสือบริคณห์สนธิ</p>
                          </li>
                          <li>
                            <p>ทะเบียนการค้า</p>
                          </li>
                          <li>
                            <p>ใบแจ้งหนี้</p>
                          </li>
                          <li>
                            <p>ใบปลิว</p>
                          </li>
                          <li>
                            <p>เอกสารรับรองสำหรับองค์กรอาหารและยา(อ.ย)</p>
                          </li>
                          <li>
                            <p>ฉลากผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>คลิปวิดีโอสาธิตผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>ใบเสร็จรับเงิน</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองลิขสิทธิ์</p>
                          </li>
                          <li>
                            <p>สัญญาจ้างงาน</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : typeDoc === 3 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>บทคัดย่อ</p>
                          </li>
                          <li>
                            <p>วิทยานิพนธ์</p>
                          </li>
                          <li>
                            <p>งานทางศาสนา</p>
                          </li>
                          <li>
                            <p>งานทางดนตรี</p>
                          </li>
                          <li>
                            <p>หนังสือ บทกวี</p>
                          </li>
                          <li>
                            <p>งานทางวิศวกรรม</p>
                          </li>
                          <li>
                            <p>งานทางกฏหมาย</p>
                          </li>
                          <li>
                            <p>งานทางการศึกษา</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>บทความ</p>
                          </li>
                          <li>
                            <p>งานวิจัย</p>
                          </li>
                          <li>
                            <p>งานทางการแพทย์</p>
                          </li>
                          <li>
                            <p>งานทางบันเทิง</p>
                          </li>
                          <li>
                            <p>งานทางวิทยาศาสตร์</p>
                          </li>
                          <li>
                            <p>งานทางเกษตรกรรม</p>
                          </li>
                          <li>
                            <p>งานทางธุรกิจ-การเงิน</p>
                          </li>
                          <li>
                            <p>งานทางศิลปะ-วัฒนธรรม</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <ul>
                          <li>
                            <p>สัญญา</p>
                          </li>
                          <li>
                            <p>สัญญาเช่า</p>
                          </li>
                          <li>
                            <p>สัญญาทางธุรกิจ</p>
                          </li>
                          <li>
                            <p>หนังสือค้ำประกัน</p>
                          </li>
                          <li>
                            <p>ใบแจ้งความ และอื่นๆ</p>
                          </li>
                          <li>
                            <p>สัญญาซื้อขาย</p>
                          </li>
                          <li>
                            <p>สัญญาจ้างงาน</p>
                          </li>
                          <li>
                            <p>หนังสือมอบอำนาจ</p>
                          </li>
                          <li>
                            <p>คำสั่งศาล/คำร้อง/คำฟ้อง</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.Indetailefram3_2} />
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : type === 2 ? (
            <div className={styles.fram3_2}>
              <div className={styles.detailefram3_2}>
                <div className={styles.Boxfram3_2}>
                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลถูกต้องจากทางศูนย์แปล
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      เพื่อเอาไปขอวีซ่าเข้าประเทศต่างๆ
                      หรือเพื่อประกอบหลักฐานการทำธุรกรรมในต่างประเทศ
                      ที่ไม่ต้องการให้รับรองคำแปลอย่างเป็นทางการมากนัก
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลถูกต้องจากนักแปลที่ขึ้นทะเบียน
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      โดยมากมักเป็นการรับรองเพื่อนำเอกสารไปใช้ในการยื่นประมูล
                      หรือประกวดราคา (Bid) กับหน่วยงานราชการไทย
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_3}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยนักแปลที่มีคุณสมบัติ (Qualified translator)
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      เพื่อเอาไปขอวีซ่าเข้าประเทศต่างๆ
                      หรือเพื่อประกอบหลักฐานกากรณีนี้มักเป็นระเบียบของหน่วยงานราชการไทยที่จะต้องให้นักแปล
                      ประเภทนี้รับรองเอกสารโดยมากมักเป็นผู้แปลที่จบทางการด้านภาษามาโดยตรงหรืออาจารย์มหาวิทยาลัย
                      หรือผู้ที่จบการศึกษา มาจากต่างประเทศ
                      เป็นต้นรทำธุรกรรมในต่างประเทศที่ไม่ต้องการให้รับรองคำแปลอย่างเป็นทางการมากนัก
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยนักแปลขึ้นทะเบียนหรือนักแปลสาบานตนกับสถานทูต
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      สถานทูตของบางประเทศจะกำหนดให้นักแปลที่ขึ้นทะเบียนกับสถานทูตแล้วเท่านั้นเป็นผู้รับรองคำแปล
                      โดยมากมักเป็นสถานทูตของประเทศแถบยุโรป เช่น สถานทูตฝรั่งเศส
                      สถานทูตเยอรมัน สถานทูตออสเตรีย เป็นต้น
                    </p>
                  </div>
                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยทนายความรับรองเอกสาร
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Notarial Services Attorney
                      ซึ่งมีลักษณะคล้ายกับการรับรองโนตารีในต่างประเทศ
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยกรมการกงสุล กระทรวงการต่างประเทศ
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Legalization
                      เป็นการรรับรองคำแปลเอกสารจากหน่วยงานราชการไทย
                      ที่จะต้องนำไปเอกสารไปใช้อ้างอิงในต่างประเทศ
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยทนายความรับรองเอกสาร
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Notarial Services Attorney
                      ซึ่งมีลักษณะคล้ายกับการรับรองโนตารีในต่างประเทศ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : type === 4 ? (
            <div className={styles.fram3_4}>
              <div className={styles.detailefram3_4}>
                <div className={styles.Boxfram3_4}>
                  <p className={styles.HBoxfram3_4_1}>
                    เอกสารที่ออกให้จากต่างประเทศต้องการนำมาใช้ในประเทศไทย
                  </p>
                  <p className={styles.HBoxfram3_4_2}>
                    เช่น สูติบัตร ใบสำคัญการสมรส สมรสทะเบียนสมรส ใบสำคัญการหย่า
                    ทะเบียนหย่า ฯลฯ หากท่านจะนำมาใช้ในประเทศไทย
                    เอกสารนั้นจะต้องผ่านการรับรองจากจากสถานทูตของประเทศนั้นๆ
                    ในประเทศไทยก่อน หรือ กงสุลไทยในประเทศที่ออกเอกสารนั้น
                    จึงจะสามารถนำมาแปลเป็นภาษาไทยและนำไปรับรองที่กรมการกงสุล
                    กระทรวงการต่างประเทศได้ เอกสารที่ผ่านการรับรองนิติกรณ์
                    (Legalization) จากกรมการกงสุลแล้ว
                    ถือเป็นเอกสารที่ชอบด้วยกฎหมายสามารถนำไป ยื่นขอจดทะเบียน
                    และทำธุรกรรมต่างๆ ที่สำนักงานเขตหรืออำเภอได้
                  </p>
                  <div className={styles.ImgBox3_4_1} />

                  <p className={styles.HBoxfram3_4_1}>
                    เอกสารที่ออกให้จากประเทศไทย ต้องการนำไปใช้ที่ต่างประเทศ
                  </p>
                  <p className={styles.HBoxfram3_4_2}>
                    เอกสารที่ออกโดยราชการ เช่น สูติบัตร ทะเบียนบ้าน
                    หนังสือรับรองโสด ใบสำคัญการสมรส ใบสำคัญการหย่า ฯลฯ
                    นำเอกสารที่ต้องการใช้ ทำการแปล
                    พร้อมมีลายเซ็นกำกับคำแปลถูกต้องจากผู้เชี่ยวชาญ
                    แล้วจึงนำไปรับรองนิติกรณ์ (Legalization)ที่กรมการกงสุล
                    กระทรวงการต่างประเทศในไทย
                    เมื่อได้รับการรับรองจากกระทรวงฯแล้วจึงจะสามารถนำ
                    เอกสารนั้นๆไปใช้ในต่างประเทศได้
                    เว้นแต่ในบางประเทศที่จะต้องนำเอกสารไปรับรองเพิ่มเติมที่สถานทูตของประเทศนั้นๆ
                    ที่ตั้งอยู่ในประเทศไทย (เช่น ประเทศจีน เช็ค ฟินแลนด์ เยอรมนี
                    อิตาลี เป็นต้น) จึงจะสามารถนำเอกสารไปใช้ได้ตามกฎหมาย
                  </p>
                  <div className={styles.ImgBox3_4_2} />
                </div>
              </div>
            </div>
          ) : type === 5 ? (
            <div className={styles.fram3_5}>
              <div className={styles.detailefram3_5}>
                <div className={styles.con_detailefram3_5}>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1} />
                    <p>รับรองเอกสารเพื่อใช้ในต่างประเทศ</p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_2} />
                    <p>
                      รับรองเอกสาร รับรองใบสมัคร เพื่อเรียนต่อต่างประเทศ
                      (Affidavit of support /Sponsor Notarization)
                    </p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_3} />
                    <p>รับรองสำเนาเอกสาร (Certified true copy)</p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_4} />
                    <p>รับรองสถานะการเงิน (Statement notarization)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_5} />
                    <p>รับรองคำแปลเอกสาร (Certified correct translation)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_6} />
                    <p>
                      รับรองลายมือชื่อ บุคคล กรรมการนิติบุคคล บริษัทจำกัด
                      บริษัทมหาช (Signature notarization and Legalization)
                    </p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_7} />
                    <p>รับรองข้อเท็จจริง (Marine protest notary public)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_8} />
                    <p>รับรองความมีอยู่จริงของเอกสาร (Existence of Document)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_9} />
                    <p>
                      รับรองการทำสัญญาระหว่างเอกชน (Contract agreement notary
                      public)
                    </p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_10} />
                    <p>รับรองคำสาบาน (Applicant declaration)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_11} />
                    <p>รับรองคำให้การ (Declaration notary public)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_12} />
                    <p>
                      รับรองหนังสืออนุญาตจากผู้ปกครอง (Letter of authorization
                      for travel)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : type === 3 ? (
            <>
              <div className={styles.fram3_3}>
                <div className={styles.detailefram3_3}>
                  <div className={styles.Boxfram3_3}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>การรับรองเอกสาร</p>
                      <p className={styles.HBoxdetaile3_3}>
                        การรับรองคำแปล กรมการกงสุลไทย
                        จะรับรองเฉพาะคำแปลของเอกสารภาษาไทยเป็นภาษาอังกฤษ/หรือภาษาอังกฤษเป็น
                        ภาษาไทยเท่านั้น สำหรับภาษาต่างประเทศอื่น ๆ เช่น
                        ภาษาเยอรมัน ฝรั่งเศส สถานเอกอัครราชทูตฯ
                        เจ้าของภาษาจะเป็น ผู้แปลภาษาอังกฤษหรือภาษาไทย
                        และรับรองคำแปลนั้น ทั้งนี้ กระทรวงฯ
                        จะรับรองคำแปลเฉพาะที่แปลจากเอกสารต้นฉบับที่
                        ทางการไทยหรือทางการต่าง ประเทศออกให้
                        หรือรับรองให้เท่านั้นนอกจากนี้การแปลควรจะต้องให้คงรูปแบบให้มากที่สุด
                        ครบถ้วน และถูกต้องในรายละเอียด รวมทั้งขอให้ผู้แปลลงนาม
                        รับรองคำแปลถูกต้อง และพิมพ์ชื่อสกุลอย่างชัดเจน
                        โดยควรให้นักแปลอาชีพที่มีความเชี่ยวชาญด้านภาษาเป็นผู้แปลเพื่อความถูกต้องและ
                        ไม่ถูกปฏิเสธเมื่อนำไปใช้ในต่างประเทศ
                      </p>
                    </div>
                    <div className={styles.Imgdetailefram3_3_1} />
                  </div>
                </div>

                <div className={styles.detailefram3_3}>
                  <div className={styles.Boxfram3_3}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        การรับรองสำเนาถูกต้อง
                      </p>
                      <p className={styles.HBoxdetaile3_1}>
                        (CERTIFIED TRUE COPY)
                      </p>
                      <p className={styles.HBoxdetaile3_3}>
                        กระทรวงฯ
                        จะรับรองเฉพาะเอกสารที่ทางราชการไทยออกให้เท่านั้น
                        การยื่นเรื่องให้รับรอง
                        ต้องมีเอกสารต้นฉบับพร้อมถ่ายสำเนาอีก 1 ชุด
                        หากต้องมากกว่า 1 ชุด ก็สามารถกระทำได้
                        โดยชำระค่าธรรมเนียมเพิ่ม
                      </p>
                    </div>
                    <div className={styles.Imgdetailefram3_3_2} />
                  </div>
                </div>
              </div>
              <p className={styles.textHeading2_overviwe4_2}>
                รับรองเอกสารราชการ
              </p>
              <div className={styles.con_detailefram3_5_2}>
                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_1} />
                    <p>การรับรองลายมือชื่อบุคคล</p>
                  </div>
                </div>

                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_3} />
                    <p>
                      การรับรองลายมือชื่อเจ้าหน้าที่ ผู้มีอำนาจลงนามเอกสาร
                      ต้องใช้เอกสารต้นฉบับ
                    </p>
                  </div>
                </div>

                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_2} />
                    <p>
                      การรับรองลายมือชื่อบุคคลในฐานะ เจ้าของเอกสารและ หรือในฐานะ
                      ผู้มีอำนาจลงนามแทนนิติบุคคล
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            //type 6
            <div className={styles.fram3_6}>
              <div className={styles.detailefram3_6}>
                <div className={styles.Indetailefram3_6}>
                  <p className={styles.H_Indetailefram3_6}>
                    ขอบข่ายการให้บริการ
                  </p>
                  <div className={styles.setBoxIndetailefram3_6}>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>ตรวจสอบประวัติอาชญากรรม</p>
                    </div>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>ออกหนังสือรับรอง ประวัติจากสำนักงาน ตำรวจแห่งชาติ</p>
                    </div>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>จัดส่งเอกสารมาทางอีเมล์ หรือทางไลน์</p>
                    </div>
                  </div>
                  <p className={styles.fonttype1}>
                    ขั้นตอนการให้บริการครอบคลุมตั้งแต่การยื่นคำขอหนังสือรับรองประวัติอาชญากรรม
                    และจัดส่งเอกสารคืนท่านทางไปรษณีย์ EMS หรือ DHL
                  </p>
                  <div>
                    <p className={styles.fonttype2}>
                      นอกจากบริการรับปรึกษาการขอใบรับรองความประพฤติ/ใบรับรองประวัติอาชญากรรมแล้ว
                      เรายังให้บริการเดินเรื่องรับรองเอกสารกับกรมการกงสุล
                      กระทรวงการต่างประเทศ ถนนแจ้งวัฒนะ
                      รวมถึงรับรองกับสถานทูตของประเทศที่จะนำเอกสารไปใช้ด้วย
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ width: "100vw" }}>
            <Footer v="English" a={Aoc} />
          </div>
        </>
      )}
    </>
  );
};
export default Services_official;
