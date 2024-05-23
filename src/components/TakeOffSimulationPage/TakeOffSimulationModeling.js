import { Collapse, Descriptions, Image } from 'antd';

function TakeOffSimulationModeling() {
  const specItems = [
    {
      key: '1',
      label: 'Bentang Sayap, b',
      children: '19,2 m',
    },
    {
      key: '2',
      label: 'Luas Sayap, S_w',
      children: '36,9 m^2',
    },
    {
      key: '3',
      label: 'Mean Aerodynamic Chord Sayap',
      children: '',
    },
    {
      key: '4',
      label: 'Maximum Take-off Weight, MTOW',
      children: '5.670 kg',
    },
    {
      key: '5',
      label: 'Maximum Usable Fuel',
      children: '1.230 kg',
    },
    {
      key: '6',
      label: 'Endurance',
      children: '5 jam 15 menit',
    },
    {
      key: '7',
      label: 'Power Tersedia',
      children: '2 x 462 kW',
    },
    {
      key: '8',
      label: 'Chord Flap',
      children: '33% Chord Sayap',
    },
    {
      key: '9',
      label: 'Take-off Flap',
      children: '15 derajat',
    },
    {
      key: '10',
      label: 'Take-off Run',
      children: '370 m',
    },
    {
      key: '11',
      label: 'Take-off to Screen Height',
      children: '490 m',
    },
    {
      key: '12',
      label: 'Velocity Minimum Control',
      children: '35,3 m/s',
    },
    {
      key: '13',
      label: 'Velocity Maximum Flap Extended',
      children: '53,3 m/s',
    },
    {
      key: '14',
      label: 'Maximum Rotate',
      children: '13 derajat',
    },
  ];

  const aerodynamicItems = [
    {
      key: '1',
      label: 'C_L vs Alpha',
      children: '',
    },
    {
      key: '2',
      label: 'C_D vs Alpha',
      children: '',
    },
    {
      key: '3',
      label: 'Thrust vs Velocity',
      children: '',
    },
  ];
  
  const items = [
    {
      key: '1',
      label: 'Spesifikasi dan Performa',
      children: <Descriptions items={specItems} />,
    },
    {
      key: '2',
      label: 'Prediksi Koefisien Aerodinamika',
      children: (
        <div>
          <p>Sumber: Java Foil (Aircraft) dengan airfoil NASA/Langley LS(1)-0417</p>
          <Collapse items={aerodynamicItems} />
        </div>
      ),
    }
  ];
  
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Image
        width={200}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Harbin_Y-12_%28II%29.jpg/1920px-Harbin_Y-12_%28II%29.jpg"
      />
      <h3>Harbin Y-12(IV)</h3>
      <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
    </div>
  );
}

export default TakeOffSimulationModeling;