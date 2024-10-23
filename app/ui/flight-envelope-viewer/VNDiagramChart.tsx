import { Line, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, ReferenceLine } from 'recharts';

export type VNDiagramChartProp = {
  v_n: { velocity: number, nMax?: number, nMin?: number }[],
  v_stall_upper: number,
  v_stall_lower: number,
};

export default function VNDiagramChart({ v_n, v_stall_lower, v_stall_upper }: VNDiagramChartProp) {
  return (
  <LineChart width={730} height={250} data={v_n}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" dataKey="velocity" scale="linear" />
    <YAxis domain={[-2, 5]} scale="linear" allowDataOverflow={true} />
    <Tooltip />
    <Line type="linear" dataKey="nMax" stroke="#8884d8" />
    <Line type="linear" dataKey="nMin" stroke="#82ca9d" />
    <ReferenceLine y="3" stroke="red" label="n max" />
    <ReferenceLine y="-1" stroke="red" label="n min" />
    <ReferenceLine segment={[{ x: v_stall_upper, y: 1 }, { x: v_stall_upper, y: 0 }]} stroke="red" />
    <ReferenceLine segment={[{ x: v_stall_lower, y: 0 }, { x: v_stall_lower, y: -1 }]} stroke="red" />
    <ReferenceLine segment={[{ x: '180', y: 5 }, { x: '180', y: -2 }]} stroke="red" />
    <ReferenceLine segment={[{ x: '180', y: 5 }, { x: '180', y: -2 }]} stroke="red" />
  </LineChart>

  )
}