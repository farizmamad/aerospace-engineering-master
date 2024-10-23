'user server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type FlightEnvelopeState = {
  errors?: {
    weight?: string[],
    wing_area?: string[],
    cl_max?: string[],
    altitude?: string[],
    thrust?: string[],
    cd?: string[],
    v_stall?: string[],
    aspect_ratio?: string[],
    mach_number?: string[],
    load_factor?: string[],
    air_density?: string[],
  };
  message: string | null;
};

const FlightEnvelopeFormSchema = z.object({
  weight: z.number(),
  wing_area: z.number(),
  cl_max: z.number(),
  altitude: z.number(),
  thrust: z.number(),
  cd: z.number(),
  v_stall: z.number(),
  aspect_ratio: z.number(),
  mach_number: z.number(),
  load_factor: z.number(),
  air_density: z.number(),
});

export async function calculateFlightEnvelope(prevState: FlightEnvelopeState, formData: FormData) {
  const validatedFields = FlightEnvelopeFormSchema.safeParse({
    weight: formData.get('weight'),
    wing_area: formData.get('wing_area'),
    cl_max: formData.get('cl_max'),
    altitude: formData.get('altitude'),
    thrust: formData.get('thrust'),
    cd: formData.get('cd'),
    v_stall: formData.get('v_stall'),
    aspect_ratio: formData.get('aspect_ratio'),
    mach_number: formData.get('mach_number'),
    load_factor: formData.get('load_factor'),
    air_density: formData.get('air_density'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Calculate Flight Envelope',
    };
  }

  const {
    weight,
    wing_area,
    cl_max,
    altitude,
    thrust,
    cd,
    v_stall,
    aspect_ratio,
    mach_number,
    load_factor,
    air_density,
  } = validatedFields.data;
  
  try {
    const vStall = Math.sqrt((2 * weight)/(air_density * wing_area * cl_max));
    /**
     * 1. Stall Speed (V_stall):
      Stall speed is the minimum speed at which the aircraft can maintain level flight without stalling. It is given by:

      Vstall =nsqrt(2W/(ρSCl_max))  ​	     ​	
      
      Where:
      W = aircraft weight (N)
      ρ = air density (kg/m³)
      S = wing area (m²)
      Cl_max = maximum lift coefficient

      2. Maximum Speed (V_max):
      Maximum speed is determined by the drag and thrust balance. Assuming no acceleration, the speed where thrust equals drag is the upper boundary:

      T
      =
      1
      2
      ρ
      V
      max
      2
      S
      C
      d
      T= 
      2
      1
      ​	
      ρV 
      max
      2
      ​	
      SC 
      d
      ​	
      
      Where:

      T
      T = available thrust (N)
      C
      d
      C 
      d
      ​	
        = drag coefficient
      You can solve for 
      V
      max
      V 
      max
      ​	
      :

      V
      max
      =
      2
      T
      ρ
      S
      C
      d
      V 
      max
      ​	
      = 
      ρSC 
      d
      ​	
      
      2T
      ​	
      
      ​	
      
      3. Load Factor (n):
      The load factor is the ratio of lift to weight and varies with maneuvers. The limit load factor is determined by aircraft structural design and defines the upper boundary of the flight envelope in terms of g-force:

      n
      limit
      =
      L
      W
      =
      1
      2
      ρ
      V
      2
      S
      C
      l
      W
      n 
      limit
      ​	
      = 
      W
      L
      ​	
      = 
      W
      2
      1
      ​	
      ρV 
      2
      SC 
      l
      ​	
      
      ​	
      
      For a given speed 
      V
      V, this can be expressed as:

      n
      (
      V
      )
      =
      2
      W
      C
      l
      ρ
      S
      V
      2
      n(V)= 
      ρSV 
      2
      
      2WC 
      l
      ​	
      
      ​	
      
      At maneuvering speed (
      V
      A
      V 
      A
      ​	
      ), the aircraft can sustain maximum load without structural damage, and this is typically where the curve in the V-n diagram starts bending.

      4. Maximum Operational Altitude (Ceiling):
      Operational ceiling is the altitude where the aircraft can no longer maintain a climb rate of 100 ft/min due to the reduction in available thrust and lift. It's found iteratively but generally related to the relationship between air density and thrust.

      5. V-n Diagram (Velocity vs. Load Factor):
      The V-n diagram plots load factor 
      n
      n against airspeed 
      V
      V. It includes:

      Stall boundary: Lower-left curve where lift cannot support the aircraft's weight.
      Structural limits: Upper boundary defined by maximum allowable g-forces.
      Combining for Flight Envelope:
      The flight envelope is the region enclosed by:

      V_stall: Left boundary.
      V_max: Right boundary.
      Positive and Negative Load Factors (n_max and n_min): Upper and lower curves determined by the load factor limits and structural strength.
      This set of equations helps define the aircraft's safe operational range.
     */
  } catch (err) {
    console.error(err);
    return {
      message: 'Database Error: Failed to Update Invoice.',
    };
  }

  revalidatePath('/dashboard/orders');
  redirect('/dashboard/orders');
}