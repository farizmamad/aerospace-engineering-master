import { FlightEnvelopeState } from '@/app/lib/actions/flight-envelope-viewer';
import dynamic from 'next/dynamic';

const VNDiagramChart = dynamic(() => import('./VNDiagramChart'), { ssr: false });

const cl = [
  -1.064,
  -1.1027,
  -1.1307,
  -1.1541,
  -1.1732,
  -1.1895,
  -1.2036,
  -1.2157,
  -1.2244,
  -1.2311,
  -1.2355,
  -1.2381,
  -1.2386,
  -1.2373,
  -1.2346,
  -1.2304,
  -1.2252,
  -1.2187,
  -1.2109,
  -1.2018,
  -1.1913,
  -1.179,
  -1.1739,
  -1.1607,
  -1.1433,
  -1.1243,
  -1.1044,
  -1.0841,
  -1.0634,
  -1.0422,
  -1.0202,
  -0.9977,
  -0.9787,
  -0.9597,
  -0.9382,
  -0.9162,
  -0.8943,
  -0.8722,
  -0.8497,
  -0.8273,
  -0.808,
  -0.7857,
  -0.7629,
  -0.7399,
  -0.7166,
  -0.6884,
  -0.6515,
  -0.6133,
  -0.5781,
  -0.5408,
  -0.5055,
  -0.4708,
  -0.437,
  -0.4062,
  -0.3831,
  -0.3587,
  -0.3334,
  -0.3075,
  -0.2812,
  -0.2541,
  -0.2271,
  -0.2003,
  -0.1733,
  -0.1463,
  -0.1188,
  -0.091,
  -0.063,
  -0.0349,
  -0.0067,
  0.0216,
  0.0499,
  0.078,
  0.106,
  0.1341,
  0.2177,
  0.2453,
  0.2727,
  0.2998,
  0.3267,
  0.3806,
  0.4072,
  0.4331,
  0.4587,
  0.4843,
  0.5103,
  0.5387,
  0.5707,
  0.6048,
  0.6405,
  0.6759,
  0.7127,
  0.7475,
  0.7706,
  0.795,
  0.819,
  0.8431,
  0.8682,
  0.893,
  0.9178,
  0.9437,
  0.9693,
  0.9941,
  1.0201,
  1.0459,
  1.0711,
  1.0962,
  1.122,
  1.1468,
  1.1715,
  1.1967,
  1.2207,
  1.2452,
  1.2691,
  1.2922,
  1.3157,
  1.3372,
  1.3603,
  1.3814,
  1.4022,
  1.4232,
  1.4424,
  1.4598,
  1.4791,
  1.4964,
  1.5099,
  1.5196,
  1.5285,
  1.5407,
  1.5511,
  1.5596,
  1.5662,
  1.5705,
  1.571,
  1.5653,
  1.5682,
  1.5691,
  1.5667,
  1.5609,
  1.5513,
  1.538,
  1.5206,
  1.4993,
  1.4749,
  1.4479,
  1.4191,
];

const cd = [
  0.1144,
  0.10267,
  0.09336,
  0.08521,
  0.07801,
  0.07159,
  0.06578,
  0.0605,
  0.05581,
  0.05153,
  0.04767,
  0.04418,
  0.04105,
  0.03826,
  0.03575,
  0.03355,
  0.03161,
  0.02992,
  0.02848,
  0.02726,
  0.02622,
  0.02538,
  0.02358,
  0.02243,
  0.02162,
  0.02093,
  0.02029,
  0.01967,
  0.01906,
  0.01849,
  0.01799,
  0.01756,
  0.01675,
  0.01597,
  0.01549,
  0.01506,
  0.01465,
  0.01426,
  0.01391,
  0.01355,
  0.01286,
  0.0125,
  0.01221,
  0.01193,
  0.0117,
  0.01114,
  0.01082,
  0.01053,
  0.01014,
  0.00984,
  0.00952,
  0.00924,
  0.00889,
  0.00841,
  0.00781,
  0.00756,
  0.00736,
  0.00726,
  0.00716,
  0.00705,
  0.00688,
  0.0067,
  0.00651,
  0.00634,
  0.00624,
  0.00619,
  0.00618,
  0.00617,
  0.00616,
  0.00617,
  0.0062,
  0.00622,
  0.00623,
  0.00627,
  0.00647,
  0.00659,
  0.00672,
  0.00687,
  0.00702,
  0.00727,
  0.00735,
  0.00741,
  0.00747,
  0.00757,
  0.00771,
  0.00785,
  0.00802,
  0.00823,
  0.00845,
  0.00864,
  0.00889,
  0.00908,
  0.00932,
  0.00947,
  0.00969,
  0.00992,
  0.0101,
  0.01035,
  0.01061,
  0.0108,
  0.01103,
  0.01136,
  0.01156,
  0.0118,
  0.0121,
  0.01241,
  0.01265,
  0.01298,
  0.01333,
  0.01362,
  0.01402,
  0.01436,
  0.01476,
  0.01522,
  0.01562,
  0.01621,
  0.01661,
  0.01719,
  0.01777,
  0.01829,
  0.01895,
  0.01971,
  0.02026,
  0.02092,
  0.02169,
  0.02267,
  0.02372,
  0.02461,
  0.02569,
  0.027,
  0.0286,
  0.03058,
  0.03312,
  0.03654,
  0.03913,
  0.04205,
  0.04542,
  0.04932,
  0.05378,
  0.05886,
  0.06461,
  0.07112,
  0.07832,
  0.08615,
  0.09437,
];

export default function VNDiagram({ state }: { state: FlightEnvelopeState }) {

  const gravityAccel = 9.81; // m/s^2

  const calculateLift = ({ air_density, velocity, wing_area, cl }: { air_density: number, velocity: number, wing_area: number, cl: number }) => {
    return 0.5 * air_density * velocity * velocity * wing_area * cl;
  };

  const calculatePoundWeight = ({ MTOW }: { MTOW: number }) => {
    return MTOW * 2.205; // convert kilogram to pound
  };

  const calculateLimitManeuveringLoadFactor = ({ poundMTOW }: { poundMTOW: number }) => {
    const n = 2.1 + (24000 / (poundMTOW + 1000));
    if (n > 3.8) return 3.8;
    if (n < 2.5) return 2.5;
    return n;
  };

  const calculateLoadFactor = ({ lift, weight}: { lift: number, weight: number }) => {
    return lift / weight;
  }

  const calculateMinLoadFactor = ({ n_max }: { n_max: number }) => {
    return -0.4 * n_max;
  }

  const calculateStallSpeed = ({ MTOW, air_density, wing_area, cl_max }: { MTOW: number, air_density: number, wing_area: number, cl_max: number }) => {
    return Math.sqrt((2 * MTOW * gravityAccel) / (air_density * wing_area * cl_max)); // m/s
  }

  const calculateCruiseSpeed = ({ poundMTOW }: { poundMTOW: number }) => {
    return 33 * Math.sqrt(poundMTOW / feetWingArea); // knot
  };
  
  if (state?.errors || !state?.data) return <></>;
  
  const {
    air_density,
    cl_max,
    MTOW,
    wing_area
  } = state.data;
  
  const data: { velocity: number, nMax?: number, nMin?: number }[] = [];

  const poundMTOW = calculatePoundWeight({ MTOW: MTOW });

  /** equation is taken from airworthiness CS 23.337 Limit manoeuvring load factor pasal (a) paragraf (1). */
  const maxPositiveLoadFactor = calculateLimitManeuveringLoadFactor({ poundMTOW: poundMTOW });
  const minNegativeLoadFactor = calculateMinLoadFactor({ n_max: maxPositiveLoadFactor });

  /** 
   * v stall = sqrt((MTOW * gravity accel) / 0.5 * rho * S * Cl_max) 
   * Where Lift max = MTOW * gravity accel
   * */
  const stallSpeed = calculateStallSpeed({ MTOW, air_density, wing_area, cl_max }); // m/s

  /** cruise speed equation from airworthiness CS 23.335 Design airspeeds pasal (a) paragraf (1) poin I */
  const feetWingArea = 10.764 * wing_area;
  const knotCruiseSpeed = calculateCruiseSpeed({ poundMTOW }); // knot
  const cruiseSpeed = knotCruiseSpeed / 1.944; // m/s

  /** dive speed equation from airworthiness CS 23.335 Design airspeeds pasal (b) paragraf (1) */
  const diveSpeed = 1.25 * cruiseSpeed;

  const maneuveringSpeed = stallSpeed * Math.sqrt(maxPositiveLoadFactor);
  
  for (let v = 0; v < 250; v+=10) {
    const maxLift = calculateLift({ air_density, velocity: v, wing_area, cl: cl_max });
    const nMax = calculateLoadFactor({ lift: maxLift, weight: MTOW * gravityAccel });
  
    const minLift = calculateLift({ air_density, velocity: v, wing_area, cl: -cl_max });
    const nMin = calculateLoadFactor({ lift: minLift, weight: MTOW * gravityAccel });
  
    data.push({ velocity: v, nMax, nMin});  
  }

  return (
    <>
      <VNDiagramChart
        n_max={maxPositiveLoadFactor}
        n_min={minNegativeLoadFactor}
        v_a={maneuveringSpeed}
        v_c={cruiseSpeed}
        v_d={diveSpeed}
        v_n={data}
        v_s={stallSpeed}
      />
    </>
  )
}