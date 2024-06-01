import { Image, Table } from 'antd';

function TakeOffSimulationResult() {
  const columns = [
    {
      title: 'Perbandingan',
      dataIndex: 'comparison',
      key: 'comparison',
    },
    {
      title: 'V_1 [m/s]',
      dataIndex: 'v1',
      key: 'v1',
    },
    {
      title: 'Balance Field Length',
      dataIndex: 'bfl',
      key: 'bfl',
    }
  ];

  const dataSource = [
    {
      comparison: 'Kalkulasi',
      v1: '33,3',
      bfl: '255',
    },
    {
      comparison: 'Data',
      v1: '37,0',
      bfl: '370',
    }
  ];

  return (
    <>
      <h2>All Engine Operating (AEO)</h2>
      <Image
        width={300}
        src="./assets/takeoff-time-aeo.png"
      />
      <Image
        width={300}
        src="./assets/takeoff-distance-aeo.png"
      />
      <h2>One Engine Inoperating (OEI)</h2>
      <Image
        width={300}
        src="./assets/takeoff-bfl-oei.png"
      />
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
}

export default TakeOffSimulationResult;