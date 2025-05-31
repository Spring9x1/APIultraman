async function getData() {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();

    document.getElementById('judul').textContent = data.judul;
    document.getElementById('deskripsi').textContent = data.deskripsi;

    document.getElementById('name').textContent = data.profile.name;
    document.getElementById('job').textContent = data.profile.job;
    document.getElementById('address').textContent = data.profile.address;


    const listContainer = document.getElementById('listultraman');
    listContainer.innerHTML = '';

    data.list.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.id} - ${item.name}`;
      li.style.cursor = 'pointer';

      li.addEventListener('click', () => {
        // isi data profile berdasarkan item yang diklik
        document.getElementById('name').textContent = item.id;
        document.getElementById('job').textContent = item.name;
        document.getElementById('address').textContent = item.alamat;

        // munculin card profile
        document.getElementById('profileCard').style.display = 'block';
      });

      listContainer.appendChild(li);
    });

  } catch (err) {
    console.error('Gagal ambil data:', err.message);
    document.getElementById('judul').textContent = 'Gagal ambil data';
  }
}

document.getElementById('loadData').addEventListener('click', getData);


  // async function getDataFromJSONFile(){
  //   const res = await fetch('./data.json');
  //   const data = await res.json();

  //   document.getElementById('data').innerHTML = JSON.stringify(data);
  // }
//  getDataFromJSONFile();
