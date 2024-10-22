import FlightEnvelopeForm from "@/app/ui/flight-envelope-viewer/FlightEnvelopeForm";

export default function FlightEnvelope() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Flight Envelope Viewer
      </h1>
      <FlightEnvelopeForm />
    </div>
  )
}