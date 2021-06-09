export class FileReaderEx extends FileReader {
    constructor() {
        super();
    }

    readAs(blob, ctx) {
        return new Promise((res, rej) => {
            super.addEventListener("load", ({ target }) => res(target.result));
            super.addEventListener("error", ({ target }) => rej(target.error));
            super[ctx](blob);
        });
    }

    readAsArrayBuffer(blob) {
        return this.readAs(blob, "readAsArrayBuffer");
    }

    readAsDataURL(blob) {
        return this.readAs(blob, "readAsDataURL");
    }

    readAsText(blob) {
        return this.readAs(blob, "readAsText");
    }
}