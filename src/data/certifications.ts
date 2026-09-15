/**
 * Certifications — edX course certificates, kept as a secondary credential list.
 *
 * Deliberately NOT given equal visual weight to work experience: these are
 * coursework from 2019–2022, before I started engineering professionally.
 *
 * NOTE: individual completion years are not recorded anywhere in the source
 * material, so no per-certificate year is claimed here. The platform-level
 * range below comes from the resume.
 */

export const certificationPeriod = '2019 — 2022';
export const certificationPlatform = 'edX';

export type Certification = {
  name: string;
  issuer: string;
  credentialId: string;
  url: string;
  pdf: string | null;
};

export const certifications: Certification[] = [
  {
    name: "Simplifying Machine Learning Application Development",
    issuer: "Amazon Web Services",
    credentialId: "086675e9bc7242bc890439c48f46469b",
    url: "https://courses.edx.org/certificates/086675e9bc7242bc890439c48f46469b",
    pdf: "/cert/certificate/AWS OTP-AWSD4 Certificate _ edX.pdf",
  },
  {
    name: "AWS IoT: Developing and Deploying an Internet of Things",
    issuer: "Amazon Web Services",
    credentialId: "ade48f1c8dce47e1828be530ec3bf357",
    url: "https://courses.edx.org/certificates/ade48f1c8dce47e1828be530ec3bf357",
    pdf: "/cert/certificate/AWS OTP-AWSD5 Certificate _ edX.pdf",
  },
  {
    name: "Amazon DynamoDB: Building NoSQL Database-Driven Applications",
    issuer: "Amazon Web Services",
    credentialId: "083939a590c7402e8801522b2215a437",
    url: "https://courses.edx.org/certificates/083939a590c7402e8801522b2215a437",
    pdf: "/cert/certificate/AWS OTP-AWS-D6 Certificate _ edX.pdf",
  },
  {
    name: "AWS: Cloud Security",
    issuer: "Amazon Web Services",
    credentialId: "37e2d540dad840cb896d3922ee9a013f",
    url: "https://courses.edx.org/certificates/37e2d540dad840cb896d3922ee9a013f",
    pdf: "/cert/certificate/AWS OTP-AWSD7 Certificate _ edX.pdf",
  },
  {
    name: "Building Containerized Applications on AWS",
    issuer: "Amazon Web Services",
    credentialId: "7ef43fc28ece401a98afd031f71f1ad0",
    url: "https://courses.edx.org/certificates/7ef43fc28ece401a98afd031f71f1ad0",
    pdf: "/cert/certificate/AWS OTP-AWSD8 Certificate _ edX.pdf",
  },
  {
    name: "Migrating to the AWS Cloud",
    issuer: "Amazon Web Services",
    credentialId: "a84200473ee54a739f405e7ce7447ed8",
    url: "https://courses.edx.org/certificates/a84200473ee54a739f405e7ce7447ed8",
    pdf: "/cert/certificate/AWS OTP-AWSD9 Certificate _ edX.pdf",
  },
  {
    name: "Machine Learning for Data Science and Analytics",
    issuer: "Columbia University",
    credentialId: "8a054d728e754ed5b095cfc6b8622a4d",
    url: "https://courses.edx.org/certificates/8a054d728e754ed5b095cfc6b8622a4d",
    pdf: "/cert/certificate/ColumbiaX DS102X Certificate _ edX.pdf",
  },
  {
    name: "AI for Everyone: Master the Basics",
    issuer: "IBM",
    credentialId: "2676517a55934db69580aa5894dcbb20",
    url: "https://courses.edx.org/certificates/2676517a55934db69580aa5894dcbb20",
    pdf: "/cert/certificate/IBM AI0101EN Certificate _ edX.pdf",
  },
  {
    name: "Cloud Development with HTML, CSS, and JavaScript",
    issuer: "IBM",
    credentialId: "7d2100026f044e95a603b873f487cd00",
    url: "https://courses.edx.org/certificates/7d2100026f044e95a603b873f487cd00",
    pdf: "/cert/certificate/IBM CAD101EN Certificate _ edX.pdf",
  },
  {
    name: "Cloud Applications with Node.js and React",
    issuer: "IBM",
    credentialId: "e1704a2314914587850c6a836d095462",
    url: "https://courses.edx.org/certificates/e1704a2314914587850c6a836d095462",
    pdf: "/cert/certificate/IBM CAD220EN Certificate _ edX.pdf",
  },
  {
    name: "Cloud Computing",
    issuer: "IBM",
    credentialId: "c9cba5f677ba4c8e82b47a8337f7ddb8",
    url: "https://courses.edx.org/certificates/c9cba5f677ba4c8e82b47a8337f7ddb8",
    pdf: "/cert/certificate/IBM CC0101EN Certificate _ edX.pdf",
  },
  {
    name: "Data Science",
    issuer: "IBM",
    credentialId: "c51f7ac0a70d4a1497d003e5c9afff24",
    url: "https://courses.edx.org/certificates/c51f7ac0a70d4a1497d003e5c9afff24",
    pdf: "/cert/certificate/IBM DS0101EN Certificate _ edX.pdf",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    credentialId: "698a4e452bef4e03b5077ada62199939",
    url: "https://courses.edx.org/certificates/698a4e452bef4e03b5077ada62199939",
    pdf: "/cert/certificate/IBM PY0101EN Certificate _ edX.pdf",
  },
  {
    name: "LinuxFoundationX",
    issuer: "The Linux Foundation",
    credentialId: "076e3c6694444b7bb73540741242b551",
    url: "https://courses.edx.org/certificates/076e3c6694444b7bb73540741242b551",
    pdf: "/cert/certificate/LinuxFoundationX LFS101x Certificate _ edX.pdf",
  },
  {
    name: "Business Considerations for 5G with Edge, IoT, and AI",
    issuer: "The Linux Foundation",
    credentialId: "5f7bf5b8159e4e11a6267653354267bf",
    url: "https://courses.edx.org/certificates/5f7bf5b8159e4e11a6267653354267bf",
    pdf: "/cert/certificate/LinuxFoundationX LFS110x Certificate _ edX.pdf",
  },
  {
    name: "Business Considerations for Edge Computing",
    issuer: "The Linux Foundation",
    credentialId: "f220fab5f5954c1a8611e1a65c99352d",
    url: "https://courses.edx.org/certificates/f220fab5f5954c1a8611e1a65c99352d",
    pdf: "/cert/certificate/LinuxFoundationX LFS113x Certificate _ edX.pdf",
  },
  {
    name: "Kubernetes",
    issuer: "The Linux Foundation",
    credentialId: "7530257869874facac2fca7dd0026a6a",
    url: "https://courses.edx.org/certificates/7530257869874facac2fca7dd0026a6a",
    pdf: "/cert/certificate/LinuxFoundationX LFS158x Certificate _ edX.pdf",
  },
  {
    name: "Product Management Fundamentals",
    issuer: "University System of Maryland",
    credentialId: "6041da2108a042188800d4fa3fed9c64",
    url: "https://courses.edx.org/certificates/6041da2108a042188800d4fa3fed9c64",
    pdf: "/cert/certificate/USMx ENES608.1 Certificate _ edX.pdf",
  },
  {
    name: "Preparing to Network in English",
    issuer: "University of Washington",
    credentialId: "d4ebacc2089045ccabb8cc43d2a39db9",
    url: "https://courses.edx.org/certificates/d4ebacc2089045ccabb8cc43d2a39db9",
    pdf: "/cert/certificate/UWashingtonX BNET001 Certificate _ edX.pdf",
  },
  {
    name: "Building Your Cybersecurity Toolkit",
    issuer: "University of Washington",
    credentialId: "e572947c072d4ae4ac8e24351c1c368d",
    url: "https://courses.edx.org/certificates/e572947c072d4ae4ac8e24351c1c368d",
    pdf: "/cert/certificate/UWashingtonX CYB003x Certificate _ edX.pdf",
  },
  {
    name: "Finding Your Cybersecurity Career Path",
    issuer: "University of Washington",
    credentialId: "5a7ad1b2e8fe410b88ddb80bd494c2af",
    url: "https://courses.edx.org/certificates/5a7ad1b2e8fe410b88ddb80bd494c2af",
    pdf: "/cert/certificate/UWashingtonX CYB004x Certificate _ edX.pdf",
  },
];
