function mostrarVersiculo() {
    const tema = document.getElementById('tema').value;
    const versiculoElement = document.getElementById('versiculo');

    const versiculos = {
        depressao: [
            '“O Senhor é o meu pastor; de nada terei falta.” - Salmo 23:1',
            '“Eu lhes disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.” - João 16:33',
            '“O choro pode durar uma noite, mas a alegria vem pela manhã.” - Salmo 30:5'
        ],
        ansiedade: [
            '“Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.” - 1 Pedro 5:7',
            '“Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.” - Filipenses 4:6',
            '“Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá. Não se perturbem os seus corações, nem tenham medo.” - João 14:27'
        ],
        motivacao: [
            '“Posso todas as coisas naquele que me fortalece.” - Filipenses 4:13',
            '“Mas os que esperam no Senhor renovarão as suas forças. Subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.” - Isaías 40:31',
            '“Esforcem-se e tenham coragem! Não tenham medo, nem fiquem apavorados, porque o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.” - Deuteronômio 31:6'
        ],
        amor: [
            '“Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.” - Colossenses 3:14',
            '“O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.” - 1 Coríntios 13:4',
            '“Nós amamos porque ele nos amou primeiro.” - 1 João 4:19'
        ],
        perda: [
            '“Bem-aventurados os que choram, pois serão consolados.” - Mateus 5:4',
            '“Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; o teu bordão e o teu cajado me consolam.” - Salmo 23:4',
            '“O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.” - Salmo 34:18'
        ],
        autoestima: [
            '“Porque somos criação de Deus realizada em Cristo Jesus para fazermos boas obras, as quais Deus preparou antes para nós as praticarmos.” - Efésios 2:10',
            '“Eu sou contigo, e não te desampararei.” - Josué 1:5',
            '“Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação.” - 2 Timóteo 1:7'
        ]
    };

    let versiculo;
    
    if (tema && versiculos[tema]) {
        const versiculosDoTema = versiculos[tema];
        const versiculoAleatorio = versiculosDoTema[Math.floor(Math.random() * versiculosDoTema.length)];
        versiculo = versiculoAleatorio;
    } else {
        versiculo = 'Escolha um tema para ver um versículo motivacional.';
    }

    versiculoElement.innerHTML = `<p>${versiculo}</p>`;
}
