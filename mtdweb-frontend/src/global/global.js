class Perfil {
    constructor(nome, url, titulo, subTitulo, icone, corIcone, ordem) {
        this.nome = nome
        this.nomeCaixaBaixaSemAcento = nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        this.nomeAbrev = this.nomeCaixaBaixaSemAcento.substr(0,4)
        this.url = url
        this.titulo = titulo
        this.subTitulo = subTitulo
        this.corIcone = corIcone
        this.icone = icone + ' ' + corIcone
        this.ordem = ordem
    }
}

class Perfis {
    items = [
        new Perfil('Importação', '/importacao', 'Importação', 'Importação de Sessões Plenárias e Reuniões de Comissão', 'fa fa-download', '', 1),
        new Perfil('Distribuição', '/distribuicao', 'Distribuição', 'Distribuição dos discursos e sumários', 'fa fa-sitemap', 'text-primary', 2),
        new Perfil('Discurso', '/discurso', 'Discurso', 'Edição do Discurso', 'fa fa-commenting-o', '', 3),
        new Perfil('Sumário', '/sumario', 'Sumário', 'Edição do Sumário', 'fa fa-file-text-o','', 4),
        new Perfil('Revisão', '/revisao', 'Revisão', 'Revisão do Sumário', 'fa fa-check-circle', 'text-success', 5)
    ]

    getPerfilByNomeOuUrl(perfil) {
        if (!perfil) return null
        let caracteres = perfil.substr(0,1)=='/' ? 5 : 4
        perfil = perfil.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").substr(0,caracteres)
        const oPerfil = this.items.filter(p => {
            if (p.nomeAbrev == perfil || p.url.startsWith(perfil)) {
                return p
            }
        })
        return oPerfil ? oPerfil[0] : null
    }
}

export const perfis = new Perfis()

export const baseApiUrl = 'http://backend:9999'

