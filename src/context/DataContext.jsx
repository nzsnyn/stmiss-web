// src/context/DataContext.jsx
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Helper untuk Load Data dari LocalStorage
  const loadState = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  // Data Website (Bisa diedit Admin)
  const [siteData, setSiteData] = useState(() => loadState('siteData_v2', {
    heroTitle: "Menjadi Terang Bagi Bangsa",
    heroDesc: "Bergabunglah dengan Sekolah Teologi Missiologia Yogyakarta untuk pendidikan teologi yang holistik.",
    heroImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ],
    programs: [
      {
        id: 1,
        level: "Sarjana (S1)",
        title: "Sarjana Teologi (S.Th)",
        desc: "Program empat tahun yang memberikan dasar teologi biblika yang kuat, pembentukan karakter rohani, dan keterampilan pelayanan praktis.",
        features: ["144 SKS", "Praktek Pelayanan 1 Tahun", "Konsentrasi: Pastoral & Misi"],
        color: "border-blue-900 bg-blue-50 text-blue-900"
      },
      {
        id: 2,
        level: "Magister (S2)",
        title: "Magister Missiologi (M.Miss)",
        desc: "Program pascasarjana yang dirancang untuk pendeta dan pemimpin pelayanan yang ingin mendalami strategi misi urban dan lintas budaya.",
        features: ["42 SKS", "Tesis Riset Lapangan", "Kuliah Modular/Hybrid"],
        color: "border-red-800 bg-red-50 text-red-800"
      },
      {
        id: 3,
        level: "Doktoral (S3)",
        title: "Doktor Teologi (D.Th)",
        desc: "Program riset tingkat lanjut untuk menghasilkan cendekiawan teologi yang mampu berkontribusi pada pemikiran teologis di konteks Asia.",
        features: ["Disertasi", "Seminar Internasional", "Publikasi Jurnal Terakreditasi"],
        color: "border-yellow-600 bg-yellow-50 text-yellow-600"
      }
    ],
    lecturers: [
      { id: 1, name: "Dr. Theol. Budi Santoso", role: "Dosen Dogmatika", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
      { id: 2, name: "Dr. Maria Kusuma, M.Th", role: "Dosen Perjanjian Baru", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
      { id: 3, name: "Pdt. Johanes, M.Miss", role: "Dosen Misiologi", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" }
    ]
  }));

  // Data Halaman About
  const [aboutData, setAboutData] = useState(() => loadState('aboutData', {
    hero: {
      title: "Tentang Kami",
      desc: "Mengenal lebih dekat Sekolah Teologi Missiologia, sejarah, visi, dan orang-orang di baliknya.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    history: {
      desc1: "Sekolah Teologi Missiologia didirikan pada tahun 1995 oleh sekelompok hamba Tuhan yang memiliki beban untuk melengkapi gereja-gereja di Indonesia dengan pemimpin yang tidak hanya cakap secara teologis, tetapi juga memiliki hati untuk misi.",
      desc2: "Berawal dari sebuah ruko kecil di Yogyakarta, ST Missiologia kini telah berkembang menjadi institusi pendidikan tinggi teologi yang diakui, meluluskan ribuan alumni yang melayani di berbagai pelosok nusantara dan mancanegara.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    vision: "Menjadi institusi pendidikan tinggi teologi unggulan yang menghasilkan pemimpin Kristen yang Alkitabiah, berkarakter Kristus, dan berwawasan misioner global pada tahun 2030.",
    mission: [
      "Menyelenggarakan pendidikan teologi yang bermutu dan relevan.",
      "Melaksanakan penelitian teologi untuk menjawab tantangan zaman.",
      "Melakukan pengabdian masyarakat sebagai wujud kasih Kristus."
    ],
    leaders: [
      { name: "Dr. Theol. Budi Santoso", role: "Ketua", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
      { name: "Dr. Maria Kusuma, M.Th", role: "PK I - Akademik", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
      { name: "Pdt. Johanes, M.Miss", role: "PK II - Keuangan", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
      { name: "Sarah Wijaya, M.A", role: "PK III - Kemahasiswaan", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
    ]
  }));

  // Fungsi Update Data
  const updateHero = (title, desc, images) => {
    setSiteData(prev => {
      const newData = { ...prev, heroTitle: title, heroDesc: desc, heroImages: images };
      localStorage.setItem('siteData_v2', JSON.stringify(newData));
      return newData;
    });
  };

  const updateAbout = (nData) => {
    setAboutData(nData);
    localStorage.setItem('aboutData', JSON.stringify(nData));
  }

  const updateLecturers = (nLecturers) => {
    setSiteData(prev => {
      const newData = { ...prev, lecturers: nLecturers };
      localStorage.setItem('siteData_v2', JSON.stringify(newData));
      return newData;
    });
  }

  const updatePrograms = (nPrograms) => {
    setSiteData(prev => {
      const newData = { ...prev, programs: nPrograms };
      localStorage.setItem('siteData_v2', JSON.stringify(newData));
      return newData;
    });
  }

  return (
    <DataContext.Provider value={{ siteData, updateHero, aboutData, updateAbout, updateLecturers, updatePrograms }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);