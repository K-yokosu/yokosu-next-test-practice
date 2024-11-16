import { getLabelFromOption } from "../../lib/common";
import { FRAMEWORKS } from "../../const/common";

describe("getLabelFromOption", () => {
    test("正常パターン", () => {
        expect(getLabelFromOption(FRAMEWORKS,3)).toBe("Nuxt.js");
    });
});
