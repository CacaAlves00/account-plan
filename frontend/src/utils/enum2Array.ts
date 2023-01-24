import { EnumType } from 'typescript';

function enum2Array(values: {}): string[] {
    return Object.keys(values).filter((item) => {
        return isNaN(Number(item))
    })
}

export default enum2Array