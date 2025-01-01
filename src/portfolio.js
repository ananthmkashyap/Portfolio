/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kashyap's Profile",
  title: "Hi all, I'm Ananth Mahesh Kashyap",
  subTitle: emoji(
    "A dedicated  ☁️ Cloud DevOps Engineer ☁️ with expertise in architecting and automating scalable infrastructure, leveraging tools like Docker, Kubernetes, Terraform, and CI/CD pipelines , and optimizing cloud environments for seamless deployment and performance 🚀."
  ),
  resumeLink: 
    "https://drive.google.com/file/d/1xKxeN3338eip93uE-0uqWWPpemd0AgNZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ananthmkashyap",
  linkedin: "https://www.linkedin.com/in/ananth-m-kashyap-a1bbb2189/",
  gmail: "ananth.m.kashyap@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE CLOUD DEVOPS ENGINEER WHO BUILDS SCALABLE AND RESILIENT INFRASTRUCTURE",
  skills: [
    "⚡ Design and implement scalable, secure, and highly available cloud infrastructure",
    "⚡ Automate deployment pipelines using CI/CD tools like Jenkins, GitHub Actions, or GitLab CI",
    "⚡ Monitor and optimize system performance with tools like Prometheus, Grafana, and CloudWatch",
    "⚡ Containerize and orchestrate applications using Docker and Kubernetes",
    "⚡ Implement Infrastructure as Code (IaC) using Terraform or AWS CloudFormation",
    "⚡ Ensure high reliability and disaster recovery with backup and failover strategies",
    "⚡ Integrate third-party services and APIs across cloud platforms like AWS and Azure"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Amazon Web Services",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "GitHub Actions", 
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "CICD",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Powershell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Confluence",
      fontAwesomeClassname: "fab fa-confluence"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universität Stuttgart",
      logo: require("./assets/images/unistuttgart_logo.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "October 2022 - Present",
    },
    {
      schoolName: "Dr. Ambedkar Institute of Technology",
      logo: require("./assets/images/dr.ait_logo.jpg"),
      subHeader: "Bachelor of Technology in Electronics and Communication",
      duration: "September 2016 - September 2020",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Infrastructure As Code (Terraform)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Amazon Web Services (AWS)",
      progressPercentage: "60%"
    },
    {
      Stack: "Microsoft Azure",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Master Thesis Student",
      company: "Bosch Rexroth",
      companylogo: require("./assets/images/bosch.jpg"),
      date: "December 2024 – Present",
      descBullets: [
        "Title: Evaluating Cloud-Native Approaches for a Knowledge Synchronization System:A Comparative Analysis Across Various Cloud Deployment Types",
      ]
    },
    {
      role: "Cloud DevOps Engineer",
      company: "Bosch Rexroth",
      companylogo: require("./assets/images/bosch.jpg"),
      date: "May 2024 – Nov 2024",
      descBullets: [
        "Automated the process of deploying architecture diagrams to confluence with GitHub Actions.",
        "Developed a CI Pipeline to run Integration tests using GitHub Actions."
      ]
    },
    {
      role: "Cloud DevOps Engineer",
      company: "ETAS",
      companylogo: require("./assets/images/etas_logo.png"),
      date: "Feb 2023 – Apr 2024",
      descBullets: [
        "EKS cluster provisioning on AWS using Terraform as IAC.",
        "Responsible for implementing Karpenter, which is a solution for Cluster Autoscaler in AWS EKS.",
        "Deployment of self-hosted Github Runner in conjunction with an EKS cluster to run workflows.",
        "Created GHA workflow to run terraform repo's as part of automating CI/CD pipeline."
      ]
    },
    {
      role: "Site Reliabilty Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs_logo.png"),
      date: "Jan 2019 – Sep 2022",
      descBullets: [
        "Migration of Cloud Infrastructure from Cloudformation to Terraform.",
        "Creating infrastructure alerts using New-Relic.",
        "Provisioned Servers and deployed features using Puppet.",
        "Configured the New-Relic Infrastructure & APM for the .NET Application which is hosted on Windows Servers.",
        "AMI Rotation for Windows Servers"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects undertaken during my under and post graduate",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Kubernetes-driven ML Workloads: Metrics for Optimization",
      projectDesc: "Research was conducted on hardware and software-based tools for measuring power consumption of client workloads, with a detailed focus on the Kubernetes Efficient Power Level Exporter (KEPLER), which employs eBPF and machine learning models to estimate power usage at the Kubernetes pod and container level. KEPLER was implemented on a GPU-accelerated Minikube Kubernetes cluster with access to NVIDIA GPUs. Convolutional Neural Network (CNN) and Siamese Network models were trained on the cluster, and power metrics exported by KEPLER were analyzed using Grafana. Patterns in the power consumption metrics of the machine learning models were studied to identify strategies for reducing the workload’s power consumption.",
      footerLink: [ 
        {
          name: "Project_Repo",
          url: "https://github.com/ananthmkashyap/Research_Thesis"
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Cloud Computing Based Gravity Control Security System",
      projectDesc: "In today's modern world, security plays an important role. Every person has precious accessories like gold, jewelry or cash. It is not enough to have these accessories, but security of this is very important, for this purpose we keep them in bank lockers. As people cannot always be near their belongings, a Raspberry Pi based weight monitoring  system which consists of a load cell is used to measure the weight placed on it. A standardized weight is pre-set to the load cell. The change in weight sensed by it is sent to the Raspberry Pi. The Raspberry Pi sends the information to a cloud service which is then retrieved by the android device as an alarm.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Deutsch al Fremdsprache A1.1",
      image: require("./assets/images/Uni-stuttgart_logo.webp"),
      imageAlt: "Deutsch al Fremdsprache",
      footerLink: [ 
        { name: "Certification", url: "https://www.icloud.com/iclouddrive/021lDpt5JEy8acGTLppzEx7IA#Deutsch%5Fals%5FFremdsprahce%5FA1.1" }
      ]
    },
    {
      title: "Deutsch al Fremdsprache A1.2",
      image: require("./assets/images/Uni-stuttgart_logo.webp"),
      imageAlt: "Deutsch al Fremdsprache",
      footerLink: [ 
        { name: "Certification", url: "https://www.icloud.com/iclouddrive/042BWR4c2vlldEvUw95RsGUgA#Deutsch%5Fals%5FFremdsprache%5FA1.2" }
      ]
    },
    {
      title: "Infrastructure Automation with Terraform",
      image: require("./assets/images/Udemy-Logo.webp"),
      imageAlt: "IAC with Terraform",
      footerLink: [ 
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-850afdf6-5db9-4dae-805b-31ed4578c8ff/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "ananth.m.kashyap@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
