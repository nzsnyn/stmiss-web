import React from 'react';
import { Header, Footer } from '../components/Layout';
import { useData } from '../context/DataContext';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Lecturers = () => {
    const { siteData } = useData();
    const lecturers = siteData.lecturers || [];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[400px] flex items-center mt-[105px] bg-blue-900 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-950/80 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Dosen ST Missiologia"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dosen & Tenaga Pengajar</h1>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                        <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                            Dibimbing oleh para akademisi dan praktisi yang berdedikasi untuk mencetak pemimpin Kristen yang unggul.
                        </p>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Profil Pengajar Kami</h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            Dosen di Sekolah Teologi Missiologia tidak hanya memiliki kualifikasi akademis yang tinggi, tetapi juga pengalaman riil di ladang pelayanan. Kami percaya bahwa pendidikan teologi terbaik terjadi melalui mentoring dan keteladanan hidup.
                        </p>
                        <div className="flex justify-center gap-8 text-blue-900 font-bold">
                            <div className="flex items-center gap-2">
                                <GraduationCap size={24} className="text-yellow-500" /> Kualifikasi S2 & S3
                            </div>
                            <div className="flex items-center gap-2">
                                <Award size={24} className="text-yellow-500" /> Praktisi Misi
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {lecturers.map((lecturer) => (
                                <div key={lecturer.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={lecturer.img}
                                            alt={lecturer.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                            {/* Minimal overlay if needed, or just let image dim */}
                                        </div>
                                    </div>
                                    <div className="p-3 text-center">
                                        <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight group-hover:text-blue-900 transition">{lecturer.name}</h3>
                                        <p className="text-blue-600 font-bold text-[10px] uppercase tracking-wide">{lecturer.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Lecturers;
