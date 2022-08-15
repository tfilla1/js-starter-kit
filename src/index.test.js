import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = fs.readFileSync("./src/index.html", "utf-8")
        const { JSDOM } = jsdom;
        const dom = new JSDOM(index);

        const hi = dom.window.document.getElementsByTagName("h1")[0];

        expect(hi.innerHTML).to.equal("hello world");
        dom.window.close();
    })
})
