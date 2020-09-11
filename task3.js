let seleksiNilai = (awal, akhir, data)=> {
  if(typeof  awal == 'number' && typeof akhir == 'number') {
      if(awal < akhir) {
          if(data.length > 5) {
              const point = data;
              point.sort(function(a,b) {return a - b });
              // console.log(point);
              const filtered = point.filter(Element => Element >= awal && Element <= akhir);
              console.log(filtered);
          } else {
              console.log('jumlah data dalam data array harus lebih dari 5');
          }
      } else {
          console.log('nilai akhir harus lebih besar dari nilai awal');
      }
  } else {
      console.log('data harus benar');
  }
}
// seleksiNilai(2,6,[4,7,2,1,3,10])
seleksiNilai(5,20,[2,25,4,14,17,30,8])