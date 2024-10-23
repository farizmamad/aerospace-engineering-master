'user server'

import { z } from "zod";

export type FlightEnvelopeState = {
  errors?: {
    air_density?: string[],
    v_stall_lower?: string[],
    v_stall_upper?: string[],
    weight?: string[],
    wing_area?: string[],
  };
  message: string | null;
  data?: {
    air_density: number,
    v_stall_lower: number,
    v_stall_upper: number,
    wing_area: number,
    weight: number,
  };
};

const FlightEnvelopeFormSchema = z.object({
  weight: z.coerce.number(),
  wing_area: z.coerce.number(),
  v_stall_lower: z.coerce.number(),
  v_stall_upper: z.coerce.number(),
  air_density: z.coerce.number(),
});

export async function calculateFlightEnvelope(prevState: FlightEnvelopeState, formData: FormData): Promise<FlightEnvelopeState> {
  const validatedFields = FlightEnvelopeFormSchema.safeParse({
    weight: formData.get('weight'),
    wing_area: formData.get('wing_area'),
    v_stall_lower: formData.get('v_stall_lower'),
    v_stall_upper: formData.get('v_stall_upper'),
    air_density: formData.get('air_density'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Calculate Flight Envelope',
    };
  }

  const {
    air_density,
    v_stall_lower,
    v_stall_upper,
    weight,
    wing_area,
  } = validatedFields.data;
  
  return {
    message: 'successfully calculate flight envelope',
    data: {
      air_density,
      v_stall_lower,
      v_stall_upper,
      weight,
      wing_area,
    },
  };
}