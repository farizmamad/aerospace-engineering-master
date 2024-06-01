import { List } from 'antd';

function TakeOffSimulationGoal() {
  const items = [
    '(a) Mengenal kasus all-engine operating dan one-engine inoperating pada take-off',
    '(b) Memahami fenomena yang mungkin terjadi pada kedua kasus take-off',
    '(c) Mensimulasikan take-off Harbin Y-12 (IV) pada kedua kasus take-off',
  ];
  return <List
    mode='right'
    size="small"
    bordered
    dataSource={items}
    renderItem={(item) => <List.Item>{item}</List.Item>}
  />;
}

export default TakeOffSimulationGoal;