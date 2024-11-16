import { OptionType } from "../type/common";

export function getLabelFromOption(options: OptionType[], value: number): string {
    let target = options.find(option => option.value === value);
    return target?.label ?? "";
}