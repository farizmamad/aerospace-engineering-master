import { List } from 'antd';

function TakeOffSimulationConclusion() {
  const conclusion1 = [
    '(a) All-engine operating : tanpa rotasi, rotasi 2 deg/s, rotasi 4 deg/s, upslope 2 deg, dari ketinggian 700 m, headwind 1,83 m/s, dan dengan 80% thrust.',
    '(b) Continue/abort take-off : menghitung V1 dan balanced field length'
  ];

  const conclusion2 = [
    '(a) waktu dan jarak yang dibutuhkan oleh Harbin Y-12 (IV) untuk take-off memenuhi kondisi take-off pada umumnya.',
    '(b) Jarak take-off yang dibutuhkan untuk mencapai screen height lebih pendek dari referensi karena nilai CL/CD yang tinggi serta setting thrust 100%.',
  ];

  const conclusion3 = [
    '(a) Decision speed V1 hasil perhitungan lebih rendah dari referensi, yaitu 33,3 m/s, dan balanced field length yang lebih pendek dari referensi, yaitu 255 m, karena nilai CL/CD yang tinggi, setting thrust 100%, dan kerapatan udara saat simulasi merupakan kerapatan udara di sea-level.',
  ];

  const dataSource = [
    <>
      <p>(1) Perhitungan performa take-off pesawat Harbin Y-12 (IV) telah dilakukan untuk 2 kasus.</p>
      <List
        size="small"
        bordered
        dataSource={conclusion1}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>,
    <>
      <p>(2) Simulasi dalam kasus all-engine operating menunjukkan :</p>
      <List 
        size="small"
        bordered
        dataSource={conclusion2}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>,
    <>
      <p>(3) Simulasi dalam kasus one-engine inoperating menunjukkan :</p>
      <List 
        size="small"
        bordered
        dataSource={conclusion3}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  ];

  return (
    <>
      <List
        size="small"
        bordered
        dataSource={dataSource}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
}

export default TakeOffSimulationConclusion;