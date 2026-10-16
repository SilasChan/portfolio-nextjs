export type CloudProject = {
  title: string
  imgURL: string
  description: string
  technologies: string[]
  outcomes: string[]
  mediumURL: string
}

export const cloudProjects: CloudProject[] = [
  {
    title: "Highly Available & Scalable AWS Architecture",
    imgURL: "/aws-high-availability.png",
    description:
      "Designed and built a highly available and scalable AWS architecture, focusing on fault tolerance, reliability and infrastructure scalability.",
    technologies: [
      "AWS",
      "High Availability",
      "Scalability",
      "Cloud Architecture",
    ],
    outcomes: [
      "Designed a cloud architecture with high availability in mind.",
      "Explored infrastructure scalability and fault tolerance.",
      "Documented the architecture and implementation process.",
    ],
    mediumURL:
      "https://medium.com/@silaschan421/building-a-highly-available-scalable-aws-architecture-from-scratch-5481415babac",
  },
  {
    title: "Amazon Polly Text-to-Speech",
    imgURL: "/polly.jpg",
    description:
      "Built an event-driven serverless application that converts uploaded text files into MP3 audio and sends a completion notification.",
    technologies: [
      "Amazon S3",
      "AWS Lambda",
      "Amazon Polly",
      "Amazon SNS",
      "IAM",
      "Python",
    ],
    outcomes: [
      "Triggered AWS Lambda when a text file was uploaded to Amazon S3.",
      "Converted text content into MP3 audio using Amazon Polly.",
      "Stored generated audio files in a separate S3 bucket.",
      "Published processing notifications using Amazon SNS.",
    ],
    mediumURL:
      "https://medium.com/@silaschan421/a-narrator-using-amazon-polly-text-to-speech-a9e796792e2c",
  },
  {
    title: "Static Website Hosting on AWS",
    imgURL: "/static_website.jpg",
    description:
      "Designed and deployed a secure static website architecture using AWS content delivery, DNS and certificate management services.",
    technologies: [
      "Amazon S3",
      "CloudFront",
      "Route 53",
      "AWS Certificate Manager",
      "IAM",
    ],
    outcomes: [
      "Hosted static website files using Amazon S3.",
      "Delivered content globally through Amazon CloudFront.",
      "Configured custom-domain DNS routing using Route 53.",
      "Enabled HTTPS using an ACM SSL/TLS certificate.",
    ],
    mediumURL:
      "https://medium.com/@silaschan421/static-website-hosting-on-aws-be6a42967269",
  },
]
