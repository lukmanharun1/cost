'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('kota', [
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Barat",
        "kode_pos": "23681"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Barat Daya",
        "kode_pos": "23764"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Besar",
        "kode_pos": "23951"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Jaya",
        "kode_pos": "23654"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Selatan",
        "kode_pos": "23719"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Singkil",
        "kode_pos": "24785"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Tamiang",
        "kode_pos": "24476"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Tengah",
        "kode_pos": "24511"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Tenggara",
        "kode_pos": "24611"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Timur",
        "kode_pos": "24454"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Aceh Utara",
        "kode_pos": "24382"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Agam",
        "kode_pos": "26411"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Alor",
        "kode_pos": "85811"
    },
    {
        "provinsi_id": "19",
        "type": "Kota",
        "nama_kota": "Ambon",
        "kode_pos": "97222"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Asahan",
        "kode_pos": "21214"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Asmat",
        "kode_pos": "99777"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Badung",
        "kode_pos": "80351"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Balangan",
        "kode_pos": "71611"
    },
    {
        "provinsi_id": "15",
        "type": "Kota",
        "nama_kota": "Balikpapan",
        "kode_pos": "76111"
    },
    {
        "provinsi_id": "21",
        "type": "Kota",
        "nama_kota": "Banda Aceh",
        "kode_pos": "23238"
    },
    {
        "provinsi_id": "18",
        "type": "Kota",
        "nama_kota": "Bandar Lampung",
        "kode_pos": "35139"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Bandung",
        "kode_pos": "40311"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Bandung",
        "kode_pos": "40111"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Bandung Barat",
        "kode_pos": "40721"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Banggai",
        "kode_pos": "94711"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Banggai Kepulauan",
        "kode_pos": "94881"
    },
    {
        "provinsi_id": "2",
        "type": "Kabupaten",
        "nama_kota": "Bangka",
        "kode_pos": "33212"
    },
    {
        "provinsi_id": "2",
        "type": "Kabupaten",
        "nama_kota": "Bangka Barat",
        "kode_pos": "33315"
    },
    {
        "provinsi_id": "2",
        "type": "Kabupaten",
        "nama_kota": "Bangka Selatan",
        "kode_pos": "33719"
    },
    {
        "provinsi_id": "2",
        "type": "Kabupaten",
        "nama_kota": "Bangka Tengah",
        "kode_pos": "33613"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Bangkalan",
        "kode_pos": "69118"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Bangli",
        "kode_pos": "80619"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Banjar",
        "kode_pos": "70619"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Banjar",
        "kode_pos": "46311"
    },
    {
        "provinsi_id": "13",
        "type": "Kota",
        "nama_kota": "Banjarbaru",
        "kode_pos": "70712"
    },
    {
        "provinsi_id": "13",
        "type": "Kota",
        "nama_kota": "Banjarmasin",
        "kode_pos": "70117"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Banjarnegara",
        "kode_pos": "53419"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Bantaeng",
        "kode_pos": "92411"
    },
    {
        "provinsi_id": "5",
        "type": "Kabupaten",
        "nama_kota": "Bantul",
        "kode_pos": "55715"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Banyuasin",
        "kode_pos": "30911"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Banyumas",
        "kode_pos": "53114"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Banyuwangi",
        "kode_pos": "68416"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Barito Kuala",
        "kode_pos": "70511"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Barito Selatan",
        "kode_pos": "73711"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Barito Timur",
        "kode_pos": "73671"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Barito Utara",
        "kode_pos": "73881"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Barru",
        "kode_pos": "90719"
    },
    {
        "provinsi_id": "17",
        "type": "Kota",
        "nama_kota": "Batam",
        "kode_pos": "29413"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Batang",
        "kode_pos": "51211"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Batang Hari",
        "kode_pos": "36613"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Batu",
        "kode_pos": "65311"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Batu Bara",
        "kode_pos": "21655"
    },
    {
        "provinsi_id": "30",
        "type": "Kota",
        "nama_kota": "Bau-Bau",
        "kode_pos": "93719"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Bekasi",
        "kode_pos": "17837"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Bekasi",
        "kode_pos": "17121"
    },
    {
        "provinsi_id": "2",
        "type": "Kabupaten",
        "nama_kota": "Belitung",
        "kode_pos": "33419"
    },
    {
        "provinsi_id": "2",
        "type": "Kabupaten",
        "nama_kota": "Belitung Timur",
        "kode_pos": "33519"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Belu",
        "kode_pos": "85711"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Bener Meriah",
        "kode_pos": "24581"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Bengkalis",
        "kode_pos": "28719"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Bengkayang",
        "kode_pos": "79213"
    },
    {
        "provinsi_id": "4",
        "type": "Kota",
        "nama_kota": "Bengkulu",
        "kode_pos": "38229"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Bengkulu Selatan",
        "kode_pos": "38519"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Bengkulu Tengah",
        "kode_pos": "38319"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Bengkulu Utara",
        "kode_pos": "38619"
    },
    {
        "provinsi_id": "15",
        "type": "Kabupaten",
        "nama_kota": "Berau",
        "kode_pos": "77311"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Biak Numfor",
        "kode_pos": "98119"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Bima",
        "kode_pos": "84171"
    },
    {
        "provinsi_id": "22",
        "type": "Kota",
        "nama_kota": "Bima",
        "kode_pos": "84139"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Binjai",
        "kode_pos": "20712"
    },
    {
        "provinsi_id": "17",
        "type": "Kabupaten",
        "nama_kota": "Bintan",
        "kode_pos": "29135"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Bireuen",
        "kode_pos": "24219"
    },
    {
        "provinsi_id": "31",
        "type": "Kota",
        "nama_kota": "Bitung",
        "kode_pos": "95512"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Blitar",
        "kode_pos": "66171"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Blitar",
        "kode_pos": "66124"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Blora",
        "kode_pos": "58219"
    },
    {
        "provinsi_id": "7",
        "type": "Kabupaten",
        "nama_kota": "Boalemo",
        "kode_pos": "96319"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Bogor",
        "kode_pos": "16911"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Bogor",
        "kode_pos": "16119"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Bojonegoro",
        "kode_pos": "62119"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Bolaang Mongondow (Bolmong)",
        "kode_pos": "95755"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Bolaang Mongondow Selatan",
        "kode_pos": "95774"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Bolaang Mongondow Timur",
        "kode_pos": "95783"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Bolaang Mongondow Utara",
        "kode_pos": "95765"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Bombana",
        "kode_pos": "93771"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Bondowoso",
        "kode_pos": "68219"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Bone",
        "kode_pos": "92713"
    },
    {
        "provinsi_id": "7",
        "type": "Kabupaten",
        "nama_kota": "Bone Bolango",
        "kode_pos": "96511"
    },
    {
        "provinsi_id": "15",
        "type": "Kota",
        "nama_kota": "Bontang",
        "kode_pos": "75313"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Boven Digoel",
        "kode_pos": "99662"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Boyolali",
        "kode_pos": "57312"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Brebes",
        "kode_pos": "52212"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Bukittinggi",
        "kode_pos": "26115"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Buleleng",
        "kode_pos": "81111"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Bulukumba",
        "kode_pos": "92511"
    },
    {
        "provinsi_id": "16",
        "type": "Kabupaten",
        "nama_kota": "Bulungan (Bulongan)",
        "kode_pos": "77211"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Bungo",
        "kode_pos": "37216"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Buol",
        "kode_pos": "94564"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Buru",
        "kode_pos": "97371"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Buru Selatan",
        "kode_pos": "97351"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Buton",
        "kode_pos": "93754"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Buton Utara",
        "kode_pos": "93745"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Ciamis",
        "kode_pos": "46211"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Cianjur",
        "kode_pos": "43217"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Cilacap",
        "kode_pos": "53211"
    },
    {
        "provinsi_id": "3",
        "type": "Kota",
        "nama_kota": "Cilegon",
        "kode_pos": "42417"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Cimahi",
        "kode_pos": "40512"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Cirebon",
        "kode_pos": "45611"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Cirebon",
        "kode_pos": "45116"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Dairi",
        "kode_pos": "22211"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Deiyai (Deliyai)",
        "kode_pos": "98784"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Deli Serdang",
        "kode_pos": "20511"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Demak",
        "kode_pos": "59519"
    },
    {
        "provinsi_id": "1",
        "type": "Kota",
        "nama_kota": "Denpasar",
        "kode_pos": "80227"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Depok",
        "kode_pos": "16416"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Dharmasraya",
        "kode_pos": "27612"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Dogiyai",
        "kode_pos": "98866"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Dompu",
        "kode_pos": "84217"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Donggala",
        "kode_pos": "94341"
    },
    {
        "provinsi_id": "26",
        "type": "Kota",
        "nama_kota": "Dumai",
        "kode_pos": "28811"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Empat Lawang",
        "kode_pos": "31811"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Ende",
        "kode_pos": "86351"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Enrekang",
        "kode_pos": "91719"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Fakfak",
        "kode_pos": "98651"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Flores Timur",
        "kode_pos": "86213"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Garut",
        "kode_pos": "44126"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Gayo Lues",
        "kode_pos": "24653"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Gianyar",
        "kode_pos": "80519"
    },
    {
        "provinsi_id": "7",
        "type": "Kabupaten",
        "nama_kota": "Gorontalo",
        "kode_pos": "96218"
    },
    {
        "provinsi_id": "7",
        "type": "Kota",
        "nama_kota": "Gorontalo",
        "kode_pos": "96115"
    },
    {
        "provinsi_id": "7",
        "type": "Kabupaten",
        "nama_kota": "Gorontalo Utara",
        "kode_pos": "96611"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Gowa",
        "kode_pos": "92111"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Gresik",
        "kode_pos": "61115"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Grobogan",
        "kode_pos": "58111"
    },
    {
        "provinsi_id": "5",
        "type": "Kabupaten",
        "nama_kota": "Gunung Kidul",
        "kode_pos": "55812"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Gunung Mas",
        "kode_pos": "74511"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Gunungsitoli",
        "kode_pos": "22813"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Halmahera Barat",
        "kode_pos": "97757"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Halmahera Selatan",
        "kode_pos": "97911"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Halmahera Tengah",
        "kode_pos": "97853"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Halmahera Timur",
        "kode_pos": "97862"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Halmahera Utara",
        "kode_pos": "97762"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Hulu Sungai Selatan",
        "kode_pos": "71212"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Hulu Sungai Tengah",
        "kode_pos": "71313"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Hulu Sungai Utara",
        "kode_pos": "71419"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Humbang Hasundutan",
        "kode_pos": "22457"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Indragiri Hilir",
        "kode_pos": "29212"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Indragiri Hulu",
        "kode_pos": "29319"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Indramayu",
        "kode_pos": "45214"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Intan Jaya",
        "kode_pos": "98771"
    },
    {
        "provinsi_id": "6",
        "type": "Kota",
        "nama_kota": "Jakarta Barat",
        "kode_pos": "11220"
    },
    {
        "provinsi_id": "6",
        "type": "Kota",
        "nama_kota": "Jakarta Pusat",
        "kode_pos": "10540"
    },
    {
        "provinsi_id": "6",
        "type": "Kota",
        "nama_kota": "Jakarta Selatan",
        "kode_pos": "12230"
    },
    {
        "provinsi_id": "6",
        "type": "Kota",
        "nama_kota": "Jakarta Timur",
        "kode_pos": "13330"
    },
    {
        "provinsi_id": "6",
        "type": "Kota",
        "nama_kota": "Jakarta Utara",
        "kode_pos": "14140"
    },
    {
        "provinsi_id": "8",
        "type": "Kota",
        "nama_kota": "Jambi",
        "kode_pos": "36111"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Jayapura",
        "kode_pos": "99352"
    },
    {
        "provinsi_id": "24",
        "type": "Kota",
        "nama_kota": "Jayapura",
        "kode_pos": "99114"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Jayawijaya",
        "kode_pos": "99511"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Jember",
        "kode_pos": "68113"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Jembrana",
        "kode_pos": "82251"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Jeneponto",
        "kode_pos": "92319"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Jepara",
        "kode_pos": "59419"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Jombang",
        "kode_pos": "61415"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Kaimana",
        "kode_pos": "98671"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Kampar",
        "kode_pos": "28411"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Kapuas",
        "kode_pos": "73583"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Kapuas Hulu",
        "kode_pos": "78719"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Karanganyar",
        "kode_pos": "57718"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Karangasem",
        "kode_pos": "80819"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Karawang",
        "kode_pos": "41311"
    },
    {
        "provinsi_id": "17",
        "type": "Kabupaten",
        "nama_kota": "Karimun",
        "kode_pos": "29611"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Karo",
        "kode_pos": "22119"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Katingan",
        "kode_pos": "74411"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Kaur",
        "kode_pos": "38911"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Kayong Utara",
        "kode_pos": "78852"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Kebumen",
        "kode_pos": "54319"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Kediri",
        "kode_pos": "64184"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Kediri",
        "kode_pos": "64125"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Keerom",
        "kode_pos": "99461"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Kendal",
        "kode_pos": "51314"
    },
    {
        "provinsi_id": "30",
        "type": "Kota",
        "nama_kota": "Kendari",
        "kode_pos": "93126"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Kepahiang",
        "kode_pos": "39319"
    },
    {
        "provinsi_id": "17",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Anambas",
        "kode_pos": "29991"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Aru",
        "kode_pos": "97681"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Mentawai",
        "kode_pos": "25771"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Meranti",
        "kode_pos": "28791"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Sangihe",
        "kode_pos": "95819"
    },
    {
        "provinsi_id": "6",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Seribu",
        "kode_pos": "14550"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Siau Tagulandang Biaro (Sitaro)",
        "kode_pos": "95862"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Sula",
        "kode_pos": "97995"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Talaud",
        "kode_pos": "95885"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Kepulauan Yapen (Yapen Waropen)",
        "kode_pos": "98211"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Kerinci",
        "kode_pos": "37167"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Ketapang",
        "kode_pos": "78874"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Klaten",
        "kode_pos": "57411"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Klungkung",
        "kode_pos": "80719"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Kolaka",
        "kode_pos": "93511"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Kolaka Utara",
        "kode_pos": "93911"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Konawe",
        "kode_pos": "93411"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Konawe Selatan",
        "kode_pos": "93811"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Konawe Utara",
        "kode_pos": "93311"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Kotabaru",
        "kode_pos": "72119"
    },
    {
        "provinsi_id": "31",
        "type": "Kota",
        "nama_kota": "Kotamobagu",
        "kode_pos": "95711"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Kotawaringin Barat",
        "kode_pos": "74119"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Kotawaringin Timur",
        "kode_pos": "74364"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Kuantan Singingi",
        "kode_pos": "29519"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Kubu Raya",
        "kode_pos": "78311"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Kudus",
        "kode_pos": "59311"
    },
    {
        "provinsi_id": "5",
        "type": "Kabupaten",
        "nama_kota": "Kulon Progo",
        "kode_pos": "55611"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Kuningan",
        "kode_pos": "45511"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Kupang",
        "kode_pos": "85362"
    },
    {
        "provinsi_id": "23",
        "type": "Kota",
        "nama_kota": "Kupang",
        "kode_pos": "85119"
    },
    {
        "provinsi_id": "15",
        "type": "Kabupaten",
        "nama_kota": "Kutai Barat",
        "kode_pos": "75711"
    },
    {
        "provinsi_id": "15",
        "type": "Kabupaten",
        "nama_kota": "Kutai Kartanegara",
        "kode_pos": "75511"
    },
    {
        "provinsi_id": "15",
        "type": "Kabupaten",
        "nama_kota": "Kutai Timur",
        "kode_pos": "75611"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Labuhan Batu",
        "kode_pos": "21412"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Labuhan Batu Selatan",
        "kode_pos": "21511"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Labuhan Batu Utara",
        "kode_pos": "21711"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Lahat",
        "kode_pos": "31419"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Lamandau",
        "kode_pos": "74611"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Lamongan",
        "kode_pos": "64125"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Lampung Barat",
        "kode_pos": "34814"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Lampung Selatan",
        "kode_pos": "35511"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Lampung Tengah",
        "kode_pos": "34212"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Lampung Timur",
        "kode_pos": "34319"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Lampung Utara",
        "kode_pos": "34516"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Landak",
        "kode_pos": "78319"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Langkat",
        "kode_pos": "20811"
    },
    {
        "provinsi_id": "21",
        "type": "Kota",
        "nama_kota": "Langsa",
        "kode_pos": "24412"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Lanny Jaya",
        "kode_pos": "99531"
    },
    {
        "provinsi_id": "3",
        "type": "Kabupaten",
        "nama_kota": "Lebak",
        "kode_pos": "42319"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Lebong",
        "kode_pos": "39264"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Lembata",
        "kode_pos": "86611"
    },
    {
        "provinsi_id": "21",
        "type": "Kota",
        "nama_kota": "Lhokseumawe",
        "kode_pos": "24352"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Lima Puluh Koto/Kota",
        "kode_pos": "26671"
    },
    {
        "provinsi_id": "17",
        "type": "Kabupaten",
        "nama_kota": "Lingga",
        "kode_pos": "29811"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Lombok Barat",
        "kode_pos": "83311"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Lombok Tengah",
        "kode_pos": "83511"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Lombok Timur",
        "kode_pos": "83612"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Lombok Utara",
        "kode_pos": "83711"
    },
    {
        "provinsi_id": "33",
        "type": "Kota",
        "nama_kota": "Lubuk Linggau",
        "kode_pos": "31614"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Lumajang",
        "kode_pos": "67319"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Luwu",
        "kode_pos": "91994"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Luwu Timur",
        "kode_pos": "92981"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Luwu Utara",
        "kode_pos": "92911"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Madiun",
        "kode_pos": "63153"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Madiun",
        "kode_pos": "63122"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Magelang",
        "kode_pos": "56519"
    },
    {
        "provinsi_id": "10",
        "type": "Kota",
        "nama_kota": "Magelang",
        "kode_pos": "56133"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Magetan",
        "kode_pos": "63314"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Majalengka",
        "kode_pos": "45412"
    },
    {
        "provinsi_id": "27",
        "type": "Kabupaten",
        "nama_kota": "Majene",
        "kode_pos": "91411"
    },
    {
        "provinsi_id": "28",
        "type": "Kota",
        "nama_kota": "Makassar",
        "kode_pos": "90111"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Malang",
        "kode_pos": "65163"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Malang",
        "kode_pos": "65112"
    },
    {
        "provinsi_id": "16",
        "type": "Kabupaten",
        "nama_kota": "Malinau",
        "kode_pos": "77511"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Maluku Barat Daya",
        "kode_pos": "97451"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Maluku Tengah",
        "kode_pos": "97513"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Maluku Tenggara",
        "kode_pos": "97651"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Maluku Tenggara Barat",
        "kode_pos": "97465"
    },
    {
        "provinsi_id": "27",
        "type": "Kabupaten",
        "nama_kota": "Mamasa",
        "kode_pos": "91362"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Mamberamo Raya",
        "kode_pos": "99381"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Mamberamo Tengah",
        "kode_pos": "99553"
    },
    {
        "provinsi_id": "27",
        "type": "Kabupaten",
        "nama_kota": "Mamuju",
        "kode_pos": "91519"
    },
    {
        "provinsi_id": "27",
        "type": "Kabupaten",
        "nama_kota": "Mamuju Utara",
        "kode_pos": "91571"
    },
    {
        "provinsi_id": "31",
        "type": "Kota",
        "nama_kota": "Manado",
        "kode_pos": "95247"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Mandailing Natal",
        "kode_pos": "22916"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Manggarai",
        "kode_pos": "86551"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Manggarai Barat",
        "kode_pos": "86711"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Manggarai Timur",
        "kode_pos": "86811"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Manokwari",
        "kode_pos": "98311"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Manokwari Selatan",
        "kode_pos": "98355"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Mappi",
        "kode_pos": "99853"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Maros",
        "kode_pos": "90511"
    },
    {
        "provinsi_id": "22",
        "type": "Kota",
        "nama_kota": "Mataram",
        "kode_pos": "83131"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Maybrat",
        "kode_pos": "98051"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Medan",
        "kode_pos": "20228"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Melawi",
        "kode_pos": "78619"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Merangin",
        "kode_pos": "37319"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Merauke",
        "kode_pos": "99613"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Mesuji",
        "kode_pos": "34911"
    },
    {
        "provinsi_id": "18",
        "type": "Kota",
        "nama_kota": "Metro",
        "kode_pos": "34111"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Mimika",
        "kode_pos": "99962"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Minahasa",
        "kode_pos": "95614"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Minahasa Selatan",
        "kode_pos": "95914"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Minahasa Tenggara",
        "kode_pos": "95995"
    },
    {
        "provinsi_id": "31",
        "type": "Kabupaten",
        "nama_kota": "Minahasa Utara",
        "kode_pos": "95316"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Mojokerto",
        "kode_pos": "61382"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Mojokerto",
        "kode_pos": "61316"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Morowali",
        "kode_pos": "94911"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Muara Enim",
        "kode_pos": "31315"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Muaro Jambi",
        "kode_pos": "36311"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Muko Muko",
        "kode_pos": "38715"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Muna",
        "kode_pos": "93611"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Murung Raya",
        "kode_pos": "73911"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Musi Banyuasin",
        "kode_pos": "30719"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Musi Rawas",
        "kode_pos": "31661"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Nabire",
        "kode_pos": "98816"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Nagan Raya",
        "kode_pos": "23674"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Nagekeo",
        "kode_pos": "86911"
    },
    {
        "provinsi_id": "17",
        "type": "Kabupaten",
        "nama_kota": "Natuna",
        "kode_pos": "29711"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Nduga",
        "kode_pos": "99541"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Ngada",
        "kode_pos": "86413"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Nganjuk",
        "kode_pos": "64414"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Ngawi",
        "kode_pos": "63219"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Nias",
        "kode_pos": "22876"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Nias Barat",
        "kode_pos": "22895"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Nias Selatan",
        "kode_pos": "22865"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Nias Utara",
        "kode_pos": "22856"
    },
    {
        "provinsi_id": "16",
        "type": "Kabupaten",
        "nama_kota": "Nunukan",
        "kode_pos": "77421"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Ogan Ilir",
        "kode_pos": "30811"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Ogan Komering Ilir",
        "kode_pos": "30618"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Ogan Komering Ulu",
        "kode_pos": "32112"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Ogan Komering Ulu Selatan",
        "kode_pos": "32211"
    },
    {
        "provinsi_id": "33",
        "type": "Kabupaten",
        "nama_kota": "Ogan Komering Ulu Timur",
        "kode_pos": "32312"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Pacitan",
        "kode_pos": "63512"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Padang",
        "kode_pos": "25112"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Padang Lawas",
        "kode_pos": "22763"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Padang Lawas Utara",
        "kode_pos": "22753"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Padang Panjang",
        "kode_pos": "27122"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Padang Pariaman",
        "kode_pos": "25583"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Padang Sidempuan",
        "kode_pos": "22727"
    },
    {
        "provinsi_id": "33",
        "type": "Kota",
        "nama_kota": "Pagar Alam",
        "kode_pos": "31512"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Pakpak Bharat",
        "kode_pos": "22272"
    },
    {
        "provinsi_id": "14",
        "type": "Kota",
        "nama_kota": "Palangka Raya",
        "kode_pos": "73112"
    },
    {
        "provinsi_id": "33",
        "type": "Kota",
        "nama_kota": "Palembang",
        "kode_pos": "30111"
    },
    {
        "provinsi_id": "28",
        "type": "Kota",
        "nama_kota": "Palopo",
        "kode_pos": "91911"
    },
    {
        "provinsi_id": "29",
        "type": "Kota",
        "nama_kota": "Palu",
        "kode_pos": "94111"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Pamekasan",
        "kode_pos": "69319"
    },
    {
        "provinsi_id": "3",
        "type": "Kabupaten",
        "nama_kota": "Pandeglang",
        "kode_pos": "42212"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Pangandaran",
        "kode_pos": "46511"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Pangkajene Kepulauan",
        "kode_pos": "90611"
    },
    {
        "provinsi_id": "2",
        "type": "Kota",
        "nama_kota": "Pangkal Pinang",
        "kode_pos": "33115"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Paniai",
        "kode_pos": "98765"
    },
    {
        "provinsi_id": "28",
        "type": "Kota",
        "nama_kota": "Parepare",
        "kode_pos": "91123"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Pariaman",
        "kode_pos": "25511"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Parigi Moutong",
        "kode_pos": "94411"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Pasaman",
        "kode_pos": "26318"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Pasaman Barat",
        "kode_pos": "26511"
    },
    {
        "provinsi_id": "15",
        "type": "Kabupaten",
        "nama_kota": "Paser",
        "kode_pos": "76211"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Pasuruan",
        "kode_pos": "67153"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Pasuruan",
        "kode_pos": "67118"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Pati",
        "kode_pos": "59114"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Payakumbuh",
        "kode_pos": "26213"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Pegunungan Arfak",
        "kode_pos": "98354"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Pegunungan Bintang",
        "kode_pos": "99573"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Pekalongan",
        "kode_pos": "51161"
    },
    {
        "provinsi_id": "10",
        "type": "Kota",
        "nama_kota": "Pekalongan",
        "kode_pos": "51122"
    },
    {
        "provinsi_id": "26",
        "type": "Kota",
        "nama_kota": "Pekanbaru",
        "kode_pos": "28112"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Pelalawan",
        "kode_pos": "28311"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Pemalang",
        "kode_pos": "52319"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Pematang Siantar",
        "kode_pos": "21126"
    },
    {
        "provinsi_id": "15",
        "type": "Kabupaten",
        "nama_kota": "Penajam Paser Utara",
        "kode_pos": "76311"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Pesawaran",
        "kode_pos": "35312"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Pesisir Barat",
        "kode_pos": "35974"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Pesisir Selatan",
        "kode_pos": "25611"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Pidie",
        "kode_pos": "24116"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Pidie Jaya",
        "kode_pos": "24186"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Pinrang",
        "kode_pos": "91251"
    },
    {
        "provinsi_id": "7",
        "type": "Kabupaten",
        "nama_kota": "Pohuwato",
        "kode_pos": "96419"
    },
    {
        "provinsi_id": "27",
        "type": "Kabupaten",
        "nama_kota": "Polewali Mandar",
        "kode_pos": "91311"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Ponorogo",
        "kode_pos": "63411"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Pontianak",
        "kode_pos": "78971"
    },
    {
        "provinsi_id": "12",
        "type": "Kota",
        "nama_kota": "Pontianak",
        "kode_pos": "78112"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Poso",
        "kode_pos": "94615"
    },
    {
        "provinsi_id": "33",
        "type": "Kota",
        "nama_kota": "Prabumulih",
        "kode_pos": "31121"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Pringsewu",
        "kode_pos": "35719"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Probolinggo",
        "kode_pos": "67282"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Probolinggo",
        "kode_pos": "67215"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Pulang Pisau",
        "kode_pos": "74811"
    },
    {
        "provinsi_id": "20",
        "type": "Kabupaten",
        "nama_kota": "Pulau Morotai",
        "kode_pos": "97771"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Puncak",
        "kode_pos": "98981"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Puncak Jaya",
        "kode_pos": "98979"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Purbalingga",
        "kode_pos": "53312"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Purwakarta",
        "kode_pos": "41119"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Purworejo",
        "kode_pos": "54111"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Raja Ampat",
        "kode_pos": "98489"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Rejang Lebong",
        "kode_pos": "39112"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Rembang",
        "kode_pos": "59219"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Rokan Hilir",
        "kode_pos": "28992"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Rokan Hulu",
        "kode_pos": "28511"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Rote Ndao",
        "kode_pos": "85982"
    },
    {
        "provinsi_id": "21",
        "type": "Kota",
        "nama_kota": "Sabang",
        "kode_pos": "23512"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Sabu Raijua",
        "kode_pos": "85391"
    },
    {
        "provinsi_id": "10",
        "type": "Kota",
        "nama_kota": "Salatiga",
        "kode_pos": "50711"
    },
    {
        "provinsi_id": "15",
        "type": "Kota",
        "nama_kota": "Samarinda",
        "kode_pos": "75133"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Sambas",
        "kode_pos": "79453"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Samosir",
        "kode_pos": "22392"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Sampang",
        "kode_pos": "69219"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Sanggau",
        "kode_pos": "78557"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Sarmi",
        "kode_pos": "99373"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Sarolangun",
        "kode_pos": "37419"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Sawah Lunto",
        "kode_pos": "27416"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Sekadau",
        "kode_pos": "79583"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Selayar (Kepulauan Selayar)",
        "kode_pos": "92812"
    },
    {
        "provinsi_id": "4",
        "type": "Kabupaten",
        "nama_kota": "Seluma",
        "kode_pos": "38811"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Semarang",
        "kode_pos": "50511"
    },
    {
        "provinsi_id": "10",
        "type": "Kota",
        "nama_kota": "Semarang",
        "kode_pos": "50135"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Seram Bagian Barat",
        "kode_pos": "97561"
    },
    {
        "provinsi_id": "19",
        "type": "Kabupaten",
        "nama_kota": "Seram Bagian Timur",
        "kode_pos": "97581"
    },
    {
        "provinsi_id": "3",
        "type": "Kabupaten",
        "nama_kota": "Serang",
        "kode_pos": "42182"
    },
    {
        "provinsi_id": "3",
        "type": "Kota",
        "nama_kota": "Serang",
        "kode_pos": "42111"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Serdang Bedagai",
        "kode_pos": "20915"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Seruyan",
        "kode_pos": "74211"
    },
    {
        "provinsi_id": "26",
        "type": "Kabupaten",
        "nama_kota": "Siak",
        "kode_pos": "28623"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Sibolga",
        "kode_pos": "22522"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Sidenreng Rappang/Rapang",
        "kode_pos": "91613"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Sidoarjo",
        "kode_pos": "61219"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Sigi",
        "kode_pos": "94364"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Sijunjung (Sawah Lunto Sijunjung)",
        "kode_pos": "27511"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Sikka",
        "kode_pos": "86121"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Simalungun",
        "kode_pos": "21162"
    },
    {
        "provinsi_id": "21",
        "type": "Kabupaten",
        "nama_kota": "Simeulue",
        "kode_pos": "23891"
    },
    {
        "provinsi_id": "12",
        "type": "Kota",
        "nama_kota": "Singkawang",
        "kode_pos": "79117"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Sinjai",
        "kode_pos": "92615"
    },
    {
        "provinsi_id": "12",
        "type": "Kabupaten",
        "nama_kota": "Sintang",
        "kode_pos": "78619"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Situbondo",
        "kode_pos": "68316"
    },
    {
        "provinsi_id": "5",
        "type": "Kabupaten",
        "nama_kota": "Sleman",
        "kode_pos": "55513"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Solok",
        "kode_pos": "27365"
    },
    {
        "provinsi_id": "32",
        "type": "Kota",
        "nama_kota": "Solok",
        "kode_pos": "27315"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Solok Selatan",
        "kode_pos": "27779"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Soppeng",
        "kode_pos": "90812"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Sorong",
        "kode_pos": "98431"
    },
    {
        "provinsi_id": "25",
        "type": "Kota",
        "nama_kota": "Sorong",
        "kode_pos": "98411"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Sorong Selatan",
        "kode_pos": "98454"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Sragen",
        "kode_pos": "57211"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Subang",
        "kode_pos": "41215"
    },
    {
        "provinsi_id": "21",
        "type": "Kota",
        "nama_kota": "Subulussalam",
        "kode_pos": "24882"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Sukabumi",
        "kode_pos": "43311"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Sukabumi",
        "kode_pos": "43114"
    },
    {
        "provinsi_id": "14",
        "type": "Kabupaten",
        "nama_kota": "Sukamara",
        "kode_pos": "74712"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Sukoharjo",
        "kode_pos": "57514"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Sumba Barat",
        "kode_pos": "87219"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Sumba Barat Daya",
        "kode_pos": "87453"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Sumba Tengah",
        "kode_pos": "87358"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Sumba Timur",
        "kode_pos": "87112"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Sumbawa",
        "kode_pos": "84315"
    },
    {
        "provinsi_id": "22",
        "type": "Kabupaten",
        "nama_kota": "Sumbawa Barat",
        "kode_pos": "84419"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Sumedang",
        "kode_pos": "45326"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Sumenep",
        "kode_pos": "69413"
    },
    {
        "provinsi_id": "8",
        "type": "Kota",
        "nama_kota": "Sungaipenuh",
        "kode_pos": "37113"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Supiori",
        "kode_pos": "98164"
    },
    {
        "provinsi_id": "11",
        "type": "Kota",
        "nama_kota": "Surabaya",
        "kode_pos": "60119"
    },
    {
        "provinsi_id": "10",
        "type": "Kota",
        "nama_kota": "Surakarta (Solo)",
        "kode_pos": "57113"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Tabalong",
        "kode_pos": "71513"
    },
    {
        "provinsi_id": "1",
        "type": "Kabupaten",
        "nama_kota": "Tabanan",
        "kode_pos": "82119"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Takalar",
        "kode_pos": "92212"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Tambrauw",
        "kode_pos": "98475"
    },
    {
        "provinsi_id": "16",
        "type": "Kabupaten",
        "nama_kota": "Tana Tidung",
        "kode_pos": "77611"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Tana Toraja",
        "kode_pos": "91819"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Tanah Bumbu",
        "kode_pos": "72211"
    },
    {
        "provinsi_id": "32",
        "type": "Kabupaten",
        "nama_kota": "Tanah Datar",
        "kode_pos": "27211"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Tanah Laut",
        "kode_pos": "70811"
    },
    {
        "provinsi_id": "3",
        "type": "Kabupaten",
        "nama_kota": "Tangerang",
        "kode_pos": "15914"
    },
    {
        "provinsi_id": "3",
        "type": "Kota",
        "nama_kota": "Tangerang",
        "kode_pos": "15111"
    },
    {
        "provinsi_id": "3",
        "type": "Kota",
        "nama_kota": "Tangerang Selatan",
        "kode_pos": "15332"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Tanggamus",
        "kode_pos": "35619"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Tanjung Balai",
        "kode_pos": "21321"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Tanjung Jabung Barat",
        "kode_pos": "36513"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Tanjung Jabung Timur",
        "kode_pos": "36719"
    },
    {
        "provinsi_id": "17",
        "type": "Kota",
        "nama_kota": "Tanjung Pinang",
        "kode_pos": "29111"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Tapanuli Selatan",
        "kode_pos": "22742"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Tapanuli Tengah",
        "kode_pos": "22611"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Tapanuli Utara",
        "kode_pos": "22414"
    },
    {
        "provinsi_id": "13",
        "type": "Kabupaten",
        "nama_kota": "Tapin",
        "kode_pos": "71119"
    },
    {
        "provinsi_id": "16",
        "type": "Kota",
        "nama_kota": "Tarakan",
        "kode_pos": "77114"
    },
    {
        "provinsi_id": "9",
        "type": "Kabupaten",
        "nama_kota": "Tasikmalaya",
        "kode_pos": "46411"
    },
    {
        "provinsi_id": "9",
        "type": "Kota",
        "nama_kota": "Tasikmalaya",
        "kode_pos": "46116"
    },
    {
        "provinsi_id": "34",
        "type": "Kota",
        "nama_kota": "Tebing Tinggi",
        "kode_pos": "20632"
    },
    {
        "provinsi_id": "8",
        "type": "Kabupaten",
        "nama_kota": "Tebo",
        "kode_pos": "37519"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Tegal",
        "kode_pos": "52419"
    },
    {
        "provinsi_id": "10",
        "type": "Kota",
        "nama_kota": "Tegal",
        "kode_pos": "52114"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Teluk Bintuni",
        "kode_pos": "98551"
    },
    {
        "provinsi_id": "25",
        "type": "Kabupaten",
        "nama_kota": "Teluk Wondama",
        "kode_pos": "98591"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Temanggung",
        "kode_pos": "56212"
    },
    {
        "provinsi_id": "20",
        "type": "Kota",
        "nama_kota": "Ternate",
        "kode_pos": "97714"
    },
    {
        "provinsi_id": "20",
        "type": "Kota",
        "nama_kota": "Tidore Kepulauan",
        "kode_pos": "97815"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Timor Tengah Selatan",
        "kode_pos": "85562"
    },
    {
        "provinsi_id": "23",
        "type": "Kabupaten",
        "nama_kota": "Timor Tengah Utara",
        "kode_pos": "85612"
    },
    {
        "provinsi_id": "34",
        "type": "Kabupaten",
        "nama_kota": "Toba Samosir",
        "kode_pos": "22316"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Tojo Una-Una",
        "kode_pos": "94683"
    },
    {
        "provinsi_id": "29",
        "type": "Kabupaten",
        "nama_kota": "Toli-Toli",
        "kode_pos": "94542"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Tolikara",
        "kode_pos": "99411"
    },
    {
        "provinsi_id": "31",
        "type": "Kota",
        "nama_kota": "Tomohon",
        "kode_pos": "95416"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Toraja Utara",
        "kode_pos": "91831"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Trenggalek",
        "kode_pos": "66312"
    },
    {
        "provinsi_id": "19",
        "type": "Kota",
        "nama_kota": "Tual",
        "kode_pos": "97612"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Tuban",
        "kode_pos": "62319"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Tulang Bawang",
        "kode_pos": "34613"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Tulang Bawang Barat",
        "kode_pos": "34419"
    },
    {
        "provinsi_id": "11",
        "type": "Kabupaten",
        "nama_kota": "Tulungagung",
        "kode_pos": "66212"
    },
    {
        "provinsi_id": "28",
        "type": "Kabupaten",
        "nama_kota": "Wajo",
        "kode_pos": "90911"
    },
    {
        "provinsi_id": "30",
        "type": "Kabupaten",
        "nama_kota": "Wakatobi",
        "kode_pos": "93791"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Waropen",
        "kode_pos": "98269"
    },
    {
        "provinsi_id": "18",
        "type": "Kabupaten",
        "nama_kota": "Way Kanan",
        "kode_pos": "34711"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Wonogiri",
        "kode_pos": "57619"
    },
    {
        "provinsi_id": "10",
        "type": "Kabupaten",
        "nama_kota": "Wonosobo",
        "kode_pos": "56311"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Yahukimo",
        "kode_pos": "99041"
    },
    {
        "provinsi_id": "24",
        "type": "Kabupaten",
        "nama_kota": "Yalimo",
        "kode_pos": "99481"
    },
    {
        "provinsi_id": "5",
        "type": "Kota",
        "nama_kota": "Yogyakarta",
        "kode_pos": "55111"
    }
])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('kota', null, {});
  }
};
