import './number.extensions';

export function fizzBuzzOutput(num: number): void {
    for (let i = 0; i < num; i++) {
        console.log(`${i.fizzBuzz()}`);
    }
}
