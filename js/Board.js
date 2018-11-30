class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            const columns = []

            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                columns.push(space);
            }
            spaces.push(columns);
        }
        return spaces;
    }

    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}