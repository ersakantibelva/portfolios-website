import BackButton from "../components/BackButton";
import profilePic from "../assets/profile-pic.jpg";

export default function ResumePage() {
  return (
    <div className="container flex flex-col min-h-[calc(100%-8rem)] mx-auto mb-4">
      <BackButton route={"/"} message={"Back to home"} />
      <div className="flex flex-col items-center w-full h-full">
        <div className="mt-4 text-5xl font-bold text-center text-prussian-blue">
          About Me
        </div>

        <div class="relative block my-8">
          <img
            alt="profil"
            src={profilePic}
            class="mx-auto object-cover rounded-full h-36 w-36 object-top"
          />
        </div>

        <div className="text-2xl font-bold text-center text-prussian-blue">
          Ersakanti Belva
        </div>
        <div className="text-sm font-medium text-center text-prussian-blue">
          (tinycalicocat)
        </div>
        <div className="text-center text-celadon-blue">
          A female developer with engineering education background.
        </div>

        <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Overview
        </div>
        <div className="max-w-2xl mx-auto text-center text-celadon-blue">
          I am an undergraduate engineering student passionate and interested in
          software development. I am joining Hacktiv8 Bootcamp as student of
          Full-Stack JavaScript to enrich my technical or soft skills, such as
          JavaScript as main programming language, developing server using
          ExpressJs and developing client-side website using frameworks
          (ReactJs, VueJs). Moreover, being head of a department in a previous
          organization, I learned to work under pressure individually and as a
          team. I also learned to have a high dedication and responsibility
          towards my work. I hope to further develop my experience by working as
          a software engineer in this new opportunity.
        </div>

        <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Education
        </div>

        <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
          <div className="flex justify-between">
            <h1>Full-Stack JavaScript Student</h1>
            <h1>Remote</h1>
          </div>
          <div className="flex justify-between">
            <h1>Hacktiv8 Indonesia</h1>
            <h1>Sept 2022 – Jan 2023</h1>
          </div>
        </div>
        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>
            - Learning about website development tech stack such as JavaScript
            as main programming language, ExpressJs as framework for
            server-side, PostgreSQL as database, VueJs and ReactJs as
            client-side frameworks, and React Native to build mobile app.
          </li>
          <li>
            - Develop 3 websites through projects assignment both in server-side
            and client-side.{" "}
          </li>
        </ul>

        <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
          <div className="flex justify-between">
            <h1>Data Analyst Track Participant</h1>
            <h1>Remote</h1>
          </div>
          <div className="flex justify-between">
            <h1>Generasi GIGIH 2.0 by GoTo</h1>
            <h1>Mar 2022 – Sept 2022</h1>
          </div>
        </div>
        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>
            - Learning about Data Ecosystem, Data Analytic, Statistics, Data
            Processing using SQL, Python Programming (Numpy and Pandas), and
            Data Visualization with Google Data Studio.
          </li>
          <li>
            - Develop the soft skills such as Adaptability, Time Management,
            Constructive Feedback, Critical Thinking, Life Path, Problem
            Solving, etc.
          </li>
          <li>
            - Working in Capstone Project that collaborate with different
            stakeholder and fully engaged as a part of the engineering team.
          </li>
        </ul>

        <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
          <div className="flex justify-between">
            <h1>Undergraduate, Engineering Physics</h1>
            <h1>Surabaya, Indonesia</h1>
          </div>
          <div className="flex justify-between">
            <h1>Sepuluh Nopember Institute of Technology, Surabaya</h1>
            <h1>Jul 2018 – August 2022</h1>
          </div>
        </div>
        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>Relevant Coursework : Computer Programming </li>
        </ul>

        <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Experience
        </div>

        <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
          <div className="flex justify-between">
            <h1>Data Analyst Intern</h1>
            <h1>Remote</h1>
          </div>
          <div className="flex justify-between">
            <h1>PT Gizi Sehat Indonesia (Dietela.id)</h1>
            <h1>May 2022 – August 2022</h1>
          </div>
        </div>
        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>
            - Successfully analyze over 400 Dietela’s clients and create the
            dashboard to get an overview of client demographics and personas
            using Google Data Studio and Python with Pandas{" "}
          </li>
          <li>
            - Enabled to use Natural Language Processing (NLP) to process the
            data with text type using Sastrawi library{" "}
          </li>
        </ul>

        <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
          <div className="flex justify-between">
            <h1>Head of Communication and Information Department</h1>
            <h1>Surabaya, Indonesia</h1>
          </div>
          <div className="flex justify-between">
            <h1>Himpunan Mahasiswa Teknik Fisika, Surabaya</h1>
            <h1>Nov 2020 – Dec 2021</h1>
          </div>
        </div>
        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>
            - Responsible for conceptualizing 5 departmental work programs that
            run for 10 months.{" "}
          </li>
          <li>
            - Successfully created a social media content scheduling management
            system for Instagram and LINE Official Accounts.
          </li>
          <li>- Gain reward as one of Best Department in HMTF ITS 2020/2021</li>
        </ul>

        <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
          <div className="flex justify-between">
            <h1>Staff of Brand and Information Management</h1>
            <h1>Surabaya, Indonesia</h1>
          </div>
          <div className="flex justify-between">
            <h1>AIESEC in Surabaya, Surabaya</h1>
            <h1>Feb 2021 – Jan 2022</h1>
          </div>
        </div>
        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>
            - Create branding content of AIESEC in Surabaya on Instagram and
            LinkedIn.{" "}
          </li>
          <li>
            - Awarded the title of Member of The Month in February and March for
            the Staff category.
          </li>
          <li>- Successfully drafted more than 20 content in a month.</li>
          <li>- Enabled to get a 25% increase in followers for 5 months. </li>
        </ul>

        <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Skills and Certification
        </div>

        <ul className="max-w-2xl mx-auto text-celadon-blue">
          <li>
            <span className="font-semibold text-prussian-blue">
              Technical:{" "}
            </span>
            Visual Studio Code, JavaScript Programming, ExpressJs, PostgreSQL,
            MongoDb, JQuery, VueJs, ReactJs, Redux, React Native, Redis,
            Firebase, AWS, Docker, TailwindCSS, Bootstrap, Python Programming,
            Microsoft Office, Google Data Studio, Google Suites, BigQuery.{" "}
          </li>
          <li>
            <span className="font-semibold text-prussian-blue">
              Professional Skill:{" "}
            </span>
            Teamwork, Time management, Leadership, Problem Solving
          </li>
          <li>
            <span className="font-semibold text-prussian-blue">
              Certification:{" "}
            </span>
            Python Programming by Progate, SQL by Progate{" "}
          </li>
          <li>
            <span className="font-semibold text-prussian-blue">Language: </span>
            Indonesia (Native), English (Intermediate){" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
