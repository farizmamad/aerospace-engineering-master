'user server'

import { z } from "zod";

export type FlightEnvelopeState = {
  errors?: {
    air_density?: string[],
    cl_max?: string[],
    v_stall_lower?: string[],
    v_stall_upper?: string[],
    MTOW?: string[],
    wing_area?: string[],
  };
  message: string | null;
  data?: {
    air_density: number,
    cl_max: number,
    v_stall_lower: number,
    v_stall_upper: number,
    wing_area: number,
    MTOW: number,
  };
};

const FlightEnvelopeFormSchema = z.object({
  air_density: z.coerce.number(),
  cl_max: z.coerce.number(),
  v_stall_lower: z.coerce.number(),
  v_stall_upper: z.coerce.number(),
  mtow: z.coerce.number(),
  wing_area: z.coerce.number(),
});

export async function calculateFlightEnvelope(prevState: FlightEnvelopeState, formData: FormData): Promise<FlightEnvelopeState> {
  const validatedFields = FlightEnvelopeFormSchema.safeParse({
    air_density: formData.get('air_density'),
    cl_max: formData.get('cl_max'),
    v_stall_lower: formData.get('v_stall_lower'),
    v_stall_upper: formData.get('v_stall_upper'),
    mtow: formData.get('mtow'),
    wing_area: formData.get('wing_area'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Calculate Flight Envelope',
    };
  }

  const {
    air_density,
    cl_max,
    v_stall_lower,
    v_stall_upper,
    mtow,
    wing_area,
  } = validatedFields.data;
  
  return {
    message: 'successfully calculate flight envelope',
    data: {
      air_density,
      cl_max,
      v_stall_lower,
      v_stall_upper,
      MTOW: mtow,
      wing_area,
    },
  };
}