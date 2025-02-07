import { fixture } from '@open-wc/testing';
import { expect } from '@esm-bundle/chai';
import '../dynamicTabs.js';

describe("DynamicTabs", () => {
    it("should show something", async () => {
        const el = await fixture(html`<dynamic-tabs></dynamic-tabs>`);
        console.log("checking: ", el)
    });
});
