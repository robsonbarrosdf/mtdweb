export const getDataFormatada = d => {
    if (!d) return null
    let d2 = new Date(d)
    let dia=d2.getDate() + 100
    let mes=d2.getMonth() + 100
    let ano=d2.getFullYear()
    return dia.toString().substr(1,2) + '/' + mes.toString().substr(1,2) + '/' + ano.toString()
}

export const getHoraFormatada = d => {
    if (!d) return null
    let d2 = new Date(d)
    let hora=d2.getHours() + 100
    let minutos=d2.getMinutes() + 100
    let segundos=d2.getSeconds() + 100
    return hora.toString().substr(1,2) + ':' + minutos.toString().substr(1,2) + ':' + segundos.toString().substr(1,2)
}
