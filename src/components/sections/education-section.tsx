import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import Button
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Import Dialog components

interface EducationSectionProps {
  id: string;
}
interface EducationSectionProps {
  id: string;
}

const educationData = [
  {
    title: "Google IT Support Professional Certificate",
    institution: "Coursera (Google)",
    date: "2025",
    description: "Completed a comprehensive program covering troubleshooting, customer service, networking, operating systems, system administration, and security.",
    certificateLink: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/B0T8HAP9D6EW"
  },
  {
    title: "Master of Business Information Systems (MBIS)",
    institution: "Tribhuvan University (Example College)",
    date: "2022 - 2025",
    description: "Focused on core IT principles, software development, database management, and networking fundamentals."
  },
  // Add more education or certifications here
];
// Demo data for all certificates
const allCertificates = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Coursera (Google)",
    date: "2023",
    link: "YOUR_GOOGLE_CERTIFICATE_LINK_HERE",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    link: "#", // Replace with actual link
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google",
    date: "2022",
    link: "#", // Replace with actual link
  },
  {
    name: "CCNA (Cisco Certified Network Associate)",
    issuer: "Cisco",
    date: "2022",
    link: "#", // Replace with actual link
  },
  {
    name: "CompTIA A+ Certification",
    issuer: "CompTIA",
    date: "2022",
    link: "#", // Replace with actual link
  },
  // Add more certificate objects here
];
export default function EducationSection({ id }: EducationSectionProps) {
  return (
    <Container id={id} className="bg-secondary/30">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-12 text-center">Education & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl font-semibold font-heading">{edu.title}</CardTitle>
                <Award className="w-8 h-8 text-primary" />
              </div>
              <CardDescription className="text-sm">
                {edu.institution} | {edu.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">{edu.description}</p>
              {edu.title === "Google IT Support Professional Certificate" && ( // Conditionally render button
                <Button asChild variant="outline">
                  <a href={edu.certificateLink} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Certificates Button and Dialog */}
      <div className="mt-12 text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View All Certificates</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto custom-dialog-animation">
            <DialogHeader>
              <DialogTitle>All Certifications</DialogTitle>
              <DialogDescription>
                Here is a list of all my certifications.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              {allCertificates.map((cert, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-sm text-foreground/80">{cert.issuer} | {cert.date}</p>
                  {cert.link && (
                    <Button asChild variant="link" className="px-0 mt-1">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
}
