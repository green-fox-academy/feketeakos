import Employees from "./employees";

export default class Chef extends Employees {
    mealsCooked: Map<string, number>;

    constructor(name: string, experience: number = 0, mealsCooked?: Map<string, number>) {
        super(name, experience);
        this.mealsCooked = mealsCooked;
    }

    work(): void {
        this.experience++
    }

    cook(food: string): void {
        if (this.mealsCooked.has(food)) {
            this.mealsCooked.set(food, this.mealsCooked.get(food) + 1)
        } else {
            this.mealsCooked.set(food, 1)
        }
    }
}
let chef: Chef = new Chef('józsi', 0)

