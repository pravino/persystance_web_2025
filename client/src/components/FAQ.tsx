import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StructuredData from "./StructuredData";

export default function FAQ() {
  const faqs = [
    {
      question: "How quickly can you deliver a production-ready MVP?",
      answer: "We deliver production-ready MVPs in 2 weeks with full launch support in 30 days. Our proven process includes requirements gathering, rapid development, testing, and deployment. We've completed 200+ projects using this methodology."
    },
    {
      question: "What managed services do you provide for enterprise clients?",
      answer: "We provide comprehensive managed services including 24/7 cloud infrastructure monitoring, ERP system maintenance, security updates, performance optimization, backup management, and disaster recovery. Our clients like Supreme Global, Prime Global, and Work Wear Uniform Group trust us with their complete cloud infrastructure and custom ERP systems."
    },
    {
      question: "Do you offer Service Level Agreements (SLAs) for uptime and support?",
      answer: "Yes, we provide enterprise-grade SLAs with 99.9% uptime guarantees, 24/7 monitoring, incident response within 30 minutes for critical issues, and dedicated support channels. Our managed services include proactive monitoring and maintenance to prevent downtime."
    },
    {
      question: "How do you ensure security and compliance for enterprise applications?",
      answer: "We implement industry-standard security practices including ISO 27001, SOC 2, and GDPR compliance. All applications include encryption at rest and in transit, regular security audits, penetration testing, secure authentication, role-based access control, and comprehensive audit logging."
    },
    {
      question: "Can you integrate with our existing ERP or enterprise systems?",
      answer: "Yes, we specialize in ERP development and integration. We've built complete ERP systems from scratch for manufacturing companies like Work Wear Uniform Group, handling everything from raw material procurement to final product shipment. We can integrate with existing systems or build custom solutions."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including manufacturing, supply chain, e-commerce, SaaS, fintech, healthcare, hospitality, and transportation. Our portfolio includes ERP systems for manufacturing, booking platforms for hotels and taxis, wallet applications, and Web3 gaming platforms."
    },
    {
      question: "How much does it cost to build an MVP or enterprise application?",
      answer: "Our pricing is transparent and based on project scope. We offer 50% cost optimization compared to traditional development by using rapid prototyping methodologies. Contact us for a custom quote within 24 hours. Most MVPs range from $15,000-$50,000 depending on complexity."
    },
    {
      question: "Do you provide ongoing maintenance and support after launch?",
      answer: "Yes, we offer comprehensive managed services packages including infrastructure management, application maintenance, feature updates, security patches, performance monitoring, and 24/7 support. Our enterprise clients trust us with their complete technology stack."
    },
    {
      question: "Can you scale our application as our business grows?",
      answer: "Absolutely. All our applications are built with scalability in mind using cloud-native architectures. We've scaled systems from initial MVP to handling thousands of concurrent users. Our managed services include capacity planning, performance optimization, and infrastructure scaling."
    },
    {
      question: "What technologies and frameworks do you use?",
      answer: "We use modern, battle-tested technologies including React, Node.js, Python, PostgreSQL, MongoDB, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. We select the best technology stack for your specific requirements ensuring long-term maintainability and performance."
    },
    {
      question: "Do you work with clients in the USA, UK, Germany, and Middle East?",
      answer: "Yes, we serve clients worldwide including Tier 1 markets (USA, UK, Germany) and Tier 2 markets (UAE, Saudi Arabia, Middle East). We have experience with international compliance requirements, multi-region deployments, and working across different time zones."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "We provide daily progress updates via your preferred channel (WhatsApp, Slack, Email), weekly video calls, and access to our project management dashboard. You'll have direct access to our development team and see real-time progress throughout the project."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <StructuredData type="faq" faqItems={faqs} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our MVP development and managed services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-muted/30"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
