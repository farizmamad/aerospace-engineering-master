import { Table } from 'antd';

function TakeOffSimulationCase() {
  const dataSource = [
    {
      number: '1',
      key: '1',
      case: 'All-engine operating tanpa rotasi',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '0',
    },
    {
      number: '2',
      key: '2',
      case: 'All-engine operating dengan rotasi 2 deg/s',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '2',
    },
    {
      number: '3',
      key: '3',
      case: 'All-engine operating dengan rotasi 4 deg/s',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '4',
    },
    {
      number: '4',
      key: '4',
      case: 'All-engine operating dengan kemiringan runway menanjak 2 deg',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '2',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '2',
    },
    {
      number: '5',
      key: '5',
      case: 'All-engine operating pada ketinggian 700 m',
      elevation: '700',
      airDensity: '1,127',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '2',
    },
    {
      number: '6',
      key: '6',
      case: 'All-engine operating dengan angin dari depan 1,83 m/s',
      elevation: '700',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '1,83',
      rotateSpeed: '2',
    },
    {
      number: '7',
      key: '7',
      case: 'All-engine operating dengan setting Thrust 80%',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '1,83',
      rotateSpeed: '2',
    },
    {
      number: '8',
      key: '8',
      case: 'One engine inoperating, Continue Take-off (CTO)',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '2',
    },
    {
      number: '9',
      key: '9',
      case: 'One engine inoperating, Abort Take-off (ATO)',
      elevation: '0',
      airDensity: '1,225',
      runwaySlope: '0',
      frictionCoefficient: '0,0165',
      windSpeed: '0',
      rotateSpeed: '2',
    },
  ];

  const columns = [
    {
      title: '#',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Kasus',
      dataIndex: 'case',
      key: 'case',
    },
    {
      title: 'Ketinggian, h [m]',
      dataIndex: 'elevation',
      key: 'elevation',
    },
    {
      title: 'Kerapatan udara, ρ [kg/m3]',
      dataIndex: 'airDensity',
      key: 'airDensity',
    },
    {
      title: 'Kemiringan runway [deg]',
      key: 'runwaySlope',
      dataIndex: 'runwaySlope',
    },
    {
      title: 'Koefisien friksi, μ',
      dataIndex: 'frictionCoefficient',
      key: 'frictionCoefficient',
    },
    {
      title: 'Kecepatan angin, V_w [m/s]',
      dataIndex: 'windSpeed',
      key: 'windSpeed',
    },
    {
      title: 'Kecepatan rotate [deg/s]',
      dataIndex: 'rotateSpeed',
      key: 'rotateSpeed',
    }
  ];

  return <Table dataSource={dataSource} columns={columns} />;;
}

export default TakeOffSimulationCase;