import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: ReactNode;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa itu Jendral Store?",
    answer:
      "Jendral Store adalah platform yang menyediakan layanan joki game, serta jual beli akun dan item ID dari berbagai game Delta Force. Kami berkomitmen untuk memberikan pengalaman bermain yang lebih praktis, terjangkau, dan aman bagi setiap pemain.",
    value: "item-1",
  },
  {
    question: "Apa yang membedakan Jendral Store dari platform lainnya?",
    answer:
      "Jendral Store menawarkan layanan yang murah, aman, legal, dan terpercaya. Kami selalu menjaga transparansi harga, memberikan keamanan transaksi yang terjamin, serta memastikan bahwa semua layanan kami sesuai dengan ketentuan yang berlaku",
    value: "item-2",
  },
  {
    question: "Layanan apa saja yang tersedia di Jendral Store?",
    answer: (
      <>
        <p>Joki Game: Layanan profesional untuk membantu meningkatkan value atau pencapaian tertentu dalam game.</p>
        <p>Jual beli akun: Kami menyediakan transaksi yang aman untuk pembelian akun game Delta Force.</p>
      </>
    ),
    value: "item-3",
  },
  {
    question: "Apakah ada garansi untuk layanan joki game yang kami gunakan?",
    answer: "Ya, kami memberikan garansi untuk layanan joki game yang kami tawarkan. Jika ada masalah atau ketidakpuasan terkait layanan, Anda dapat menghubungi tim kami untuk mendapatkan solusi yang sesuai.",
    value: "item-4",
  },
  {
    question:
      "Metode pembayaran apa saja yang tersedia di Jendral Store?",
    answer:
      "Kami menerima berbagai metode pembayaran yang aman dan mudah, termasuk transfer bank, e-wallet, serta pembayaran melalui platform pihak ketiga terpercaya.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Masih Mempunyai pertanyaan?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Hubungi Kami
        </a>
      </h3>
    </section>
  );
};
