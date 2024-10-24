import { Line, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, ReferenceLine } from 'recharts';

export type VNDiagramChartProp = {
  n_max: number,
  n_min: number,
  v_a: number,
  v_c: number,
  v_d: number,
  v_s: number,
  v_n: { velocity: number, nMax?: number, nMin?: number }[],
  // v_stall_upper: number,
  // v_stall_lower: number,
};

export default function VNDiagramChart({
  n_max,
  n_min,
  v_a,
  v_c,
  v_d,
  v_s,
  v_n,
  // v_stall_upper,
  // v_stall_lower,
}: VNDiagramChartProp) {
  return (
  <LineChart width={730} height={250} data={v_n}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" dataKey="velocity" scale="linear" />
    <YAxis domain={[-2, 3]} scale="linear" allowDataOverflow={true} />
    <Line type="linear" dataKey="nMax" stroke="#8884d8" />
    <Line type="linear" dataKey="nMin" stroke="#82ca9d" />
    <ReferenceLine segment={[{ x: 0, y: 0 }, { x: v_d, y: 0 }]} stroke="black" />
    <ReferenceLine segment={[{ x: 0, y: 1 }, { x: v_d, y: 1 }]} stroke="black" strokeDasharray="3 3" />
    <ReferenceLine segment={[{ x: v_a, y: n_max }, { x: v_d, y: n_max }]} stroke="red" />
    <ReferenceLine segment={[{ x: v_s, y: n_min }, { x: v_c, y: n_min }]} stroke="red" />
    <ReferenceLine segment={[{ x: v_c, y: n_min }, { x: v_d, y: 0 }]} stroke="red" />
    <ReferenceLine segment={[{ x: v_s, y: 1 }, { x: v_s, y: -1 }]} stroke="red" label="v_s" />
    <ReferenceLine segment={[{ x: v_a, y: n_max }, { x: v_a, y: n_min }]} stroke="red" label="v_a" />
    <ReferenceLine segment={[{ x: v_c, y: n_max }, { x: v_c, y: n_min }]} stroke="red" label="v_c"  />
    <ReferenceLine segment={[{ x: v_d, y: n_max }, { x: v_d, y: 0 }]} stroke="red" label="v_d"  />
  </LineChart>

  )
}