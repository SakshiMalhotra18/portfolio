export class FreeSplitText {
  elements: HTMLElement[];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(target: string | HTMLElement | (string | HTMLElement)[], options: { type: string, linesClass?: string }) {
    const targets = Array.isArray(target) ? target : [target];
    this.elements = [];

    targets.forEach(t => {
      if (typeof t === "string") {
        this.elements.push(...Array.from(document.querySelectorAll(t) as NodeListOf<HTMLElement>));
      } else {
        this.elements.push(t);
      }
    });

    this.split(options);
  }

  private split(options: { type: string, linesClass?: string }) {
    this.elements.forEach(el => {
      const text = el.innerText;
      el.innerHTML = "";
      
      if (options.type.includes("words") || options.type.includes("chars")) {
        const wordsArr = text.split(" ");
        wordsArr.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.style.display = "inline-block";
          wordSpan.className = "split-word";
          
          if (options.type.includes("chars")) {
            word.split("").forEach(char => {
              const charSpan = document.createElement("span");
              charSpan.innerText = char;
              charSpan.style.display = "inline-block";
              charSpan.className = "split-char";
              wordSpan.appendChild(charSpan);
              this.chars.push(charSpan);
            });
          } else {
            wordSpan.innerText = word;
          }

          el.appendChild(wordSpan);
          this.words.push(wordSpan);

          if (wordIndex < wordsArr.length - 1) {
            const space = document.createTextNode(" ");
            el.appendChild(space);
          }
        });
      } else {
        el.innerText = text;
      }
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}
