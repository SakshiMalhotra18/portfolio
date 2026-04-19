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
      // If the element has children (like our name spans), we process them individually
      // to preserve the line breaks/containers.
      const children = Array.from(el.childNodes);
      el.innerHTML = "";
      
      children.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE || (node instanceof HTMLElement)) {
          const text = node.textContent || "";
          if (!text.trim() && node.nodeType === Node.TEXT_NODE) return;

          const container = (node instanceof HTMLElement) ? node.cloneNode(false) as HTMLElement : document.createElement("span");
          container.innerHTML = "";
          el.appendChild(container);

          const wordsArr = text.split(/(\s+)/); // Preserve spaces
          wordsArr.forEach((word) => {
            if (word.trim() === "") {
              container.appendChild(document.createTextNode(word));
              return;
            }

            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.className = "split-word";
            container.appendChild(wordSpan);
            this.words.push(wordSpan);

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
          });
        }
      });
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}
