'use client'

import FlightEnvelopeForm from "@/app/ui/flight-envelope-viewer/FlightEnvelopeForm";
import VNDiagram from "@/app/ui/flight-envelope-viewer/VNDiagram";
import { useState } from "react";

export default function FlightEnvelope() {
  const [v_a, setV_a] = useState(0);
  const [v_stall, setV_stall] = useState(0);
  const [v_max, setV_max] = useState(0);
  const [n_limit, setN_limit] = useState(0);
  const [n_max, setN_max] = useState(0);
  const [n_min, setN_min] = useState(0);
  
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Flight Envelope Viewer
      </h1>
      <div className="my-2">
        <FlightEnvelopeForm />
      </div>
      <div className="my-2">
        <VNDiagram />
      </div>
    </div>
  )
}