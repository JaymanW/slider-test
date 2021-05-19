// Tile Movement Logic
const swapLogic = (emptyIndex, selectedTileIndex, size) => {
    if (size === 3) {
        // Size 3 Logic
        if (emptyIndex === 0) {
            if (selectedTileIndex === 1 || selectedTileIndex === 3) {
                return true;
            }
        } else if (emptyIndex === 1) {
            if (selectedTileIndex === 0 || selectedTileIndex === 2 || selectedTileIndex === 4) {
                return true;
            }
        } else if (emptyIndex === 2) {
            if (selectedTileIndex === 1 || selectedTileIndex === 5) {
                return true;
            }
        } else if (emptyIndex === 3) {
            if (selectedTileIndex === 0 || selectedTileIndex === 4 || selectedTileIndex === 6) {
                return true;
            }
        } else if (emptyIndex === 4) {
            if (selectedTileIndex === 1 || selectedTileIndex === 3 || selectedTileIndex === 5 || selectedTileIndex === 7) {
                return true;
            }
        } else if (emptyIndex === 5) {
            if (selectedTileIndex === 2 || selectedTileIndex === 4 || selectedTileIndex === 8) {
                return true;
            }
        } else if (emptyIndex === 6) {
            if (selectedTileIndex === 3 || selectedTileIndex === 7) {
                return true;
            }
        } else if (emptyIndex === 7) {
            if (selectedTileIndex === 4 || selectedTileIndex === 6 || selectedTileIndex === 8) {
                return true;
            }
        } else if (emptyIndex === 8) {
            if (selectedTileIndex === 7 || selectedTileIndex === 5) {
                return true;
            }
        } else {
            return false;
        }
    } else if (size === 4) {
        // Size 4 Logic
        if (emptyIndex === 0) {
            if (selectedTileIndex === 1 || selectedTileIndex === 4) {
                return true;
            }
        } else if (emptyIndex === 1) {
            if (selectedTileIndex === 0 || selectedTileIndex === 2 || selectedTileIndex === 5) {
                return true;
            }
        } else if (emptyIndex === 2) {
            if (selectedTileIndex === 1 || selectedTileIndex === 3 || selectedTileIndex === 6) {
                return true;
            }
        } else if (emptyIndex === 3) {
            if (selectedTileIndex === 2 || selectedTileIndex === 7) {
                return true;
            }
        } else if (emptyIndex === 4) {
            if (selectedTileIndex === 0 || selectedTileIndex === 5 || selectedTileIndex === 8) {
                return true;
            }
        } else if (emptyIndex === 5) {
            if (selectedTileIndex === 1 || selectedTileIndex === 4 || selectedTileIndex === 6 || selectedTileIndex === 9) {
                return true;
            }
        } else if (emptyIndex === 6) {
            if (selectedTileIndex === 2 || selectedTileIndex === 5 || selectedTileIndex === 7 || selectedTileIndex === 10) {
                return true;
            }
        } else if (emptyIndex === 7) {
            if (selectedTileIndex === 3 || selectedTileIndex === 6 || selectedTileIndex === 11) {
                return true;
            }
        } else if (emptyIndex === 8) {
            if (selectedTileIndex === 4 || selectedTileIndex === 9 || selectedTileIndex === 12) {
                return true;
            }
        } else if (emptyIndex === 9) {
            if (selectedTileIndex === 5 || selectedTileIndex === 8 || selectedTileIndex === 10 || selectedTileIndex === 13) {
                return true;
            }
        } else if (emptyIndex === 10) {
            if (selectedTileIndex === 6 || selectedTileIndex === 9 || selectedTileIndex === 11 || selectedTileIndex === 14) {
                return true;
            }
        } else if (emptyIndex === 11) {
            if (selectedTileIndex === 7 || selectedTileIndex === 10 || selectedTileIndex === 15) {
                return true;
            }
        } else if (emptyIndex === 12) {
            if (selectedTileIndex === 8 || selectedTileIndex === 13) {
                return true;
            }
        } else if (emptyIndex === 13) {
            if (selectedTileIndex === 9 || selectedTileIndex === 12 || selectedTileIndex === 14) {
                return true;
            }
        } else if (emptyIndex === 14) {
            if (selectedTileIndex === 10 || selectedTileIndex === 13 || selectedTileIndex === 15) {
                return true;
            }
        } else if (emptyIndex === 15) {
            if (selectedTileIndex === 11 || selectedTileIndex === 14) {
                return true;
            }
        } else {
            return false;
        }
    }
}

export default swapLogic;