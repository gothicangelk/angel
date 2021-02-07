let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Escolho ficar sozinha, não por esperar o perfeito, mas nunca preciso desistir. ",
  "Uma única pessoa foi criada com um parceiro que não havia encontrado.",
  "Solteiros. Talvez seja a maneira de Deus dizer 'Descansa do amor errado'.",

  "Não procuro alguém que seja perfeito, mas procuro alguém que se torna perfeito graças à minha força.",
  "O namorado de alguém é nosso casamento pendente.",
  "Os solteiros devem passar. Chega um momento em que toda solidão se torna uma união com seu amante halal. Seja paciente.",
  "Romeu está disposto a morrer por Julieta, Jack morreu porque salvou Rose. Em essência, se você ainda quer viver, seja solteiro.",
  "Não procuro pessoas com base em seus pontos fortes, mas procuro pessoas com sua sinceridade.",
  "Matchmaking não é flip-flops, que muitas vezes são trocados. Portanto, continue na luta que deve ser.",
  "Se você é a corda do violão, eu não quero ser o guitarrista. Porque não quero terminar com você.",
  "Se amar você é uma ilusão, deixe-me imaginar para sempre.",
  "Querida ... Meu trabalho é só te amar, não contra o destino.",
  "Quando estou com você, parece 1 hora e apenas 1 segundo, mas se estou longe de você, parece que 1 dia se transforma em 1 ano.",
  "A compota de banana sabe suedang, embora a distância se estenda meu amor nunca irá desaparecer.",
  "Eu quero ser o único, não o único.",
  "Não posso prometer ser bom. Mas prometo estar sempre lá para você.",
  "Se eu me tornar o representante do povo, definitivamente fracassarei, como você gostaria de pensar no povo se tudo o que tenho em mente é você.",
  "Olha o meu jardim, cheio de flores. Olha os teus olhos, o meu coração desabrocha.",
  "Prometa estar comigo agora, amanhã e para sempre.",
  "A falta surge não só por causa da distância. Mas também por causa de desejos que não se realizam.",
  "Você nunca estará longe de mim, onde quer que eu vá você está sempre lá, porque você está sempre no meu coração, que é apenas o nosso corpo, não o nosso coração."

  "Sentir sua falta sem nunca se encontrar é como criar uma música que nunca canta.",
  "Há momentos em que a distância é sempre uma barreira entre eu e você, mas ainda no meu coração estamos sempre próximos.",
  "Se este coração é incapaz de conter todo o desejo, que poder posso fazer senão orar por você."
  
  "Através da saudade que inflama em meu coração, às vezes eu realmente preciso segurar seu abraço de amor.",
  "Na noite fria, não me lembro mais; Quantas vezes penso em você também.",
  "Sentir sua falta é como uma chuva que vem de repente e dura muito tempo. E mesmo depois que a chuva passou, minha saudade ainda era sentida.",
  
  "Você sabe a diferença entre pensi e seu rosto? Se o lápis de escrita puder ser apagado, mas se seu rosto não estiver, não haverá nada que possa ser apagado da minha mente.",
  "Não é o Exame Nacional de amanhã que tenho que me preocupar, mas o teste de vida que fiz depois que você me deixou.",
  "Uma coisa que a felicidade na escola me deixa animado é poder ver o seu sorriso todos os dias.",
  "Você sabe qual é a diferença entre ir para a escola e ir para sua casa? Quando você vai para a escola, livros e canetas são definitivamente o que você traz, mas se você for para sua casa, eu só preciso trazer meu coração e amor.
  "Não fico triste se for segunda-feira amanhã, fico triste se não te vejo.",
  "Meu momento de amor é perpendicular ao momento de seu amor. Fazendo do nosso amor um ponto de equilíbrio perfeito.",
  "Estou disposto a participar de uma corrida ao redor do mundo, desde que você seja a linha de chegada.",
  "Está faltando você na minha lição de casa. Mais forte que a matemática, mais ampla que a física, mais forte que a biologia.",
  "Meu amor por você é como um metabolismo, que não para até a morte.",
  "Se a distância for igual a você, eu vou buscá-lo, vou na fila para casa.",
  "Coma o que eu quiser de você, incluindo comer fígado.",
  "O amor é como uma sentença de morte. Se você não levar um tiro, você é enforcado."
  "Amar você é como uma droga: uma vez que você tenta ser viciante, não tentando deixá-lo curioso, deixar para trás faz você se retrair.",
  
  "Este mundo pertence apenas a nós dois. Os outros estão apenas se contraindo.",
  "Para mim, todos esses dias são terça-feira. Terça-feira no céu se perto de você ...",
  "E se nós dois nos tornarmos criminosos de gangue? Eu roubei seu coração e você roubou o meu.",
  "Você é como o café que bebi esta manhã. Amargo, mas viciante.","Muitas vezes tenho ciúme do seu batom. Ele pode beijar você todos os dias, de manhã à noite.",
  "Só de ouvir o seu nome pode me fazer sorrir como uma idiota.",
  "Eu sei que sua amiga não é apenas uma, e gostar de você não sou apenas eu.",
  "Desde que parei de esperar por você, não estou animado com tudo ..",
  "Com você, se apaixonar é a dor de cabeça mais deliberada.",
  "É muito difícil sentir a felicidade da vida sem a sua presença ao meu lado.",
  "Através da saudade que inflama em meu coração, às vezes eu realmente preciso segurar seu abraço de amor.",
  "Se você sabe, até agora eu ainda te amo.",
  "Às vezes tenho ciúme de pipa ... os atais se partem e continuo sendo perseguido e não quero ser levado por outras pessoas ...",
  "Eu não sabia o que era amor, até que finalmente te conheci. Mas, naquele momento, eu sabia como era de partir o coração.",
  "Perseguir cansa, mas cansa ainda mais de esperar \ nEsperar que você perceba minha existência ...",
  "Não pare de amar só porque foi ferido. Porque não há arco-íris sem chuva, não há amor verdadeiro sem chorar.",
  "Tenho um milhão de motivos para te esquecer, mas nada pode me obrigar a deixar de te amar.",
  "Às vezes, alguém se sente tão estúpido apenas por amar alguém.",
  "Você é o melhor desgosto de que nunca me arrependi.",
  "Não é que não valha a pena esperar, mas muitas vezes dá falsas esperanças.",
  "Parte de mim está com dor, Lembrando dela muito perto, mas intocável.",
  "A melhor coisa sobre amar alguém é orar secretamente por essa pessoa.",
  "Espero poder me livrar desse sentimento assim que perder você.",
  "Por amor, enganamos a nós mesmos. Tentar ser forte na verdade parecia uma desonra.",
  "Pense em mim como sua casa, se você for sabe para onde ir. Fique se quiser e saia quando estiver entediado ...",
  "Estou confuso, devo ficar desapontado ou não? Se estou desapontado, quem sou eu para ele? \ N \ nSe não estou desapontado, mas estou à espera das suas palavras.",
  "Minha saudade é como um galho que fica de pé. Mesmo que não haja mais folhas que o acompanhem, até que seque, se quebre e morra.",
  "Acho que agora somos apenas dois estranhos que têm as mesmas memórias.",
  "Faça com que eu seja capaz de te odiar, mesmo que por alguns minutos, para que não seja tão difícil te esquecer.",
  "Eu te amo de todo o coração, mas você até compartilha seus sentimentos com os outros.",
  "Amar você pode me quebrar, mas de alguma forma deixar você não me conserta.",
  "Você é o primeiro e o primeiro na minha vida. Mas eu sou o segundo para você.",
  "Se apenas nos encontrarmos num sonho, quero dormir para sempre.",
  "Ver você feliz é a minha felicidade, mesmo que você seja feliz sem estar comigo.",

  "Como eu poderia me mover se você meu coração parasse?",
  "Memórias sobre você são como um lar para mim. Assim, cada vez que meus pensamentos vagam, certamente as arestas sempre voltarão para você.",
  "Porque o tecido é útil? Porque o amor nunca seca. - Sujiwo Tejo",
  "Se amar você é um erro, ok, vou continuar errado.",
  "Como te conheço, quero continuar aprendendo. Aprender é o melhor para você.",
  "Alguém está agindo de forma estúpida só para ver você sorrir. E ele fica feliz com isso.",
  "Não sou uma boa pessoa, mas vou aprender a ser o melhor para você.",
  "Não estamos mortos, mas a ferida nos impede de andar como antes.",
  "sua existência é como uma xícara de café de que preciso todas as manhãs, o que pode me encorajar a ficar animado com o dia.",

  "Remendando cantar bem-humorado, mas doce, ao invés de final romântico pretensioso, mas trágico.",
  "Ben está finalmente desapontado, você tem que entender quando esperar e quando travar.",
  "I ki wong Jowo seng ora entende a arte 'I Love U'. Mas eu entendo mek 'I tresno your crew'.",
  "Ora, eu preciso ser bonita e gosto muito de você, tenho certeza que estou feliz, estou feliz.",
  "Meu amor, minha equipe, quebrei a câmera, concentre-se em sua equipe, tok liyane mah dissolvendo.",
  "Saben Dino é louco por sonhar, mas ora biso nduweni.",
  "Ora, conheci 30 dino rasane koyo por um mês.",
  "Eu sou como um gato selvagem sem você. Ambyar.",
  "Eu quero, eu sou wektu iso. Supoyo, estou tentando tirar sarro disso. Ben Lewih gosta da minha hora de desligar com o seu slime.",
  "Ora nunca entendeu opo kui tresno, kajaba sak nua encontrou karo sliramu.",
  "Eu te amo, moal leungit-leungit aí, geus casa com você.",
  "Sua paciência é ilimitada, mas seu amor será henteu"
]
