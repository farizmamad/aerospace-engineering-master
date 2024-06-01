import { Collapse, Descriptions, Image, List } from 'antd';
import TakeOffSimulationCase from './TakeOffSimulationModeling/TakeOffSimulationCase';

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
      children: '15 deg',
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
      children: '13 deg',
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

  const takeOffEquationOfMotionItems = [
    {
      key: '1',
      label: 'Gaya Angkat (Lift)',
      children: 'L = 0,5qSCL',
    },
    {
      key: '2',
      label: 'Gaya Hambat (Drag)',
      children: 'D = 0,5qSCD',
    },
    {
      key: '3',
      label: 'Gaya Gesek Roda dan Runway(Friction)',
      children: 'F_f = μf(qSCL − Wcos(Φ))',
    },
    {
      key: '4',
      label: 'Gaya akibat kemiringan Runway (Slope)',
      children: 'F_s = Wsin(Φ)',
    },
    {
      key: '5',
      label: 'Percepatan di sumbu x',
      children: 'a_x = (g/W) [T - μW - (C_D - μC_L)qS - Wsin(Φ)]',
    },
    {
      key: '6',
      label: 'Percepatan di sumbu z',
      children: 'a_z = (L - Wcos(Φ))/m',
    },
  ];

  const approachItems = [
    '(a) Slope runway bernilai konstan sepanjang take-off.',
    '(b) Kerapatan udara konstan selama take-off, karena screen height hanya terpisah 10,7 m dari runway.',
    '(c) Koefisien friksi antara roda dan runway mengikuti koefisien friksi dari (ref. Boeing), yaitu: μ = 0,0165.',
    '(d) V_1 = V_R = 1,05V_MC = 37,0 m/s, karena data V_1 dan V_R tidak tersedia.',
    '(e) Balanced Field Length (BFL) = take-off run = 370 m, karena tidak ada data BFL secara spesifik tersedia.',
    '(f) Jarak take-off ke screen height = 490 m.',
    '(g) Sudut rotasi maksimal saat simulasi = 10 deg',
    '(h) Saat pengereman dilakukan, koefisien friksi menjadi μ = 0,38 (ref. Boeing).',
    '(i) Saat all-engine inoperating, defleksi spoiler digambarkan dengan berubahnya nilai C_L dan C_D menjadi -0,73C_L dan 2,272C_D karena data tentang koefisien aerodinamika saat spoiler terdefleksi tidak tersedia.',
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
    },
    {
      key: '3',
      label: 'Persamaan Gerak pada Take-off',
      children: (
        <div>
          <Image
            width={300}
            src='./assets/free-body-diagram-take-off.png'
          />
          <Descriptions column={1} items={takeOffEquationOfMotionItems} />
        </div>
      ),
    },
    {
      key: '3',
      label: 'Pendekatan yang digunakan',
      children: <List
        size="small"
        bordered
        dataSource={approachItems}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />,
    },
    {
      key: '4',
      label: 'Kasus yang Disimulasikan',
      children: <TakeOffSimulationCase />,
    },
  ];
  
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Image
        width={300}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Harbin_Y-12_%28II%29.jpg/1920px-Harbin_Y-12_%28II%29.jpg"
      />
      <h3>Harbin Y-12(IV)</h3>
      <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
    </div>
  );
}

export default TakeOffSimulationModeling;