import { Timeline } from 'antd';

function TakeOffSimulationGoal() {
  const items = [
    { label: 'Mengenal kasus all-engine operating dan one-engine inoperating pada take-off' },
    { label: 'Memahami fenomena yang mungkin terjadi pada kedua kasus take-off' },
    { label: 'Mensimulasikan take-off Harbin Y-12 (IV) pada kedua kasus take-off' },
  ];
  return <Timeline mode='right' items={items} />;
}

export default TakeOffSimulationGoal;