import styles from "./About.module.scss";

const About = () => {
  return (
    <main className="main">
      <section className={styles.about}>
        <div className={`container`}>
          <h2 className={styles.about__heading}>Biz haqimizda</h2>

          <div className={styles.about__inner}>
            <p className={styles.about__description}>
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil
              etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI
              dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror
              qildik.
            </p>
            <p className={styles.about__description}>
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil
              etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI
              dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror
              qildik.
            </p>

            <p className={styles.about__description}>
              Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib,
              ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn
              tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash
              vazifasi topshirildi.
            </p>

            <p className={styles.about__description}>
              Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan
              mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho
              sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
