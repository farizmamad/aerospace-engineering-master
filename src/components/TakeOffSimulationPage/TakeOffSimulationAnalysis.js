function TakeOffSimulationAnalysis() {
  return (
    <>
      <p>
        Dalam simulasi ini, seluruhnya disimulasikan di ketinggian sea-level kecuali kasus ketinggian
        700 m. Berdasarkan hasil simulasi, didapatkan parameter performa untuk kasus all-engine
        operating (AEO) dan one-engine inoperating (OEI).
      </p>
      <p>
        Pada kasus AEO, performa take-off berdasarkan waktu yang dibutuhkan serta jarak untuk
        mencapai screen height menunjukkan angka yang masuk akal. Kasus rotate 2 deg/s menjadi
        patokan untuk menilai keabsahan kasus lainnya. Take-off tanpa rotasi membutuhkan jarak yang
        lebih pendek 4,8% dari patokan. Hal ini bisa terjadi karena sudut serang cenderung dekat
        dengan 0, sehingga tidak ada penambahan gaya angkat. Take-off pada runway dengan upslope
        2 deg membutuhkan jarak yang lebih panjang 4,04% dari patokan. Hal ini bisa terjadi karena
        pengaruh gaya berat muncul di sumbu x benda dan berlawanan dengan arah thrust, sehingga
        mengurangi percepatan di sumbu x. Take-off pada ketinggian 700 m membutuhkan jarak take-
        off yang lebih panjang 6,73% dari patokan. Hal ini bisa terjadi karena kerapatan udara pada
        ketinggian 700 m lebih rendah daripada di sea-level. Take-off pada kondisi headwind 1,83 m/s
        membutuhkan jarak yang lebih pendek 5,38% dari patokan. Hal ini bisa terjadi karena
        headwind meningkatkan kecepatan relatif pesawat terhadap angin. Take-off dengan 80% thrust
        membutuhkan jarak yang lebih panjang 13,45% dari patokan. Hal ini bisa terjadi karena
        percepatan dalam arah x menjadi lebih rendah dengan thrust yang lebih rendah 80% dari
        patokan. Kondisi ini mengakibatkan pertambahan gaya angkat lebih lambat seiring dengan
        take-off.
      </p>
      <p>
        Namun, hasil simulasi take-off pada kondisi AEO seluruh kasus menunjukkan jarak yang
        dibutuhkan jauh lebih pendek dari referensi, yang menunjukkan jarak 490 m untuk mencapai
        screen height. Hal ini bisa terjadi karena nilai CL/CD pesawat hasil aproksimasi menggunakan
        Java Foil berada di kisaran 67, lebih tinggi dibandingkan CL/CD pada umumnya yang berada
        di kisaran 10. Dengan CL/CD yang lebih tinggi, kecepatan dan gaya angkat pesawat lebih cepat
        meningkat. Sehingga, jarak yang dibutuhkan untuk mencapai screen height lebih pendek
        daripada referensi. Nilai lain yang mempengaruhi pendeknya jarak take-off adalah setting
        thrust. Sepanjang simulasi thrust diatur di 100%, kecuali pada kasus 80% thrust. Akibatnya,
        pertambahan kecepatan menjadi cepat dan gaya angkat akan lebih cepat meningkat. Sehingga
        jarak untuk take-off menjadi lebih pendek.
      </p>
      <p>
        Pada kasus OEI, engine pesawat disimulasikan mati pada kecepatan 30 m/s, 35 m/s, dan 40
        m/s. Jika pilot memutuskan untuk melanjutkan take-off, masing-masing membutuhkan jarak
        275 m, 247 m, dan 232 m. Jika pilot memutuhskan untuk membatalkan take-off, masing-masing
        membutuhkan jarak 219 m, 276 m, dan 343 m. Dari Gambar 9 dan Tabel 2, didapat nilai
        decision speed V1 33,3 m/s dan balanced field length BFL 255 m, sedangkan data referensi
        menunjukkan (dengan asumsi V1 = 1,05VMC) V1 37,0 m/s dan BFL 370 m (dengan asumsi
        data take-off run = BFL). Nilai V1 dan BFL yang lebih rendah dari referensi terjadi karena nilai
        CL/CD yang tinggi (kisaran 67) serta setting thrust 100%. Dengan nilai CL/CD dan setting thrust
        tersebut, pesawat mengalami percepatan yang besar dalam sumbu x dan sumbu z sehingga
        pesawat lebih cepat take-off dan mencapai screen height. Selain itu, lokasi/ketinggian runway
        dari permukaan laut bisa menjadi faktor lain. Dalam simulasi OEI, pesawat disimulasikan
        terbangdari ketinggian sea-level sehingga kerapatan udara bernilai 1,225 kg/m3

        . Dari referensi
        Jane’s All the World Aircraft, tidak disebutkan pesawat diuji take-off pada ketinggian berapa
        dari permukaan laut.
      </p>
    </>
  );
}

export default TakeOffSimulationAnalysis;