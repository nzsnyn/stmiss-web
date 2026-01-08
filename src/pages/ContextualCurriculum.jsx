import React from 'react';
import { Header, Footer } from '../components/Layout';
import { BookOpen, Globe, Users, Heart } from 'lucide-react';

const ContextualCurriculum = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[400px] flex items-center mt-[105px] bg-blue-900 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-950/80 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Teologi Kontekstual"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kurikulum Kontekstual</h1>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                        <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                            Menjembatani kebenaran Abadi Alkitab dengan realitas dinamis budaya dan masyarakat Indonesia masa kini.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">

                        {/* Intro */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Apa itu Kurikulum Kontekstual?</h2>
                                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                    Di ST Missiologia, kami percaya bahwa teologi tidak lahir di ruang hampa. Teologi harus berdialog dengan konteks di mana gereja berpijak.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Kurikulum kami dirancang untuk melengkapi mahasiswa tidak hanya dengan pengetahuan Alkitab yang mendalam, tetapi juga kemampuan analisis sosial-budaya untuk menerapkan kebenaran tersebut secara relevan di tengah masyarakat Indonesia yang majemuk.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                    <Globe className="text-yellow-500" /> Fokus Utama
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold shrink-0">1</div>
                                        <p className="text-gray-700">Eksegese Alkitab yang setia pada teks aslinya.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold shrink-0">2</div>
                                        <p className="text-gray-700">Analisis budaya lokal dan pandangan dunia masyarakat.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold shrink-0">3</div>
                                        <p className="text-gray-700">Strategi komunikasi Injil yang menyentuh hati tanpa sinkretisme.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3 Pillars */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-blue-900 mb-12">3 Pilar Pendekatan Kami</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-6 bg-white shadow-lg rounded-xl border-t-4 border-blue-900 hover:-translate-y-1 transition duration-300">
                                    <BookOpen size={48} className="mx-auto text-blue-900 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Biblika-Teologis</h3>
                                    <p className="text-gray-600 text-sm">
                                        Pondasi iman yang kokoh berdasarkan otoritas Alkitab dan warisan teologi gereja yang sehat.
                                    </p>
                                </div>
                                <div className="p-6 bg-white shadow-lg rounded-xl border-t-4 border-yellow-500 hover:-translate-y-1 transition duration-300">
                                    <Users size={48} className="mx-auto text-yellow-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Sosio-Antropologis</h3>
                                    <p className="text-gray-600 text-sm">
                                        Memahami manusia Indonesia dalam keunikan suku, bahasa, dan nilai-nilai budayanya.
                                    </p>
                                </div>
                                <div className="p-6 bg-white shadow-lg rounded-xl border-t-4 border-red-600 hover:-translate-y-1 transition duration-300">
                                    <Heart size={48} className="mx-auto text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Misi-Praktis</h3>
                                    <p className="text-gray-600 text-sm">
                                        Keterampilan melayani: berkhotbah, konseling, dan menanam gereja yang mandiri.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContextualCurriculum;
