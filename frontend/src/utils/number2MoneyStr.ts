function number2MoneyStR (val: number): string {
    
    const formatter = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return formatter.format(val)
}

export default number2MoneyStR