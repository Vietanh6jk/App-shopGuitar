//ham thay doi so pice
const setPriceString = (val) => {
    let str = '';
    let a =val.toString();
    let x = 0;
    if (a.length > 3) {
        let i = 0;
        for (var key of a) {
            if ((a.length - i < 2)) {
                str += key + "";
                continue
            }

            switch (a.length % 3) {
                case 1:
                    x++;
                    if (x == 1) {
                        str += key + ",";
                    }
                    else {
                        str += key + "";
                    }

                    if (x == 3) {
                        x = 0;
                    }
                    break;
                case 2:
                    x++;
                    if (x == 2) {
                        str += key + ",";
                    }
                    else {
                        str += key + "";
                    }

                    if (x == 3) {
                        x = 0;
                    }
                    break;
                case 0:
                    x++;
                    if (x == 3) {
                        str += key + ",";
                    }
                    else {
                        str += key + "";
                    }

                    if (x == 3) {
                        x = 0;
                    }
                    break;

                default:
                    str += key;
                    break;
            }
            i++;
        }
    }

    return str;
}

export default {
    setPriceString
}
