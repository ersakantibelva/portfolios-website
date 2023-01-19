import BackButton from "../components/BackButton";
import profilePic from "../assets/profile-pic.jpg";
import cvPdf from "../assets/CV_ErsakantiBelva.pdf"

export default function ResumePage() {

  const handleDownloadPdf = () => {
    fetch('CV_ErsakantiBelva.pdf')
    .then((res) => {
       return res.blob()
      })
      .then(blob => {
        const fileUrl = window.URL.createObjectURL(blob)

        let alink = document.createElement('a')
        alink.href = fileUrl
        alink.download = 'CV_ErsakantiBelva.pdf'
        alink.click()
      })
  }

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
        <div className="text-center text-celadon-blue">Software Engineer</div>

        <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Overview
        </div>
        <div className="max-w-2xl px-3 mx-auto text-justify text-celadon-blue">
          A female developer with an engineering degree who is passionate and
          interested in software development and an IT enthusiast. I joined
          Hacktiv8 Bootcamp as a student of Full-Stack JavaScript to enrich my
          technical or soft skills, such as JavaScript as the main programming
          language, developing servers using ExpressJs, and developing
          client-side websites using front-end frameworks (ReactJs, VueJs).
          Moreover, I learned to work under pressure individually and as part of
          a team while I was a head of a department in a previous organization.
          I also learned to have high dedication, responsibility towards my
          work, and eagerness to learn new things. I hope to further develop my
          experience by working as a software engineer in the future.
        </div>

        {/* <button onClick={handleDownloadPdf}>
          Get My CV
        </button> */}

        <a href={cvPdf} target="_blank" rel="noreferrer" className="px-3 py-2 my-3 font-medium rounded-full w-fit bg-powder-blue text-imperial-red">
          Open My CV
        </a>
{/* 
        <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Education
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>Full-Stack JavaScript Student</div>
          <div>Hacktiv8 Indonesia</div>
          <div className="font-normal">Sept 2022 – Jan 2023 (Remote)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              - Learned programming and software development fundamentals
            </li>
            <li>
              - Developed websites through projects assignments both server-side and client-side.{" "}
            </li>
          </ul>
          <div>Awards: Teacher's Awards</div>
          <div>Final Grade: 96.8%</div>
          <div className="flex gap-3">
            <a href="https://drive.google.com/file/d/1dqybouX8OBWgA_1bK2qHKPIrCcPMgYgQ/view?usp=sharing" target="_blank" className="cursor-pointer hover:text-celadon-blue text-imperial-red">
              Certificate
            </a>
            <a href="https://drive.google.com/file/d/12v7qeItZ7dn0F2dqbdx_2swSWHfqXmHJ/view?usp=sharing" target="_blank" className="cursor-pointer hover:text-celadon-blue text-imperial-red">
              Transcript
            </a>
          </div>
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>React Js Web Frontend Student</div>
          <div>Sanbercode</div>
          <div className="font-normal">Aug 2022 - Sept 2022 (Remote)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              - Learned developing client-side website using React Js
            </li>
            <li>
              - Developed website using authentication and deployment with Netlify{" "}
            </li>
          </ul>
            <a href="https://drive.google.com/file/d/1ZUxSkvAWYIptawVUTL6mQNfDwJ8qephL/view?usp=sharing" target="_blank" className="cursor-pointer hover:text-celadon-blue text-imperial-red">
              Certificate
            </a>
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>Data Analyst Track Participant</div>
          <div>Generasi GIGIH 2.0 by GoTo</div>
          <div className="font-normal">Mar 2022 – Sept 2022 (Remote)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              - Learned about Data Ecosystem, Data Analytic, Statistics, Data Processing using SQL, Python Programming (Numpy and Pandas), and Data Visualization with Google Data Studio.  
            </li>
            <li>
              - Developed soft skills such as Adaptability, Time Management, Constructive Feedback, Critical Thinking, Life Path, Problem Solving, etc.
            </li>
            <li>
              - Worked on a Capstone Project that collaborates with stakeholder and is fully engaged as a part of the engineering team.
            </li>
          </ul>
            <a href="https://drive.google.com/drive/folders/1iETs3f55XcdbcZchJq3b1jJxFWDnXR1X?usp=sharing" target="_blank" className="cursor-pointer hover:text-celadon-blue text-imperial-red">
              Certificate
            </a>
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>Undergraduate, Engineering Physics</div>
          <div>Sepuluh Nopember Institute of Technology</div>
          <div className="font-normal">Jul 2018 – August 2022 (Surabaya)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              <div className="font-semibold">Relevant Coursework:</div>
              Computer Programming  
            </li>
            <li className="flex gap-1">
              <div className="font-semibold">GPA: </div>
              <div>3.63/4.00</div>
            </li>
            <li>
              <div className="font-semibold">Final Project:</div>
              Type-2 Fuzzy Logic System Model Design for Determination of M-Learning Usage Behavior Based On The Self-Efficacy and Facilitating Conditions Room Lighting Facility (Score: A)
            </li>
          </ul>
        </div> */}

        {/* <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
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
        </ul> */}

        {/* <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
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
        </ul> */}

        {/* <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Experience
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>Data Analyst Intern</div>
          <div>PT Gizi Sehat Indonesia (Dietela.id)</div>
          <div className="font-normal">May 2022 – August 2022 (Remote)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              - Successfully analyzed over 400 Dietela’s clients and created the dashboard to get an overview of client demographics and personas using Google Data Studio and Python with Pandas 
            </li>
            <li>
              - Accomplished to use Natural Language Processing (NLP) to process the data with text type using Sastrawi library
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>Head of Communication and Information Department</div>
          <div>Himpunan Mahasiswa Teknik Fisika, ITS</div>
          <div className="font-normal">Nov 2020 – Dec 2021 (Surabaya)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              - Responsible for conceptualizing 5 departmental work programs that run for 10 months. 
            </li>
            <li>
              - Succeeded in creating a social media content scheduling management system for Instagram and LINE Official Accounts.
            </li>
            <li>
              - Rewarded as one of the Best Departments in HMTF ITS 2020/2021
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full px-3 mt-3 font-medium text-left text-prussian-blue">
          <div>Staff of Brand and Information Management</div>
          <div>AIESEC in Surabaya</div>
          <div className="font-normal">Feb 2021 – Jan 2022 (Surabaya)</div>
          <ul className="max-w-2xl mx-auto font-normal text-celadon-blue">
            <li>
              - Produced branding content of AIESEC in Surabaya on Instagram and LinkedIn.
            </li>
            <li>
              - Awarded the title of Member of The Month in February and March for the Staff category. 
            </li>
            <li>
              - Succeeded in drafting more than 20 contents in a month. 
            </li>
            <li>
              - Enabled to get a 25% increase in followers for 5 months. 
            </li>
          </ul>
        </div> */}

        {/* <div className="flex flex-col justify-center w-full max-w-2xl mt-3 font-medium text-prussian-blue">
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
        </ul> */}

        {/* <div className="mt-8 text-xl font-semibold text-center text-prussian-blue">
          Technical Skills
        </div> */}

        {/* <ul className="max-w-2xl mx-auto text-celadon-blue">
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
        </ul> */}
      </div>
    </div>
  );
}
