'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Élégance Drive
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-center mb-10"
      >
        Premium chaufförservice för dina exklusiva behov – från flygplatstransfer till bröllop.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Flygplatstransfer",
            description: "Anländ med stil – våra chaufförer ser till att du når flyget i tid och komfort."
          },
          {
            title: "Event & Nattliv",
            description: "Låt kvällen börja redan i bilen – exklusiv transport till klubbar och event."
          },
          {
            title: "Bröllop & Bal",
            description: "Förvandla din stora dag till en lyxupplevelse med våra eleganta bilar."
          }
        ].map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <Card className="rounded-2xl shadow-lg h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-xl">
          Boka Nu
        </Button>
      </div>
    </div>
  );
}