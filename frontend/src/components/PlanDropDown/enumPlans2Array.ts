import { Plan, Plans } from '@/redux/states/plan'

function enumPlans2Array(): Plan[] {
    const arr: Plan[] = []
    let plan: Plan | number

    for (plan in Plans) {
        if (isNaN(Number(plan)))
            arr.push(plan as Plan)
    }

    return arr
}

export default enumPlans2Array