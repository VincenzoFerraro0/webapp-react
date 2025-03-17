export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[#FAEAB2]">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#44AAB8] to-[#506C7F] py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Chi Siamo
                    </h1>
                    <p className="text-xl text-gray-200 md:w-2/3 mx-auto">
                        Innovatori appassionati che creano soluzioni digitali per un futuro migliore
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-[#506C7F] mb-6">
                            La Nostra Missione
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Siamo dedicati a rivoluzionare il modo in cui le persone interagiscono con la tecnologia.
                            Il nostro obiettivo è creare applicazioni intuitive che semplifichino la vita quotidiana,
                            combinando design elegante e funzionalità avanzate.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            alt="Mission"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#506C7F] mb-12">
                        Il Nostro Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="text-center">
                                <img
                                    alt={`Team member ${item}`}
                                    className="rounded-full w-48 h-48 object-cover mx-auto mb-4 hover:scale-105 transition-transform"
                                />
                                <h3 className="text-xl font-semibold text-[#506C7F]">Nome Cognome</h3>
                                <p className="text-[#44AAB8] mb-2">Ruolo</p>
                                <p className="text-gray-500 text-sm px-4">
                                    Breve descrizione del membro del team e delle sue competenze.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#506C7F] mb-12">
                        I Nostri Valori
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#44AAB8] text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">Innovazione</h3>
                            <p className="text-gray-600">
                                Ricerca costante di nuove soluzioni e approcci creativi
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#44AAB8] text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold mb-2">Collaborazione</h3>
                            <p className="text-gray-600">
                                Lavoro di squadra e partnership strategiche
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-[#44AAB8] text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold mb-2">Trasparenza</h3>
                            <p className="text-gray-600">
                                Comunicazione chiara e rapporti basati sulla fiducia
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#44AAB8] text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Pronto a Iniziare?</h2>
                    <p className="text-xl mb-8">Unisciti a migliaia di utenti soddisfatti</p>
                    <button className="bg-white text-[#44AAB8] px-8 py-3 rounded-full font-semibold hover:bg-[#FAEAB2] hover:text-[#506C7F] transition-colors">
                        Contattaci
                    </button>
                </div>
            </div>
        </div>
    )
}