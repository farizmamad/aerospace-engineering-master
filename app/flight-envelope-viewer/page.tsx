'use client'

import FlightEnvelopeForm from "@/app/ui/flight-envelope-viewer/FlightEnvelopeForm";
import VNDiagram from "@/app/ui/flight-envelope-viewer/VNDiagram";
import { useActionState } from "react";
import { calculateFlightEnvelope, FlightEnvelopeState } from "@/app/lib/actions/flight-envelope-viewer";

export default function FlightEnvelope() {
  /** Configure action */
  const initialState: FlightEnvelopeState = { message: null, errors: {} };
  const [state, formAction] = useActionState(calculateFlightEnvelope, initialState);
  
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Flight Envelope Viewer
      </h1>
      <div className="my-2">
        <FlightEnvelopeForm action={formAction} state={state} />
      </div>
      <div className="my-2">
        {state.data && <VNDiagram state={state}/>}
      </div>
    </div>
  )
}